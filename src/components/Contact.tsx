import React, { useState } from 'react';
import { Mail, FileDown, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            I am actively interviewing for Data Analyst and Data Scientist roles. Feel free to reach out directly via email or professional networks.
          </p>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 text-left">
            <div>
              <span className="text-xs text-slate-400 font-medium block mb-1.5">Direct Email</span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium hover:text-brand-600 dark:hover:text-brand-400 truncate"
                  title="Click to compose email"
                >
                  {personal.email}
                </a>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-sm transition-all"
                  >
                    <span>Open Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Note */}
            <div className="text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
              <strong className="text-slate-700 dark:text-slate-300">Base:</strong> Cairo, Egypt • Open to remote, hybrid, or on-site roles.
            </div>

            {/* Social Channels */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400 font-medium block mb-2.5">
                Professional Profiles & Channels
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-black text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repos</span>
                </a>
              </div>
            </div>

            {/* Download CV button */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href={personal.cvPath}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-sm hover:shadow transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
