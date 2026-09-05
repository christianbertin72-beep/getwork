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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#111316] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ----------------- HIRE A FREELANCER MODAL ----------------- */}
        {modalState.type === 'hire' && (
          <div>
            {!submitted ? (
              <>
                <div className="flex items-center gap-2 text-[#34d77f] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Hire top verified talent
                </h3>
                <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
                  Tell us what you need built and get connected with hand-picked freelancers in minutes.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Title or Role Needed
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Next.js SaaS Web App Developer"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#34d77f] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={projectBudget}
                      onChange={(e) => setProjectBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#181b1f] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#34d77f] transition-colors"
                    >
                      <option>&lt; $1,000 (Small sprint)</option>
                      <option>$1,000 - $3,000 (Standard MVP)</option>
                      <option>$3,000 - $10,000 (Full platform)</option>
                      <option>$10,000+ (Enterprise scale)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#7ae89d] hover:bg-[#6bd68e] text-[#051c0f] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#7ae89d]/15"
                    >
                      <span>Match with Freelancers</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-14 h-14 bg-[#34d77f]/20 rounded-full flex items-center justify-center text-[#34d77f] mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Project Request Submitted!</h4>
                <p className="mt-2 text-sm text-neutral-400 max-w-sm mx-auto">
                  Our matching engine is reviewing your requirements for <strong className="text-white">"{projectTitle}"</strong>. We'll present the top 3 vetted matches shortly.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  Back to getwork
                </button>
              </div>
            )}
          </div>
        )}

        {/* ----------------- FIND WORK MODAL ----------------- */}
        {modalState.type === 'work' && (
          <div>
            <div className="flex items-center gap-2 text-[#34d77f] text-xs font-semibold uppercase tracking-wider mb-2">
              <Search className="w-4 h-4" />
              <span>Verified Freelance Contracts</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Explore Open Projects
            </h3>
            <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
              Find verified high-impact opportunities with businesses worldwide and get paid with escrow security.
            </p>

            <div className="mt-5 space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
              {[
                { title: 'Senior Next.js 15 & Full-Stack Architect', client: 'Fintech Startup · US', rate: '$95 - $130/hr', type: 'Contract' },
                { title: 'Lead Product Designer (Design Systems)', client: 'AI Research Lab · UK', rate: '$85 - $110/hr', type: 'Full-time Remote' },
                { title: 'LLM & Autonomous Agent Workflow Engineer', client: 'Cognitive Labs · Global', rate: '$110 - $150/hr', type: 'Milestone' },
                { title: 'Mobile Flutter & Native iOS Engineer', client: 'Healthtech · Germany', rate: '$75 - $95/hr', type: 'Milestone' },
                { title: 'Growth Marketing & Attribution Strategist', client: 'HyperScale · US', rate: '$70 - $95/hr', type: 'Retainer' },
              ].map((job, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#34d77f]/40 hover:bg-white/[0.08] transition-all flex items-center justify-between group cursor-pointer">
                  <div>
                    <h5 className="text-sm font-semibold text-white group-hover:text-[#34d77f] transition-colors">{job.title}</h5>
                    <span className="text-xs text-neutral-400">{job.client} • {job.type}</span>
                  </div>
                  <div className="text-right flex-none pl-3">
                    <div className="text-xs font-bold text-[#34d77f]">{job.rate}</div>
                    <span className="text-[10px] text-[#7ae89d] bg-[#34d77f]/10 px-1.5 py-0.5 rounded font-medium">Verified</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-[#7ae89d] hover:bg-[#6bd68e] text-[#051c0f] font-semibold text-sm rounded-xl transition-colors cursor-pointer shadow-lg shadow-[#7ae89d]/15"
            >
              Apply to These Jobs as a Verified Freelancer
            </button>
          </div>
        )}

        {/* ----------------- AUTH (LOGIN / SIGNUP) MODAL ----------------- */}
        {modalState.type === 'auth' && (
          <div>
            <div className="flex border-b border-white/10 mb-6">
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className={`pb-3 text-sm font-semibold transition-colors mr-6 relative ${
                  authMode === 'signup' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Create Account
                {authMode === 'signup' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#34d77f]" />}
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`pb-3 text-sm font-semibold transition-colors relative ${
                  authMode === 'login' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                Log In
                {authMode === 'login' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#34d77f]" />}
              </button>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              {authMode === 'signup' ? 'Join MINDS today' : 'Welcome back to MINDS'}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {authMode === 'signup'
                ? 'Join thousands of businesses and verified talent worldwide.'
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
                <label className="block text-xs font-medium text-neutral-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#34d77f]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#34d77f]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-[#7ae89d] hover:bg-[#6bd68e] text-[#051c0f] font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                {authMode === 'signup' ? 'Get Started Free' : 'Sign In'}
              </button>
            </form>
          </div>
        )}

        {/* ----------------- CATEGORY EXPLORE MODAL ----------------- */}
        {modalState.type === 'category' && (
          <div>
            <div className="flex items-center gap-2 text-[#34d77f] text-xs font-semibold uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Category Exploration</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {modalState.data?.category || 'Specialized Freelancers'}
            </h3>
            <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
              Explore pre-vetted senior professionals available for immediate hiring in this category.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: 'Alex Rivera', role: 'Staff React/Next.js Engineer', exp: '8 yrs exp', rate: '$95/hr', rating: '5.0 (64 jobs)' },
                { name: 'Elena Chen', role: 'Senior Product Designer & Systems', exp: '6 yrs exp', rate: '$85/hr', rating: '4.9 (42 jobs)' },
                { name: 'Marcus Vance', role: 'Full-Stack TypeScript & AI Dev', exp: '9 yrs exp', rate: '$110/hr', rating: '5.0 (88 jobs)' },
              ].map((talent, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-semibold text-white">{talent.name}</h5>
                    <p className="text-xs text-neutral-400">{talent.role} • {talent.exp}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-[#34d77f]">{talent.rate}</span>
                    <p className="text-[10px] text-amber-400">★ {talent.rating}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-[#7ae89d] hover:bg-[#6bd68e] text-[#051c0f] font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Request Candidates
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
