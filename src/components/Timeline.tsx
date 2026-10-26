import React from 'react';
import { Calendar, Building2, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export const Timeline: React.FC = () => {
  const { timeline } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          <Calendar className="w-4 h-4" />
          <span>Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
          Work Experience & Education
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
          Practical in-office healthcare analytics, specialized data science fellowship, and rigorous computer science training.
        </p>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {timeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Dot indicator on timeline */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 bg-white dark:bg-slate-900 transition-all ${
                  item.isEducation
                    ? 'border-brand-400 dark:border-brand-500 group-hover:scale-125'
                    : 'border-brand-600 dark:border-brand-400 group-hover:scale-125'
                }`}
              />

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      {item.roleType}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-200">
                        {item.isEducation ? <GraduationCap className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                        {item.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-center border border-slate-200 dark:border-slate-700 font-mono">
                    {item.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-500 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 mr-1">Stack:</span>
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
