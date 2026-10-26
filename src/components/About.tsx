import React from 'react';
import { User, MapPin, GraduationCap, Globe, Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Location: <MapPin className="w-4 h-4 text-brand-500" />,
    Education: <GraduationCap className="w-4 h-4 text-brand-500" />,
    Specialization: <Compass className="w-4 h-4 text-brand-500" />,
    Languages: <Globe className="w-4 h-4 text-brand-500" />,
    Availability: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
  };

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">
          Bridging Raw Data, Executive Dashboards, and Predictive Models
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              {personal.bio}
            </p>
            <p>
              My academic background in <strong>Operations Research and Decision Support</strong> taught me to view data not just as tables and rows, but as interconnected systems with bottlenecks to optimize. Whether formulating mathematical models for electric vehicle charging infrastructure, validating retail pricing elasticity, or cleaning messy healthcare spreadsheets, my priority is always commercial clarity and measurable improvement.
            </p>
            <div className="p-4 rounded-xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/40 text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-brand-700 dark:text-brand-300 block mb-1">
                What you can count on when hiring me:
              </strong>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 mt-2">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>Plain-language communication with non-technical stakeholders</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>Disciplined SQL & pandas data hygiene before any modeling</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>Honest benchmark comparisons rather than inflated claims</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>Modern full-stack context (FastAPI, React, REST endpoints)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-slate-900 dark:text-white text-base pb-3 border-b border-slate-200 dark:border-slate-800">
              Quick Facts
            </h3>
            <div className="space-y-3.5">
              {personal.quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex-shrink-0 mt-0.5">
                    {iconMap[fact.label] || <CheckCircle2 className="w-4 h-4 text-brand-500" />}
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {fact.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-400 font-medium block mb-1">
                Languages
              </span>
              <div className="flex gap-2">
                {personal.languages.map((l) => (
                  <span
                    key={l.language}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <span>{l.language}:</span>
                    <span className="font-bold text-brand-600 dark:text-brand-400">{l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
