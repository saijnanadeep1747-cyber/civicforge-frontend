import { useState } from 'react';
import { mockChallenges } from '../mockData';
import { Activity, ThumbsUp, Search, SlidersHorizontal } from 'lucide-react';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredChallenges = mockChallenges.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || item.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Header */}
      <div className="text-center space-y-3 py-6">
        <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
          SIH2026 • Problem Statement SIH26043
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Innovation-to-Impact Operating System
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Bridging Citizens, Government, Universities, and Industry through rule-based triage and validation scores.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search challenges or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            <option value="All">All Departments</option>
            <option value="Urban Infrastructure">Urban Infrastructure</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>
      </div>

      {/* Grid of Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredChallenges.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700/50">
                  {item.department}
                </span>
                <span className="font-mono text-teal-400 text-[11px] font-semibold uppercase">
                  {item.status}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                Confidence: {item.confidenceScore}%
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ThumbsUp className="w-3.5 h-3.5 text-slate-400" />
                {item.upvotes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}