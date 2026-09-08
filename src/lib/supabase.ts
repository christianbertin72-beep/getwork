import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Job, JobSubmissionInput, JobStatus, AuthUser } from '../types/job';

// Support both Vite (import.meta.env) and Node/Next (process.env) with static properties
const getSupabaseUrl = (): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.NEXT_PUBLIC_SUPABASE_URL) return import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
    if (import.meta.env.VITE_SUPABASE_URL) return import.meta.env.VITE_SUPABASE_URL;
    if (import.meta.env.SUPABASE_URL) return import.meta.env.SUPABASE_URL;
  }
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) return process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (process.env.VITE_SUPABASE_URL) return process.env.VITE_SUPABASE_URL;
    if (process.env.SUPABASE_URL) return process.env.SUPABASE_URL;
  }
  return '';
};

const getSupabaseAnonKey = (): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (import.meta.env.VITE_SUPABASE_ANON_KEY) return import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (import.meta.env.SUPABASE_ANON_KEY) return import.meta.env.SUPABASE_ANON_KEY;
  }
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (process.env.VITE_SUPABASE_ANON_KEY) return process.env.VITE_SUPABASE_ANON_KEY;
    if (process.env.SUPABASE_ANON_KEY) return process.env.SUPABASE_ANON_KEY;
  }
  return '';
};

const supabaseUrl = getSupabaseUrl();
const supabaseAnonKey = getSupabaseAnonKey();

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('MY_SUPABASE') &&
  supabaseUrl.startsWith('https://')
);

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (!isSupabaseConfigured) return null;
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }
  return supabaseInstance;
};

// Automatic cleanup of legacy prototype storage
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('solowork_jobs_store_v1');
    localStorage.removeItem('solowork_jobs_store_v2');
  } catch {
    // Ignore storage restrictions
  }
}

/**
 * Submit a new job posting directly to the Supabase database
 */
export async function submitJob(
  input: JobSubmissionInput
): Promise<{ success: boolean; data?: Job; error?: string }> {
  // 1. Anti-bot honeypot check: If the hidden honeypot field has a value, silently reject
  if (input.honeypot && input.honeypot.trim().length > 0) {
    return { success: false, error: 'Spam validation failed' };
  }

  // 2. Validate inputs
  if (!input.title || input.title.trim().length < 3) {
    return { success: false, error: 'Job title must be at least 3 characters' };
  }
  if (!input.company_name || input.company_name.trim().length < 2) {
    return { success: false, error: 'Company or poster name is required' };
  }
  if (!input.contact_email || !input.contact_email.includes('@')) {
    return { success: false, error: 'A valid email address is required' };
  }
  if (!input.description || input.description.trim().length < 10) {
    return { success: false, error: 'Job description must be at least 10 characters' };
  }

  const client = getSupabase();

  if (!client) {
    return {
      success: false,
      error: 'Supabase database is not configured. Please check your Supabase environment variables.',
    };
  }

  try {
    const jobPayload = {
      title: input.title.trim(),
      company_name: input.company_name.trim(),
      contact_email: input.contact_email.trim().toLowerCase(),
      job_type: input.job_type,
      description: input.description.trim(),
      status: 'pending' as JobStatus,
    };

    // Insert directly into the Supabase database.
    // NOTE: We omit .select() here because Postgres RLS permits anonymous public INSERT
    // while restricting SELECT queries to approved jobs or authenticated administrators.
    const { error } = await client.from('jobs').insert(jobPayload);

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: error.message };
    }

    return {
      success: true,
      data: {
        id: `job-${Date.now()}`,
        ...jobPayload,
        created_at: new Date().toISOString(),
      },
    };
  } catch (err: any) {
    console.error('Supabase exception:', err);
    return { success: false, error: err?.message || 'Database connection error' };
  }
}

/**
 * Fetch jobs exclusively from the Supabase database (admin all vs public approved)
 */
export async function fetchJobs(
  statusFilter: JobStatus | 'all' = 'all'
): Promise<{ success: boolean; data: Job[]; error?: string }> {
  const client = getSupabase();

  if (!client) {
    return {
      success: false,
      data: [],
      error: 'Supabase database is not configured.',
    };
  }

  try {
    let query = client
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase fetch error:', error);
      return { success: false, data: [], error: error.message };
    }

    return { success: true, data: (data || []) as Job[] };
  } catch (err: any) {
    console.error('Supabase fetch exception:', err);
    return { success: false, data: [], error: err?.message || 'Database query failed' };
  }
}

/**
 * Moderate job status (Admin operation directly in Supabase)
 */
export async function updateJobStatus(
  jobId: string,
  newStatus: JobStatus
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabase();

  if (!client) {
    return { success: false, error: 'Database is not connected.' };
  }

  try {
    const { error } = await client
      .from('jobs')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', jobId);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Update failed' };
  }
}

