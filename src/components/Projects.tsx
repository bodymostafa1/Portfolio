import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData, CaseStudy, SmallProject } from '../data';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const { caseStudies, moreProjects } = portfolioData;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<'all' | 'analytics' | 'ml'>('all');

  const filteredCaseStudies = caseStudies.filter((cs) => {
    if (filter === 'all') return true;
    if (filter === 'analytics') return cs.category === 'Data Analysis & BI' || cs.category === 'Operations Research & Optimization';
    if (filter === 'ml') return cs.category === 'Machine Learning & AI';
    return true;
  });

  const getVisualPreview = (chartType: string) => {
    switch (chartType) {
      case 'retail':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center text-xs">
              <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30 font-medium">
                Power BI • 4 Pages
              </span>
              <span className="text-slate-400 font-mono text-[11px]">$233,081 Total Rev</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Clothing & Accessories Share</span>
                <span className="text-brand-400 font-bold">76.5%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-brand-500" style={{ width: '44.7%' }} title="Clothing 44.7%" />
                <div className="h-full bg-brand-300" style={{ width: '31.8%' }} title="Accessories 31.8%" />
                <div className="h-full bg-slate-600" style={{ width: '15.5%' }} title="Footwear 15.5%" />
                <div className="h-full bg-slate-700" style={{ width: '8.0%' }} title="Outerwear 8.0%" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Discounts Applied: $59.28</span>
                <span>Full Price: $60.13</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
              <span>3,900 Purchases Analyzed</span>
              <span className="text-emerald-400 font-medium">Zero Discount Lift Found</span>
            </div>
          </div>
        );

      case 'bitcoin':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center text-xs">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                TensorFlow • 4-Layer CNN
              </span>
              <span className="text-slate-400 font-mono text-[11px]">1M+ Min Candles</span>
            </div>
            <div className="my-auto py-1">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300">Peak Validation Accuracy</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">64.93%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '64.93%' }} />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
                <span>Baseline (Coin Flip): 50.0%</span>
                <span className="text-brand-300 font-medium">+14.93% Improvement</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
              <span>Heatmap 100×100 Input</span>
              <span className="text-amber-400 font-medium">40% False Positives Cut</span>
            </div>
          </div>
        );

      case 'ev':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center text-xs">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                FastAPI • Mapbox GL JS
              </span>
              <span className="text-slate-400 text-[11px]">IEEE Paper Analysis</span>
            </div>
            <div className="my-auto py-1 space-y-1.5">
              <div className="text-xs font-semibold text-slate-200">
                Binary Integer Programming Model
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700/60">
                  <span className="text-slate-400 block">DC Fast Tariff</span>
                  <span className="text-brand-300 font-mono font-bold">7.67 EGP/kWh</span>
                </div>
                <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700/60">
                  <span className="text-slate-400 block">AC Regular Tariff</span>
                  <span className="text-brand-300 font-mono font-bold">3.97 EGP/kWh</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
              <span>Cairo Geospatial Routes</span>
              <span className="text-emerald-400 font-medium">Grid-Balanced Allocation</span>
            </div>
          </div>
        );

      case 'churn':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center text-xs">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                MLflow • scikit-learn
              </span>
              <span className="text-slate-400 text-[11px]">DEPI IBM Capstone</span>
            </div>
            <div className="my-auto py-1 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Pipeline Churn Sensitivity</span>
                <span className="text-purple-300 font-semibold">Priority Scoring</span>
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>Month-to-Month Contracts</span>
                  <span className="text-rose-400 font-bold">+42% Risk</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Two-Year Contracts</span>
                  <span className="text-emerald-400 font-bold">-68% Risk</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
              <span>Targeted Retention Levers</span>
              <span className="text-brand-300 font-medium">Precision Intervention</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          <Briefcase className="w-4 h-4" />
          <span>Case Studies & Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Data Case Studies & Applied Solutions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Structured as 2-minute executive briefs: Question, Data, Approach, Measurable Result, and Limitations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('analytics')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'analytics'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Analytics & BI
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'ml'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        {/* Featured Case Studies Grid (Top 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCaseStudies.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedCaseStudy(project)}
            >
              {/* Visual Storytelling Header */}
              {getVisualPreview(project.chartType)}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-600 dark:text-brand-400">
                      {project.category}
                    </span>
                    <span className="text-slate-400 text-[11px] font-medium">Case Study</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">Question:</strong> &ldquo;{project.question}&rdquo;
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px] mb-0.5 uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Measurable Result:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                      {project.result.headline}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.techTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techTags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] text-slate-400 font-mono">
                        +{project.techTags.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCaseStudy(project);
                    }}
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
                  >
                    Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects Section (Small Cards) */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-500" />
                <span>More Projects & Machine Learning Models</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Targeted algorithmic experiments and healthcare classification models.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreProjects.map((item: SmallProject) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand-600 dark:text-brand-400">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                      {item.metrics.split('|')[0]}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1">
                    {item.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code Evidence</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
