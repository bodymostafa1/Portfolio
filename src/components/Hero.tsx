import React from 'react';
import { ArrowDown, FileText, Mail, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Bio & Core Pitch */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 text-xs font-semibold text-brand-700 dark:text-brand-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Data Analyst & Data Scientist Roles</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-brand-600 dark:text-brand-400 mt-2">
                {personal.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              &ldquo;{personal.tagline}&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-brand-500 focus:outline-none"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm transition-all focus:ring-2 focus:ring-brand-500 focus:outline-none"
              >
                <FileText className="w-4 h-4 text-brand-500" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 to-teal-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-65 transition duration-500" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}profile.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  width="256"
                  height="256"
                />
              </picture>
            </div>
            {/* Quick in-office verified tag */}
            <div className="absolute -bottom-3 -right-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>In-Office Healthcare Intern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
