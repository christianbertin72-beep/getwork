import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Search, UserCheck } from 'lucide-react';

export interface ModalState {
  type: 'hire' | 'work' | 'auth' | 'category' | 'feature' | null;
  data?: any;
}

interface InteractiveModalsProps {
  modalState: ModalState;
  onClose: () => void;
}

export const InteractiveModals: React.FC<InteractiveModalsProps> = ({ modalState, onClose }) => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>(
    modalState.data?.mode === 'login' ? 'login' : 'signup'
  );
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('$1,000 - $3,000');
  const [submitted, setSubmitted] = useState(false);

  if (!modalState.type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-white/[0.08] rounded-[20px] p-7 sm:p-8 shadow-2xl text-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#999999] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ----------------- HIRE A FREELANCER MODAL ----------------- */}
        {modalState.type === 'hire' && (
          <div>
            {!submitted ? (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-[#999999] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-white">Start a Project</span>
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-1.0px] leading-tight">
                  Hire top vetted talent
                </h3>
                <p className="mt-2 text-[14px] text-[#999999] leading-[1.4] tracking-[-0.14px]">
                  Describe your milestone scope and receive curated proposals from verified senior specialists.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="block text-[13px] font-medium text-white mb-1.5 tracking-[-0.13px]">
                      Project Title or Role Needed
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Next.js SaaS Web App Developer"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1e1e1e] border border-white/[0.08] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff]/60 focus:ring-1 focus:ring-[#0099ff]/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-white mb-1.5 tracking-[-0.13px]">
                      Estimated Milestone Budget
                    </label>
                    <select
                      value={projectBudget}
                      onChange={(e) => setProjectBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#1e1e1e] border border-white/[0.08] rounded-[10px] text-[14px] text-white focus:outline-none focus:border-[#0099ff]/60 focus:ring-1 focus:ring-[#0099ff]/40 transition-colors"
                    >
                      <option>&lt; $1,000 (Single sprint)</option>
                      <option>$1,000 - $3,000 (Standard milestone)</option>
                      <option>$3,000 - $10,000 (Full platform MVP)</option>
                      <option>$10,000+ (Enterprise squad)</option>
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3 bg-white text-black font-medium text-[14px] rounded-full flex items-center justify-center gap-2 cursor-pointer hover:scale-[0.98] transition-transform"
                    >
                      <span>Match with Freelancers</span>
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-4 border border-white/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-[20px] font-medium text-white tracking-[-0.7px]">Project Request Received</h4>
                <p className="mt-2 text-[14px] text-[#999999] max-w-sm mx-auto leading-[1.4] tracking-[-0.14px]">
                  Our matchmaking team is reviewing your requirements for <strong className="text-white">"{projectTitle}"</strong>. We will notify you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-[#1e1e1e] hover:bg-[#252525] text-white text-[13.5px] font-medium rounded-full border border-white/[0.08] transition-colors"
                >
                  Return to overview
                </button>
              </div>
            )}
          </div>
        )}

        {/* ----------------- FIND WORK MODAL ----------------- */}
        {modalState.type === 'work' && (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-[#999999] mb-4">
              <Search className="w-3.5 h-3.5 text-white" />
              <span className="text-white">Verified Contracts</span>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-1.0px]">
              Explore Open Projects
            </h3>
            <p className="mt-1.5 text-[14px] text-[#999999] leading-[1.4] tracking-[-0.14px]">
              High-impact contracts with funded companies worldwide. Escrow protection on every deliverable.
            </p>

            <div className="mt-5 space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {[
                { title: 'Senior Next.js 15 & Full-Stack Architect', client: 'Fintech · US', rate: '$95 - $130/hr', type: 'Contract' },
                { title: 'Lead Product Designer (Design Systems)', client: 'AI Research Lab · UK', rate: '$85 - $110/hr', type: 'Remote' },
                { title: 'LLM & Autonomous Agent Workflow Engineer', client: 'Cognitive Labs · Global', rate: '$110 - $150/hr', type: 'Milestone' },
                { title: 'Mobile Flutter & Native iOS Engineer', client: 'Healthtech · Germany', rate: '$75 - $95/hr', type: 'Milestone' },
                { title: 'Growth Marketing & Attribution Strategist', client: 'HyperScale · US', rate: '$70 - $95/hr', type: 'Retainer' },
              ].map((job, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[12px] bg-[#1e1e1e] border border-white/[0.06] hover:border-white/20 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h5 className="text-[13.5px] font-medium text-white group-hover:text-white transition-colors">{job.title}</h5>
                    <span className="text-[12px] text-[#999999]">{job.client} • {job.type}</span>
                  </div>
                  <div className="text-right flex-none pl-3">
                    <div className="text-[13px] font-mono text-white">{job.rate}</div>
                    <span className="text-[10px] text-[#999999] bg-white/[0.06] px-1.5 py-0.5 rounded font-medium">Verified</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-white text-black font-medium text-[14px] rounded-full hover:scale-[0.98] transition-transform cursor-pointer"
            >
              Apply as a Verified Freelancer
            </button>
          </div>
        )}

        {/* ----------------- AUTH (LOGIN / SIGNUP) MODAL ----------------- */}
        {modalState.type === 'auth' && (
          <div>
            <div className="flex border-b border-white/[0.06] mb-6">
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`pb-3 text-[14px] font-medium transition-colors mr-6 relative ${
                  authMode === 'signup' ? 'text-white' : 'text-[#999999] hover:text-white'
                }`}
              >
                Create Account
                {authMode === 'signup' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white" />}
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`pb-3 text-[14px] font-medium transition-colors relative ${
                  authMode === 'login' ? 'text-white' : 'text-[#999999] hover:text-white'
                }`}
              >
                Log In
                {authMode === 'login' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white" />}
              </button>
            </div>

            <h3 className="text-[22px] font-medium text-white tracking-[-0.8px]">
              {authMode === 'signup' ? 'Join MINDS' : 'Welcome back to MINDS'}
            </h3>
            <p className="text-[13.5px] text-[#999999] mt-1 tracking-[-0.13px]">
              {authMode === 'signup'
                ? 'Join verified talent and high-growth companies worldwide.'
                : 'Access your projects, milestones, and payments.'}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="mt-5 space-y-3.5"
            >
              <div>
                <label className="block text-[13px] font-medium text-white mb-1 tracking-[-0.13px]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#1e1e1e] border border-white/[0.08] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff]/60 focus:ring-1 focus:ring-[#0099ff]/40"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-white mb-1 tracking-[-0.13px]">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 bg-[#1e1e1e] border border-white/[0.08] rounded-[10px] text-[14px] text-white placeholder-[#666666] focus:outline-none focus:border-[#0099ff]/60 focus:ring-1 focus:ring-[#0099ff]/40"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-white text-black font-medium text-[14px] rounded-full hover:scale-[0.98] transition-transform cursor-pointer"
              >
                {authMode === 'signup' ? 'Get Started' : 'Sign In'}
              </button>
            </form>
          </div>
        )}

        {/* ----------------- CATEGORY EXPLORE MODAL ----------------- */}
        {modalState.type === 'category' && (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-[#999999] mb-4">
              <UserCheck className="w-3.5 h-3.5 text-white" />
              <span>Category Exploration</span>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-1.0px]">
              {modalState.data?.category || 'Specialized Freelancers'}
            </h3>
            <p className="mt-1.5 text-[14px] text-[#999999] leading-[1.4] tracking-[-0.14px]">
              Verified senior professionals ready for immediate sprint and contract deployments.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: 'Alex Rivera', role: 'Staff React & Next.js Engineer', exp: '8 yrs exp', rate: '$95/hr', rating: '5.0' },
                { name: 'Elena Chen', role: 'Lead Product Designer & Systems', exp: '6 yrs exp', rate: '$85/hr', rating: '4.9' },
                { name: 'Marcus Vance', role: 'Full-Stack TypeScript & AI Dev', exp: '9 yrs exp', rate: '$110/hr', rating: '5.0' },
              ].map((talent, i) => (
                <div key={i} className="p-3.5 rounded-[12px] bg-[#1e1e1e] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h5 className="text-[13.5px] font-medium text-white">{talent.name}</h5>
                    <p className="text-[12px] text-[#999999]">{talent.role} • {talent.exp}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[13px] font-mono text-white">{talent.rate}</span>
                    <p className="text-[11px] text-[#999999]">★ {talent.rating}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-white text-black font-medium text-[14px] rounded-full hover:scale-[0.98] transition-transform cursor-pointer"
            >
              Request Candidate Matches
            </button>
          </div>
        )}

        {/* ----------------- FEATURE DETAIL MODAL ----------------- */}
        {modalState.type === 'feature' && (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-[#999999] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Deep Dive</span>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-1.0px]">
              {modalState.data?.title || 'Feature Overview'}
            </h3>
            <p className="mt-2 text-[14px] text-[#999999] leading-[1.45] tracking-[-0.14px]">
              MINDS provides enterprise-grade infrastructure for milestone management, escrow handling, and asynchronous remote collaboration.
            </p>

            <div className="mt-6 p-4 rounded-[12px] bg-[#1e1e1e] border border-white/[0.06] space-y-2 text-[13.5px] text-[#999999]">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0099ff]" />
                <span>Zero-risk guarantee</span>
              </div>
              <p>Milestone funds are securely escrowed and only distributed upon client verification of delivered deliverables.</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-white text-black font-medium text-[14px] rounded-full hover:scale-[0.98] transition-transform cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
