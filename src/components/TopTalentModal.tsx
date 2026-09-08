import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Palette,
  Terminal,
  Clock,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  Check,
  Download,
} from 'lucide-react';

interface TopTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostJob?: () => void;
}

type TabType = 'overview' | 'vetting' | 'specialties' | 'guarantees';

export const TopTalentModal: React.FC<TopTalentModalProps> = ({
  isOpen,
  onClose,
  onPostJob,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const vettingStages = [
    {
      stage: '01',
      title: 'Portfolio & Production Track Record',
      passRate: 'Top 10% pass',
      icon: Users,
      description:
        'In-depth verification of production deliverables, enterprise architecture impact, GitHub commit depth, and professional employment credentials.',
      criteria: [
        'Verified 5+ years building production-grade software or design systems',
        'Direct codebase inspection for modularity and defensive patterns',
        'Verification of leadership and client-facing communication experience',
      ],
    },
    {
      stage: '02',
      title: 'Algorithmic & Code Quality Assessment',
      passRate: 'Top 5% pass',
      icon: Code2,
      description:
        'Rigorous automated and peer-reviewed technical challenges evaluating algorithmic complexity, edge-case resilience, and clean code standards.',
      criteria: [
        'Timed algorithmic problem-solving with strict runtime/space benchmarks',
        'Zero tolerance for anti-patterns or insecure dependency usage',
        'Rigorous unit and integration test coverage required on submissions',
      ],
    },
    {
      stage: '03',
      title: 'Live Systems Architecture & Live Coding',
      passRate: 'Top 2.5% pass',
      icon: Terminal,
      description:
        '90-minute live session with a MINDS Staff Engineer designing distributed systems, addressing concurrency, and crafting resilient API contracts.',
      criteria: [
        'Real-time whiteboarding of scalable cloud microservices and databases',
        'Live refactoring and debugging of complex asynchronous systems',
        'Evaluation of architectural trade-offs, security postures, and cost-efficiency',
      ],
    },
    {
      stage: '04',
      title: 'Communication & Problem Solving Rigor',
      passRate: 'Top 1.4% pass',
      icon: Sparkles,
      description:
        'Comprehensive assessment of English proficiency, asynchronous communication clarity, team collaboration, and proactive problem ownership.',
      criteria: [
        'Evaluation of async documentation quality and pull request communication',
        'Scenario-based assessment of timeline management and blocker resolution',
        'Empathy-driven cross-functional collaboration with product stakeholders',
      ],
    },
    {
      stage: '05',
      title: 'Continuous Quality & Sprint Auditing',
      passRate: 'Top 1% maintained',
      icon: ShieldCheck,
      description:
        'Talent must maintain a minimum 4.9/5.0 client satisfaction rating, undergo quarterly peer reviews, and uphold verified SLA commitments.',
      criteria: [
        'Mandatory escrow milestone sign-offs and sprint velocity tracking',
        'Quarterly peer code audits and architectural design reviews',
        'Zero tolerance for missed milestones or unannounced downtime',
      ],
    },
  ];

  const specialties = [
    {
      title: 'Full-Stack & Cloud Architects',
      icon: Cpu,
      stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'AWS'],
      description:
        'End-to-end architects capable of taking multi-tenant SaaS products from technical RFCs to global cloud deployment.',
    },
    {
      title: 'AI & Machine Learning Engineers',
      icon: Zap,
      stack: ['PyTorch', 'LLMs', 'RAG Pipelines', 'LangChain', 'Vector DBs', 'Python'],
      description:
        'Specialists in prompt engineering, model fine-tuning, embeddings, and real-time streaming AI integrations.',
    },
    {
      title: 'Lead UI/UX & Design Systems',
      icon: Palette,
      stack: ['Figma Tokens', 'Design Systems', 'Micro-interactions', 'Mobile Apps', 'Tailwind'],
      description:
        'Product designers who bridge the gap between Figma design systems and production-ready code with pixel-perfection.',
    },
    {
      title: 'DevOps & Site Reliability',
      icon: Terminal,
      stack: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'SOC2 Compliance', 'GCP'],
      description:
        'Engineers specializing in zero-downtime deployments, infrastructure-as-code, and enterprise security compliance.',
    },
  ];

  const guarantees = [
    {
      title: '14-Day Risk-Free Evaluation',
      desc: 'Work with any talent for two weeks. If you are not 100% satisfied with speed or code quality, you owe nothing.',
    },
    {
      title: '48-72 Hour Matching SLA',
      desc: 'Receive handpicked, pre-vetted candidate dossiers matched to your tech stack within 48 to 72 business hours.',
    },
    {
      title: '100% Intellectual Property Assignment',
      desc: 'All code, designs, and data created belong exclusively to you as Work-for-Hire with bilateral NDA security.',
    },
    {
      title: 'Zero Re-Onboarding Replacement Guarantee',
      desc: 'If a specialist ever needs to transition, MINDS provides a fully briefed replacement within 5 business days.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#111216] border border-white/[0.12] rounded-[24px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col text-left text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Top Gradient Indicator */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0099ff]/20 via-[#0099ff] to-[#0099ff]/20 pointer-events-none" />

        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-white/[0.08] flex-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0099ff]/10 border border-[#0099ff]/25 text-[12px] font-medium text-[#0099ff] mb-2.5">
                <Award className="w-3.5 h-3.5" />
                <span>MINDS Vetting Standard · Top 1% Certified</span>
              </div>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-[-0.7px]">
                Top 1% Vetted Talent
              </h2>
              <p className="mt-1 text-[13.5px] text-[#999999] max-w-2xl leading-relaxed">
                Only 1.4% of applicants pass our rigorous 5-stage technical screening. Pre-screened senior engineers, architects, and designers ready for immediate high-velocity deployment.
              </p>
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-[12px] text-[#cccccc] hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                title="Share link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Standard'}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#999999] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 mt-5 overflow-x-auto pb-1 text-[13px] no-scrollbar">
            {[
              { id: 'overview', label: 'Overview & Metrics' },
              { id: 'vetting', label: '5-Stage Vetting Protocol' },
              { id: 'specialties', label: 'Domain Disciplines' },
              { id: 'guarantees', label: 'Client Guarantees' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer text-[12.5px] font-medium ${
                  activeTab === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.04] text-[#999999] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto flex-1 space-y-6 text-[14px]">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Acceptance Rate', val: '1.4%', sub: 'Fewer than 14 per 1,000' },
              { label: 'Evaluation Stages', val: '5 Tiers', sub: 'Algorithm + Architecture' },
              { label: 'Staffing SLA', val: '48–72h', sub: 'Rapid candidate dossiers' },
              { label: 'Trial Evaluation', val: '14 Days', sub: '100% risk-free trial' },
            ].map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-[16px] bg-[#17181d] border border-white/[0.08] text-left"
              >
                <div className="text-[11px] font-mono text-[#0099ff] uppercase tracking-wider">{m.label}</div>
                <div className="text-[20px] font-semibold text-white tracking-tight mt-1">{m.val}</div>
                <div className="text-[11.5px] text-[#888888] mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Highlight Banner */}
              <div className="p-5 rounded-[18px] bg-gradient-to-r from-[#0099ff]/15 via-[#0099ff]/05 to-transparent border border-[#0099ff]/25">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30 flex items-center justify-center text-[#0099ff] flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-white">Why the Top 1% Matters</h3>
                    <p className="text-[13px] text-[#cccccc] mt-1 leading-relaxed">
                      Traditional freelance marketplaces allow anyone to post a profile, resulting in noisy bidding wars and inconsistent quality. MINDS flips the model: every specialist is vetted in advance through real-world live architecture challenges and algorithmic audits, eliminating ramp-up time and trial-and-error.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vetting Funnel Preview */}
              <div>
                <h4 className="text-[15px] font-semibold text-white mb-3">The 5-Stage Elimination Funnel</h4>
                <div className="space-y-2.5">
                  {vettingStages.map((stage) => (
                    <div
                      key={stage.stage}
                      className="p-4 rounded-[14px] bg-[#17181d] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-7 h-7 rounded-lg bg-white/[0.06] text-[#0099ff] font-mono text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
                          {stage.stage}
                        </span>
                        <div>
                          <div className="text-[14px] font-medium text-white">{stage.title}</div>
                          <div className="text-[12px] text-[#888888] mt-0.5 line-clamp-1">{stage.description}</div>
                        </div>
                      </div>
                      <span className="text-[11.5px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 whitespace-nowrap flex-shrink-0">
                        {stage.passRate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VETTING PROTOCOL */}
          {activeTab === 'vetting' && (
            <div className="space-y-4">
              {vettingStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.stage}
                    className="p-5 rounded-[18px] bg-[#17181d] border border-white/[0.08] hover:border-white/[0.14] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#0099ff]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11.5px] font-mono text-[#0099ff] font-medium">
                            STAGE {stage.stage}
                          </div>
                          <h3 className="text-[16px] font-semibold text-white tracking-tight">
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11.5px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        {stage.passRate}
                      </span>
                    </div>

                    <p className="text-[13px] text-[#aaaaaa] leading-relaxed mb-3">
                      {stage.description}
                    </p>

                    <div className="space-y-1.5 pl-1">
                      {stage.criteria.map((crit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[12.5px] text-[#cccccc]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0099ff] flex-shrink-0 mt-0.5" />
                          <span>{crit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: SPECIALTIES */}
          {activeTab === 'specialties' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-[18px] bg-[#17181d] border border-white/[0.08] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#0099ff] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-[15.5px] font-semibold text-white">{spec.title}</h4>
                      <p className="text-[13px] text-[#999999] mt-1.5 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <div className="text-[11px] font-mono text-[#888888] uppercase mb-2">Core Stack</div>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.stack.map((stk, j) => (
                          <span
                            key={j}
                            className="text-[11.5px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#cccccc]"
                          >
                            {stk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: GUARANTEES */}
          {activeTab === 'guarantees' && (
            <div className="space-y-4">
              {guarantees.map((g, i) => (
                <div
                  key={i}
                  className="p-5 rounded-[18px] bg-[#17181d] border border-white/[0.08] flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white">{g.title}</h4>
                    <p className="text-[13px] text-[#999999] mt-1 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-white/[0.08] bg-[#14151a] flex-none flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[12.5px] text-[#888888]">
            Need specialized talent? Matching begins within <strong className="text-white">24 hours</strong>.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[13.5px] text-[#999999] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onPostJob?.();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0099ff] hover:bg-[#0088ee] text-white font-medium text-[13.5px] rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,153,255,0.35)] transition-all hover:scale-[0.99]"
            >
              <span>Post a Job for Top 1% Talent</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
