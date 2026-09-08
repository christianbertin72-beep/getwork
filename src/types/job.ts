export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
export type JobStatus = 'pending' | 'approved' | 'rejected' | 'archived';

export interface Job {
  id: string;
  title: string;
  company_name: string;
  contact_email: string;
  job_type: JobType;
  description: string;
  status: JobStatus;
  user_id?: string | null;
  created_at: string;
  updated_at?: string;
}

export interface JobSubmissionInput {
  title: string;
  company_name: string;
  contact_email: string;
  job_type: JobType;
  description: string;
  honeypot?: string; // Bot spam trap
}

export interface AuthUser {
  id: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  isAdmin: boolean;
}
