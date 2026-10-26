import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          <Award className="w-4 h-4" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
          Professional Certifications
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-xl">
          Standardized coursework and practical assessments in data manipulation, algorithms, and applied machine learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  {cert.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {cert.issuer}
                </div>

                {cert.details && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                    {cert.details}
                  </p>
                )}
              </div>

              {cert.period && (
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  Completed: {cert.period}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
