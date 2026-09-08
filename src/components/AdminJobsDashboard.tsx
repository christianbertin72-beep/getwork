import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Check,
  XCircle,
  Archive,
  Search,
  RefreshCw,
  Building2,
  Mail,
  Calendar,
  Clock,
  ExternalLink,
  Database,
  Filter,
  LogOut,
  User,
  Trash2,
} from 'lucide-react';
import { Job, JobStatus, AuthUser } from '../types/job';
import {
  fetchJobs,
  updateJobStatus,
  deleteJob,
  isSupabaseConfigured,
  logoutAdmin,
} from '../lib/supabase';

interface AdminJobsDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
  onJobStatusChanged?: () => void;
}

export const AdminJobsDashboard: React.FC<AdminJobsDashboardProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogout,
  onJobStatusChanged,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [filter, setFilter] = useState<JobStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadJobs = async () => {
    setLoading(true);
    setFetchError(null);
    const res = await fetchJobs('all');
    if (res.success) {
      setJobs(res.data);
    } else {
      setFetchError(res.error || 'Failed to query Supabase database');
      setJobs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      loadJobs();
    }
  }, [isOpen, currentUser]);

  if (!isOpen || !currentUser) return null;

  const handleLogout = async () => {
    await logoutAdmin();
    onLogout?.();
    onClose();
  };

  const handleStatusUpdate = async (id: string, newStatus: JobStatus) => {
    setUpdatingId(id);
    await updateJobStatus(id, newStatus);
    await loadJobs();
    setUpdatingId(null);
    onJobStatusChanged?.();
  };

  const handleDeleteJob = async (id: string) => {
    setUpdatingId(id);
    await deleteJob(id);
    await loadJobs();
    setUpdatingId(null);
    onJobStatusChanged?.();
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesFilter = filter === 'all' || job.status === filter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.contact_email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const pendingCount = jobs.filter((j) => j.status === 'pending').length;
  const approvedCount = jobs.filter((j) => j.status === 'approved').length;

  const getStatusBadge = (status: JobStatus) => {
    switch (status) {
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-rose-500/15 text-rose-300 border border-rose-500/30">
            Rejected
          </span>
        );
      case 'archived':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-neutral-500/15 text-neutral-400 border border-neutral-500/30">
            Archived
          </span>
        );
      case 'pending':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
            Pending Review
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#0f1013] border border-white/[0.12] rounded-[24px] shadow-[0_35px_100px_rgba(0,0,0,0.95)] text-left text-white overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0099ff] to-transparent pointer-events-none" />

        {/* Dashboard Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-[#141519]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0099ff]/15 border border-[#0099ff]/30 flex items-center justify-center text-[#0099ff] shadow-[0_0_15px_rgba(0,153,255,0.25)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[19px] sm:text-[21px] font-semibold text-white tracking-[-0.5px]">
                  Admin Jobs Portal
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  is_admin() Verified
                </span>
              </div>
              <p className="text-[12.5px] text-[#999999]">
                Review employer submissions, verify compliance, and publish listings to the public feed.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Authenticated Admin Badge */}
            {currentUser && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] text-[#cccccc]">
                <User className="w-3.5 h-3.5 text-[#0099ff]" />
                <span className="font-mono text-[11.5px] max-w-[170px] truncate">{currentUser.email}</span>
              </div>
            )}

            <button
              onClick={loadJobs}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-[13px] flex items-center gap-1.5 transition-colors cursor-pointer border border-white/[0.08]"
              title="Refresh listings"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#0099ff]' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {/* Log Out Admin Action */}
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-[13px] flex items-center gap-1.5 transition-colors cursor-pointer border border-rose-500/25"
              title="Log out of Admin Portal"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span>Log out</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#999999] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close admin dashboard"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Database Status & Security Banner */}
        <div className="px-5 sm:px-6 py-2.5 bg-[#090a0d] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#888888]">
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-[#0099ff]" />
            <span>
              Database Provider:{' '}
              <strong className="text-white">
                Supabase PostgreSQL (Exclusively Live DB)
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              Pending Moderation: <strong className="text-amber-400">{pendingCount}</strong>
            </span>
            <span>•</span>
            <span>
              Live / Approved: <strong className="text-emerald-400">{approvedCount}</strong>
            </span>
            <span>•</span>
            <span className="text-[11px] text-[#0099ff] bg-[#0099ff]/10 px-2 py-0.5 rounded border border-[#0099ff]/20">
              Only Supabase DB Records
            </span>
          </div>
        </div>

        {/* Database Query Error Banner */}
        {fetchError && (
          <div className="mx-4 sm:mx-6 mt-4 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center justify-between gap-3 text-rose-300 text-[13px]">
            <span>Database Error: {fetchError}</span>
            <button
              type="button"
              onClick={loadJobs}
              className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 rounded text-[12px] text-white transition-colors cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters & Search Toolbar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#121316]">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-[#18191f] p-1 rounded-xl border border-white/[0.06] w-full sm:w-auto overflow-x-auto">
            {(['all', 'pending', 'approved', 'rejected', 'archived'] as (JobStatus | 'all')[]).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-all capitalize whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#0099ff] text-white shadow-[0_0_12px_rgba(0,153,255,0.4)]'
                      : 'text-[#888888] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab === 'all' ? 'All Jobs' : tab}
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title, company, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-[#18191f] border border-white/[0.08] rounded-xl text-[13px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] transition-colors"
            />
          </div>
        </div>

        {/* Jobs List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {loading ? (
            <div className="py-20 text-center text-[#888888]">
              <div className="w-8 h-8 border-2 border-[#0099ff]/30 border-t-[#0099ff] rounded-full animate-spin mx-auto mb-3" />
              <p className="text-[13.5px]">Loading jobs...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#666666] mx-auto mb-3">
                <Filter className="w-5 h-5" />
              </div>
              <h4 className="text-[16px] font-medium text-white">No job postings</h4>
              <p className="mt-1 text-[13px] text-[#888888] max-w-sm mx-auto">
                {searchQuery
                  ? `No listings match "${searchQuery}" with filter "${filter}".`
                  : filter === 'all'
                  ? 'No job listings found in the Supabase database. Any submissions via "Post a Job" are stored directly in Supabase and will appear here.'
                  : `No job submissions currently marked as "${filter}".`}
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#141519] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg"
              >
                {/* Left info */}
                <div className="space-y-2 max-w-2xl text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    {getStatusBadge(job.status)}
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.05] text-[#cccccc] border border-white/[0.08]">
                      {job.job_type}
                    </span>
                    <span className="text-[12px] text-[#666666] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(job.created_at).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-[16px] font-medium text-white tracking-[-0.3px]">
                      {job.title}
                    </h4>
                    <p className="mt-1 text-[13px] text-[#aaaaaa] line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-[#888888] pt-1">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <Building2 className="w-3.5 h-3.5 text-[#0099ff]" />
                      {job.company_name}
                    </span>
                    <a
                      href={`mailto:${job.contact_email}`}
                      className="flex items-center gap-1.5 text-[#888888] hover:text-[#0099ff] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {job.contact_email}
                    </a>
                  </div>
                </div>

                {/* Right Moderation Actions */}
                <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/[0.06] w-full md:w-auto justify-end">
                  {job.status !== 'approved' && (
                    <button
                      onClick={() => handleStatusUpdate(job.id, 'approved')}
                      disabled={updatingId === job.id}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-[12.5px] font-medium flex items-center gap-1.5 border border-emerald-500/30 transition-colors cursor-pointer"
                      title="Approve and publish to public feed"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve</span>
                    </button>
                  )}

                  {job.status !== 'rejected' && (
                    <button
                      onClick={() => handleStatusUpdate(job.id, 'rejected')}
                      disabled={updatingId === job.id}
                      className="px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-[12.5px] font-medium flex items-center gap-1.5 border border-rose-500/30 transition-colors cursor-pointer"
                      title="Reject listing"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Reject</span>
                    </button>
                  )}

                  {job.status !== 'archived' && (
                    <button
                      onClick={() => handleStatusUpdate(job.id, 'archived')}
                      disabled={updatingId === job.id}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#999999] hover:text-white text-[12.5px] font-medium flex items-center gap-1 border border-white/[0.08] transition-colors cursor-pointer"
                      title="Archive listing"
                    >
                      <Archive className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Archive</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    disabled={updatingId === job.id}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-rose-500/20 text-[#888888] hover:text-rose-400 border border-white/[0.06] hover:border-rose-500/30 transition-colors cursor-pointer"
                    title="Delete posting permanently"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
