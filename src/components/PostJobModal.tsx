import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Briefcase, Mail, Building2, FileText, AlertCircle, Database } from 'lucide-react';
import { submitJob, isSupabaseConfigured } from '../lib/supabase';
import { JobType } from '../types/job';

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobSubmitted?: () => void;
}

export const PostJobModal: React.FC<PostJobModalProps> = ({ isOpen, onClose, onJobSubmitted }) => {
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [jobType, setJobType] = useState<JobType>('Full-time');
  const [description, setDescription] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await submitJob({
        title,
        company_name: companyName,
        contact_email: contactEmail,
        job_type: jobType,
        description,
        honeypot,
      });

      if (!res.success) {
        setErrorMessage(res.error || 'Failed to submit job. Please check all fields.');
        setLoading(false);
        return;
      }

      setIsSuccess(true);
      onJobSubmitted?.();
    } catch (err: any) {
      setErrorMessage(err?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle('');
    setCompanyName('');
    setContactEmail('');
    setJobType('Full-time');
    setDescription('');
    setHoneypot('');
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#111215] border border-white/[0.12] rounded-[22px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-left text-white overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0099ff] to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#999999] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div className="overflow-y-auto pr-1">
            {/* Supabase status badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-[#cccccc]">
                <Briefcase className="w-3.5 h-3.5 text-[#0099ff]" />
                <span>Job Submission Portal</span>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                  isSupabaseConfigured
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-blue-500/10 border-blue-500/25 text-blue-300'
                }`}
              >
                <Database className="w-3 h-3" />
                <span>{isSupabaseConfigured ? 'Supabase Database Connected' : 'Connecting to Supabase...'}</span>
              </div>
            </div>

            <h3 className="text-[24px] sm:text-[26px] font-medium text-white tracking-[-0.8px] leading-tight">
              Post a New Opportunity
            </h3>
            <p className="mt-1.5 text-[13.5px] text-[#999999] leading-relaxed">
              Fill out the details below. Submitted listings are validated and queued for review by the admin team before going live.
            </p>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-[12px] flex items-start gap-2.5 text-red-300 text-[13px]">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Invisible Honeypot field for bot protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this</label>
                <input
                  id="hp_field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
                  Job Title <span className="text-[#0099ff]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Full-Stack Next.js Developer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors"
                  />
                </div>
              </div>

              {/* 2-Column: Company Name & Contact Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
                    Company / Poster Name <span className="text-[#0099ff]">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#666666] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
                    Contact Email <span className="text-[#0099ff]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#666666] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="hiring@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Job Type Selector */}
              <div>
                <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
                  Job Type <span className="text-[#0099ff]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Full-time', 'Part-time', 'Contract', 'Remote'] as JobType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setJobType(type)}
                      className={`py-2 px-3 rounded-[10px] text-[13px] font-medium border transition-all cursor-pointer text-center ${
                        jobType === type
                          ? 'bg-[#0099ff]/20 border-[#0099ff] text-white shadow-[0_0_12px_rgba(0,153,255,0.3)]'
                          : 'bg-[#17181c] border-white/[0.08] text-[#999999] hover:text-white hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
                  Job Description & Requirements <span className="text-[#0099ff]">*</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#666666] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline key deliverables, tech stack requirements, compensation milestones, and team setup..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#0099ff] hover:bg-[#0088ee] disabled:opacity-50 text-white font-medium text-[14px] rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,153,255,0.35)] transition-all hover:scale-[0.99]"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Job for Review</span>
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-4 shadow-[0_0_24px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-[22px] font-medium text-white tracking-[-0.6px]">
              Job Posting Submitted to Supabase
            </h4>
            <p className="mt-2 text-[14px] text-[#999999] max-w-md mx-auto leading-relaxed">
              Your opportunity <strong className="text-white">"{title}"</strong> has been saved directly to the Supabase database with status <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono text-[12px] border border-amber-500/30">pending</span>.
              It is now available in the Admin Portal for review.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-medium text-[13.5px] rounded-full hover:bg-neutral-200 transition-colors"
              >
                Post Another Job
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#1e1e1e] hover:bg-[#282828] text-white text-[13.5px] font-medium rounded-full border border-white/[0.1] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
