import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, HelpCircle, Database, GitBranch, CheckCircle2, AlertOctagon } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { CaseStudy } from '../data';
import {
  RetailRevenueChart,
  BitcoinModelChart,
  EVOptimizationVisual,
  TelecomChurnVisual,
} from './InteractiveCharts';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const renderVisual = () => {
    switch (caseStudy.chartType) {
      case 'retail':
        return <RetailRevenueChart />;
      case 'bitcoin':
        return <BitcoinModelChart />;
      case 'ev':
        return <EVOptimizationVisual />;
      case 'churn':
        return <TelecomChurnVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-modal focus:outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Case Study • {caseStudy.category}
            </span>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-brand-500 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* 1. Business Question (in one sentence) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-brand-500" />
              <span>1. Business Question</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <p className="text-base font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
                &ldquo;{caseStudy.question}&rdquo;
              </p>
            </div>
          </div>

          {/* Embedded Interactive Visual / Chart */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Visual Data Breakdown
            </div>
            {renderVisual()}
          </div>

          {/* 2. Data: source, size, what made it hard */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              <Database className="w-4 h-4 text-brand-500" />
              <span>2. Data</span>
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-slate-100">Source & Scope:</strong> {caseStudy.data.source}
              </p>
              <p>
                <strong className="text-slate-900 dark:text-slate-100">Dataset Size:</strong> {caseStudy.data.size}
              </p>
              <p>
                <strong className="text-slate-900 dark:text-slate-100">What made it hard:</strong> {caseStudy.data.challenges}
              </p>
            </div>
          </div>

          {/* 3. Approach: including alternatives rejected and why */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              <GitBranch className="w-4 h-4 text-brand-500" />
              <span>3. Approach & Methodology</span>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{caseStudy.approach.description}</p>
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                  Alternatives Considered & Rejected:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {caseStudy.approach.rejectedAlternatives}
                </p>
              </div>
            </div>
          </div>

          {/* 4. Result (Prominent Accent Callout Box with Baseline Comparison) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>4. Measurable Result</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm sm:text-base">
                {caseStudy.result.headline}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                {caseStudy.result.description}
              </p>
              <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800/50 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-emerald-900 dark:text-emerald-200">Baseline / Standard:</span>
                  <p className="text-emerald-800 dark:text-emerald-300/80">{caseStudy.result.baseline}</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-900 dark:text-emerald-200">Net Improvement:</span>
                  <p className="text-emerald-800 dark:text-emerald-300/80">{caseStudy.result.comparison}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Limitations & Next Steps (Prominent Honest Callout Box) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              <AlertOctagon className="w-4 h-4 text-amber-500" />
              <span>5. Limitations & What I'd Do Next</span>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-2.5">
              <div>
                <span className="font-semibold text-amber-900 dark:text-amber-200 text-xs sm:text-sm block mb-1">
                  Honest Evaluation & Constraints:
                </span>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
                  {caseStudy.limitations.description}
                </p>
              </div>
              <div className="pt-2 border-t border-amber-200 dark:border-amber-800/50">
                <span className="font-semibold text-amber-900 dark:text-amber-200 text-xs block mb-1.5">
                  Future Roadmap & Production Hardening:
                </span>
                <ul className="list-disc list-inside space-y-1 text-xs text-amber-800 dark:text-amber-300/85">
                  {caseStudy.limitations.nextSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Tags */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
              Technologies & Methodologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting Evidence Action Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              * Code and repos provided as supporting technical evidence.
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {caseStudy.demoUrl && (
                <a
                  href={caseStudy.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-sm transition-all hover:shadow"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Interactive Dashboard / Demo</span>
                </a>
              )}
              {caseStudy.githubUrl && (
                <a
                  href={caseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Code on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
