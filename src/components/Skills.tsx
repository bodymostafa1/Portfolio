import React from 'react';
import { Wrench, Code2, BarChart3, BrainCircuit, Layers } from 'lucide-react';
import { portfolioData } from '../data';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-brand-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-brand-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-500" />;
      default:
        return <Wrench className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          <Wrench className="w-4 h-4" />
          <span>Core Capabilities</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Technical Skillset & Tooling
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Organized by functional domains. Transparent practical proficiency without arbitrary percentage bars.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start md:self-auto">
            Focus: Applied analytics, database queries & production ML
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform">
                  {getIcon(category.icon)}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
