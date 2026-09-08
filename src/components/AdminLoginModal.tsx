import React, { useState } from 'react';
import { X, ShieldAlert, Lock, Mail, ArrowRight, AlertCircle, Database, CheckCircle2, ShieldCheck } from 'lucide-react';
import { loginAdmin, isSupabaseConfigured } from '../lib/supabase';
import { AuthUser } from '../types/job';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AuthUser) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await loginAdmin(email, password);

      if (!res.success || !res.user) {
        setErrorMessage(res.error || 'Authentication failed. Please verify your credentials.');
        setLoading(false);
        return;
      }

      // Success! Pass authenticated user up
      onLoginSuccess(res.user);
      onClose();
    } catch (err: any) {
      setErrorMessage(err?.message || 'Authentication error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#111216] border border-white/[0.14] rounded-[24px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-left text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top security red/blue accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0099ff] via-amber-400 to-[#0099ff] pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#999999] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon & Security Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0099ff]/15 border border-[#0099ff]/30 flex items-center justify-center text-[#0099ff] shadow-[0_0_20px_rgba(0,153,255,0.25)]">
            <Lock className="w-6 h-6" />
          </div>

          <div
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
              isSupabaseConfigured
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/25 text-amber-300'
            }`}
          >
            <Database className="w-3 h-3" />
            <span>{isSupabaseConfigured ? 'Supabase Auth Active' : 'Auth Guard Active'}</span>
          </div>
        </div>

        <h3 className="text-[22px] sm:text-[24px] font-semibold text-white tracking-[-0.6px]">
          Admin Authentication
        </h3>
        <p className="mt-1.5 text-[13.5px] text-[#999999] leading-relaxed">
          Access to the Job Moderation Portal is restricted. Please sign in with your verified administrator credentials.
        </p>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-[12px] flex items-start gap-2.5 text-rose-300 text-[13px]">
            <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
              Administrator Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#666666] absolute left-3 top-3 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="admin@solowork.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#e0e0e0] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#666666] absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#17181c] border border-white/[0.1] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff]/50 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#0099ff] hover:bg-[#0088ee] disabled:opacity-50 text-white font-medium text-[14px] rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,153,255,0.35)] transition-all hover:scale-[0.99] mt-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Admin & Log In</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