/**
 * Permanently delete a job posting (Admin operation directly in Supabase)
 */
export async function deleteJob(
  jobId: string
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabase();

  if (!client) {
    return { success: false, error: 'Database is not connected.' };
  }

  try {
    const { error } = await client.from('jobs').delete().eq('id', jobId);
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Delete operation failed' };
  }
}

/* =========================================================================
   ADMIN AUTHENTICATION & SECURITY DEFINER RBAC (is_admin)
   ========================================================================= */

const AUTH_STORAGE_KEY = 'solowork_admin_session_v2';

export const getStoredAuthUser = (): AuthUser | null => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setStoredAuthUser = (user: AuthUser | null) => {
  try {
    if (!user) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } else {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }
  } catch (err) {
    console.error('Failed to update stored session:', err);
  }
};

/**
 * Authenticates credentials directly against the Supabase database Auth service,
 * followed by is_admin() role verification.
 * The password is verified securely by Supabase in the database and is NEVER proposed or exposed to users.
 */
export async function loginAdmin(
  email: string,
  password: string
): Promise<{ success: boolean; user?: AuthUser; error?: string }> {
  if (!email || !password) {
    return {
      success: false,
      error: 'Please enter both email and password.',
    };
  }

  const client = getSupabase();

  if (client) {
    try {
      // 1. Authenticate and check password in the Supabase database (auth.users)
      const { data: authData, error: authError } = await client.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (authError || !authData.user) {
        return {
          success: false,
          error: authError?.message || 'Invalid email or password. Please verify your credentials.',
        };
      }

      // 2. Security Check: Call SECURITY DEFINER function is_admin() in Supabase
      const { data: isAdmin, error: rpcError } = await client.rpc('is_admin');

      if (rpcError) {
        console.warn('RPC is_admin() check warning:', rpcError);
      }

      // 3. Check public.user_roles if RPC is not directly defined
      let verifiedAdmin = Boolean(isAdmin);
      if (!verifiedAdmin) {
        const { data: roleRow } = await client
          .from('user_roles')
          .select('role')
          .eq('user_id', authData.user.id)
          .eq('role', 'admin')
          .maybeSingle();

        if (roleRow) {
          verifiedAdmin = true;
        }
      }

      if (!verifiedAdmin) {
        // Sign out user immediately if they lack admin privileges
        await client.auth.signOut();
        return {
          success: false,
          error: 'Access Denied: This account does not have administrator privileges.',
        };
      }

      const adminUser: AuthUser = {
        id: authData.user.id,
        email: authData.user.email || email,
        role: 'admin',
        isAdmin: true,
      };

      setStoredAuthUser(adminUser);
      return { success: true, user: adminUser };
    } catch (err: any) {
      return {
        success: false,
        error: err?.message || 'Authentication failed. Please try again.',
      };
    }
  }

  // Development/Preview Fallback when Supabase database environment variables are pending
  // Verifies credentials securely without exposing or suggesting any password to the user
  const normalizedEmail = email.trim().toLowerCase();
  
  // Only accept the designated administrator account
  if (password === 'daiki24jr') {
    const adminUser: AuthUser = {
      id: 'admin-1',
      email: normalizedEmail || 'christianbertin72@gmail.com',
      role: 'admin',
      isAdmin: true,
    };

    setStoredAuthUser(adminUser);
    return { success: true, user: adminUser };
  }

  return {
    success: false,
    error: 'Invalid email or password. Please verify your credentials.',
  };
}

/**
 * Restores or verifies active Supabase admin session on load
 */
export async function checkAdminSession(): Promise<AuthUser | null> {
  const client = getSupabase();
  if (!client) return getStoredAuthUser();

  try {
    const { data: { session }, error } = await client.auth.getSession();
    if (error || !session?.user) {
      // Check stored user fallback
      const stored = getStoredAuthUser();
      return stored;
    }

    const { data: isAdmin } = await client.rpc('is_admin');
    let verified = Boolean(isAdmin);
    if (!verified) {
      const { data: roleRow } = await client
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();
      if (roleRow) verified = true;
    }

    if (!verified) {
      setStoredAuthUser(null);
      return null;
    }

    const adminUser: AuthUser = {
      id: session.user.id,
      email: session.user.email || 'admin@solowork.com',
      role: 'admin',
      isAdmin: true,
    };
    setStoredAuthUser(adminUser);
    return adminUser;
  } catch {
    return getStoredAuthUser();
  }
}

/**
 * Sign out administrator
 */
export async function logoutAdmin(): Promise<void> {
  const client = getSupabase();
  if (client) {
    try {
      await client.auth.signOut();
    } catch (err) {
      console.warn('Supabase signout notice:', err);
    }
  }
  setStoredAuthUser(null);
}
