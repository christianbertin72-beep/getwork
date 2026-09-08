import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  Lock,
  DollarSign,
  Users,
  Building2,
  ArrowRight,
  Download,
  Check,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface DedicatedTeamsTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestSquad?: () => void;
}

type TabType = 'all' | 'squad' | 'trial' | 'billing' | 'ip' | 'sla';

export const DedicatedTeamsTermsModal: React.FC<DedicatedTeamsTermsModalProps> = ({
  isOpen,
  onClose,
  onRequestSquad,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [copied, setCopied] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const termsSections = [
    {
      id: 'squad',
      category: 'squad',
      number: '01',
      title: 'Squad Provisioning & Dedicated Allocation',
      icon: Users,
      summary: '100% full-time commitment, custom vetting, and direct client integration.',
      points: [
        'Dedicated Commitment: Squad members are assigned exclusively to the Client with zero concurrent external assignments or cross-client context switching.',
        'Rapid Staffing SLA: Candidate profiles and technical vetting dossiers are delivered within 48 to 72 business hours following requirement definition.',
        'Tooling & Workspace Integration: Squad members integrate natively into the Client’s communication tools (Slack, Teams), task management systems (Linear, Jira), and source repositories (GitHub, GitLab).',
        'Technical Leadership: Each dedicated team includes a dedicated Lead Engineer or Delivery Manager ensuring sprint velocity, code quality benchmarks, and architecture alignment.',
      ],
    },
    {
      id: 'trial',
      category: 'trial',
      number: '02',
      title: '14-Day Risk-Free Trial & Replacement Guarantee',
      icon: ShieldCheck,
      summary: 'Two-week evaluation period on every specialist with zero financial risk.',
      points: [
        'Risk-Free Evaluation: The Client receives a 14-day trial period from the onboarding date of any new dedicated squad member.',
        'Zero-Cost Opt-Out: If the Client is not completely satisfied with velocity, technical proficiency, or cultural alignment within 14 days, no fees are billed for that member.',
        'Priority Replacement: If a replacement is requested, MINDS guarantees a qualified alternative specialist deployed within 5 business days with zero re-onboarding fees.',
        'Continuity Assurance: Comprehensive documentation handovers and pair-programming sessions are conducted prior to any scheduled personnel transitions.',
      ],
    },
    {
      id: 'billing',
      category: 'billing',
      number: '03',
      title: 'Billing Structure, Invoicing & Escrow Security',
      icon: DollarSign,
      summary: 'Transparent bi-weekly or monthly rates backed by protected escrow disbursements.',
      points: [
        'Fixed Rate Transparency: Dedicated teams operate under fixed, all-inclusive monthly or bi-weekly retainers with no hidden software, hardware, or administrative surcharges.',
        'Escrow Protection: Retainer disbursements are held in secure escrow and released only according to agreed bi-weekly or monthly sprint review sign-offs.',
        'Scaling & Ramp-Down Flexibility: Squad capacity may be scaled up or down with a standard 30-day advance written notice, providing agility without punitive lock-in penalties.',
        'Expense Transparency: Any pre-approved third-party licenses, cloud infrastructure costs, or custom testing devices are billed at direct pass-through cost without markup.',
      ],
    },
    {
      id: 'ip',
      category: 'ip',
      number: '04',
      title: '100% Intellectual Property Ownership & Confidentiality',
      icon: Lock,
      summary: 'Absolute work-for-hire assignment, comprehensive bilateral NDA, and enterprise security.',
      points: [
        'Immediate IP Transfer: All code, algorithms, visual assets, documentation, data structures, and patents created by the squad constitute Work-for-Hire and belong 100% exclusively to the Client immediately upon payment.',
        'Comprehensive Mutual NDA: Strict bilateral non-disclosure agreements are in force prior to candidate interviews and remain binding in perpetuity regarding proprietary business logic.',
        'SOC2 & GDPR Compliance: Squad members comply with enterprise information security protocols, multi-factor hardware authentication, and secure encrypted development environments.',
        'Zero Data Retention: No client codebases or proprietary datasets are retained on local machines post-contract termination.',
      ],
    },
    {
      id: 'sla',
      category: 'sla',
      number: '05',
      title: 'Service Level Agreements (SLAs) & Timezone Alignment',
      icon: Clock,
      summary: 'Guaranteed 4-hour live working overlap and rapid blocker escalation response.',
      points: [
        'Core Overlap Guarantee: Squad schedules ensure a minimum of 4 consecutive working hours overlapping with the Client’s primary timezone (EST, PST, GMT, or CET).',
        'Response Time SLAs: Synchronous inquiries during core working hours are acknowledged within 60 minutes; critical production blocker escalations are addressed within 15 minutes.',
        'Automated Daily Standups: Delivery leads provide daily asynchronous sprint progress digests and weekly sprint review milestone scorecards.',
        'Uptime & Connectivity: All dedicated members operate from verified enterprise-grade fiber infrastructure with automatic cellular backup and uninterruptible power supplies.',
      ],
    },
    {
      id: 'conversion',
      category: 'sla',
      number: '06',
      title: 'Non-Solicitation & Direct-Hire Conversion Policy',
      icon: Building2,
      summary: 'Transparent pathways to transition dedicated members into full-time employees.',
      points: [
        'Non-Circumvention: A standard 12-month non-solicitation provision applies to prevent direct off-platform contracting during active engagements.',
        'Direct-Hire Buyout Option: After 6 consecutive months of dedicated squad service, Clients retain the explicit right to convert squad members into direct full-time employees.',
        'Transparent Buyout Fee: Conversion entails a pre-negotiated, transparent one-time placement fee based on the member’s annualized retainer, waiving all platform claims.',
        'Seamless Transition: MINDS handles all legal offboarding and assists with direct international employment contracts or Employer of Record (EOR) transfers.',
      ],
    },
  ];

  const filteredSections =
    activeTab === 'all'
      ? termsSections
      : termsSections.filter((sec) => sec.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#111216] border border-white/[0.12] rounded-[24px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col text-left text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top subtle blue accent indicator */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0099ff]/20 via-[#0099ff] to-[#0099ff]/20 pointer-events-none" />

        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-white/[0.08] flex-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0099ff]/10 border border-[#0099ff]/25 text-[12px] font-medium text-[#0099ff] mb-2.5">
                <FileText className="w-3.5 h-3.5" />
                <span>MINDS Dedicated Squad Agreement</span>
              </div>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-[-0.7px]">
                Dedicated Teams · Terms of Engagement
              </h2>
              <p className="mt-1 text-[13.5px] text-[#999999] max-w-2xl leading-relaxed">
                Standard contractual framework, SLAs, 14-day trial evaluation, 100% IP ownership, and operational standards governing dedicated engineering and creative squads on MINDS.
              </p>
            </div>

            {/* Action & Close */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-[12px] text-[#cccccc] hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                title="Share link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Terms'}</span>
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
              { id: 'all', label: 'All Terms' },
              { id: 'squad', label: 'Squad & Staffing' },
              { id: 'trial', label: '14-Day Trial' },
              { id: 'billing', label: 'Billing & Escrow' },
              { id: 'ip', label: 'IP & Security' },
              { id: 'sla', label: 'SLAs & Direct Hire' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer text-[12.5px] font-medium ${
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

        {/* Scrollable Terms Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto flex-1 space-y-6 text-[14px]">
          {/* Key Guarantee Banner */}
          <div className="p-4 rounded-[16px] bg-gradient-to-r from-[#0099ff]/10 via-[#0099ff]/05 to-transparent border border-[#0099ff]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0099ff]/20 border border-[#0099ff]/30 flex items-center justify-center text-[#0099ff] flex-shrink-0 mt-0.5 sm:mt-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[14px] font-medium text-white">Client Protection Commitment</h4>
                <p className="text-[12.5px] text-[#999999] mt-0.5">
                  Every dedicated team includes a mandatory 14-day trial evaluation, 100% intellectual property transfer, and escrowed disbursements.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-[12px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Contract Ver. 2026.4
              </span>
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-5">
            {filteredSections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="p-5 sm:p-6 rounded-[18px] bg-[#17181d] border border-white/[0.08] hover:border-white/[0.14] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#0099ff]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11.5px] font-mono text-[#0099ff] font-medium">
                          SECTION {sec.number}
                        </div>
                        <h3 className="text-[16px] sm:text-[17px] font-semibold text-white tracking-[-0.3px]">
                          {sec.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#888888] mb-3.5 italic border-l-2 border-[#0099ff]/40 pl-3">
                    {sec.summary}
                  </p>

                  <ul className="space-y-2.5 text-[13.5px] text-[#cccccc] leading-relaxed">
                    {sec.points.map((pt, i) => {
                      const [label, ...desc] = pt.split(':');
                      return (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0099ff] flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white font-medium">{label}:</strong>{' '}
                            <span className="text-[#a0a0a0]">{desc.join(':')}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Legal Sign-Off Notice */}
          <div className="p-4 rounded-[14px] bg-white/[0.03] border border-white/[0.06] text-[12.5px] text-[#888888] leading-relaxed">
            <strong className="text-white font-medium">Governing Law & Legal Enforcement:</strong> These Dedicated Teams Terms of Engagement form an integral addendum to the Master Services Agreement (MSA). Custom enterprise riders, bespoke NDAs, and corporate compliance schedules are accommodated during squad onboarding.
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 sm:px-8 py-4 border-t border-white/[0.08] bg-[#14151a] flex-none flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-2.5 text-[13px] text-[#cccccc] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#0099ff] focus:ring-[#0099ff] focus:ring-offset-0 cursor-pointer"
            />
            <span>I have reviewed the Dedicated Teams Terms of Engagement</span>
          </label>

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
                onRequestSquad?.();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0099ff] hover:bg-[#0088ee] text-white font-medium text-[13.5px] rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,153,255,0.35)] transition-all hover:scale-[0.99]"
            >
              <span>{acceptedTerms ? 'Accept & Inquire for Squad' : 'Request Dedicated Squad'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
