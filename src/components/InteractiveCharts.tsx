import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, Zap, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const RetailRevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'category' | 'discounts' | 'subscribers'>('category');

  const categories = [
    { name: 'Clothing', revenue: '$104,264', share: 44.7, color: 'bg-brand-500', note: 'Top revenue driver' },
    { name: 'Accessories', revenue: '$74,118', share: 31.8, color: 'bg-brand-400', note: 'Strong margin complement' },
    { name: 'Footwear', revenue: '$36,093', share: 15.5, color: 'bg-slate-400 dark:bg-slate-500', note: 'Spring/Summer spike' },
    { name: 'Outerwear', revenue: '$18,606', share: 8.0, color: 'bg-slate-300 dark:bg-slate-600', note: 'Winter seasonal' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100">
          <ShoppingBag className="w-4 h-4 text-brand-500" />
          <span>Interactive Retail Findings Explorer</span>
        </div>
        <div className="flex items-center rounded-lg bg-slate-200 dark:bg-slate-800 p-0.5 text-xs">
          <button
            onClick={() => setActiveTab('category')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'category'
                ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Category Share
          </button>
          <button
            onClick={() => setActiveTab('discounts')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'discounts'
                ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Discount Myth
          </button>
          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'subscribers'
                ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Subscribers
          </button>
        </div>
      </div>

      {activeTab === 'category' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span>Product Category</span>
            <span>Share of Total Revenue ($233,081)</span>
          </div>
          {categories.map((c) => (
            <div key={c.name} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  {c.name}
                  <span className="text-[11px] text-slate-400">({c.note})</span>
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {c.revenue} <span className="text-brand-600 dark:text-brand-400 font-bold">({c.share}%)</span>
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                <div
                  className={`h-full ${c.color} transition-all duration-500 rounded-full`}
                  style={{ width: `${c.share}%` }}
                />
              </div>
            </div>
          ))}
          <div className="mt-3 p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-xs text-brand-800 dark:text-brand-300">
            <strong>Key takeaway:</strong> Clothing (44.7%) and Accessories (31.8%) generate <strong>76.5% of total revenue</strong>. Assortment optimization should keep these two categories front and center year-round.
          </div>
        </div>
      )}

      {activeTab === 'discounts' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">With Discount (43% of orders)</span>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">$59.28</span>
              <span className="text-[11px] text-rose-500 block mt-1 font-medium">- $0.85 (-1.4%) lower spend</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Full Price (57% of orders)</span>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">$60.13</span>
              <span className="text-[11px] text-emerald-500 block mt-1 font-medium">Higher margin & spend</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Business Reality:</strong> Blanket discounting eroded margins without lifting order value. Customers purchased at the same volume regardless. Recommendation: reserve discounts for strictly targeted win-back campaigns.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'subscribers' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Subscribers (27%)</span>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">$59.49</span>
              <span className="text-[11px] text-slate-500 block mt-1">Average rating: 3.74 / 5</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Non-Subscribers (73%)</span>
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100">$59.87</span>
              <span className="text-[11px] text-slate-500 block mt-1">Average rating: 3.75 / 5</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-xs text-brand-800 dark:text-brand-300 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Actionable Strategy:</strong> Subscribers show zero spending premium over one-off buyers. The subscription program should be re-architected around retention perks (early assortment access) rather than automatic discounts.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const BitcoinModelChart: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-sm">
      <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-3">
        <TrendingUp className="w-4 h-4 text-brand-500" />
        <span>Performance vs Financial Baseline</span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-600 dark:text-slate-400">Random Walk Baseline (Coin Flip)</span>
            <span className="font-mono text-slate-500 font-semibold">50.00%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full" style={{ width: '50%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-600 dark:text-slate-400">Rule-based Scanner Alone</span>
            <span className="font-mono text-slate-600 dark:text-slate-300 font-semibold">~52.10%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: '52.1%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-medium text-brand-700 dark:text-brand-300">Hybrid 4-Layer CNN + Rule Validator</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">64.93% (Peak Validation)</span>
          </div>
          <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: '64.93%' }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300">
          <span className="font-bold text-sm block text-emerald-600 dark:text-emerald-400">+14.93%</span>
          <span>Gain above random market walk</span>
        </div>
        <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900/50 text-brand-900 dark:text-brand-300">
          <span className="font-bold text-sm block text-brand-600 dark:text-brand-400">40% Filtered</span>
          <span>False-positive whipsaws eliminated</span>
        </div>
      </div>
    </div>
  );
};

export const EVOptimizationVisual: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-sm">
      <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-3">
        <Zap className="w-4 h-4 text-brand-500" />
        <span>Optimization Comparison: Greedy vs BIP Model</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs">
        <div className="p-3 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
          <span className="font-semibold text-rose-700 dark:text-rose-300 block mb-1">Standard Greedy Routing</span>
          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Sends all vehicles to closest station</li>
            <li>• High station queuing times (&gt;45 min)</li>
            <li>• Ignores AC (3.97 EGP) vs DC (7.67 EGP) tariffs</li>
            <li>• Causes severe local grid peak congestion</li>
          </ul>
        </div>
        <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
          <span className="font-semibold text-emerald-700 dark:text-emerald-300 block mb-1">Binary Integer Programming (BIP)</span>
          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Global optimization of transit + charge + cost</li>
            <li>• Balances queues across nearby stations</li>
            <li>• Matches urgent charge to DC, standard to AC</li>
            <li>• Validated with real Cairo road network data</li>
          </ul>
        </div>
      </div>

      <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
        <strong>Architecture:</strong> FastAPI REST simulation engine computes BIP decision variables via Mapbox matrix routing; coordinates displayed on responsive Mapbox GL JS map interface.
      </div>
    </div>
  );
};

export const TelecomChurnVisual: React.FC = () => {
  const drivers = [
    { factor: 'Month-to-Month Contract', impact: '+42% Churn Risk', risk: 'high' },
    { factor: 'Fiber Optic Support Issues', impact: '+34% Churn Risk', risk: 'high' },
    { factor: 'Electronic Check Payment', impact: '+18% Churn Risk', risk: 'medium' },
    { factor: 'Two-Year Contract Commitment', impact: '-68% Churn Risk', risk: 'protective' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-sm">
      <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-3">
        <Users className="w-4 h-4 text-brand-500" />
        <span>Top Churn Risk Drivers & Retention Levers</span>
      </div>

      <div className="space-y-2 mb-3">
        {drivers.map((d) => (
          <div
            key={d.factor}
            className="flex items-center justify-between text-xs p-2 rounded-md bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60"
          >
            <span className="text-slate-700 dark:text-slate-300 font-medium">{d.factor}</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                d.risk === 'high'
                  ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                  : d.risk === 'medium'
                  ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                  : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
              }`}
            >
              {d.impact}
            </span>
          </div>
        ))}
      </div>

      <div className="text-xs text-slate-600 dark:text-slate-400 bg-brand-50/60 dark:bg-brand-950/30 p-2.5 rounded-lg border border-brand-200 dark:border-brand-900/40">
        <strong>Business Value:</strong> Rather than issuing blanket retention discounts, the retention team receives calibrated probability percentiles to prioritize high-value month-to-month subscribers with tailored annual incentives.
      </div>
    </div>
  );
};
