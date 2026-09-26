import { mockInstitutions } from '../mockData';
import { Award, Building2, ShieldCheck } from 'lucide-react';

export default function PassportPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">Institutional Impact Passports</h2>
        <p className="text-xs text-slate-400 mt-1">
          Verified academic, government, and industry credentials validating civic project execution.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {mockInstitutions.map((inst) => (
          <div
            key={inst.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
          >
            <div className="space-y-4">
              {/* Institution Title Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm group-hover:text-teal-400 transition-colors">
                      {inst.name}
                    </h3>
                    <span className="text-xs text-slate-400">{inst.type}</span>
                  </div>
                </div>
              </div>

              {/* Stats Block */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">Active Civic Projects</span>
                <span className="text-white font-mono font-bold">{inst.activeProjects}</span>
              </div>
            </div>

            {/* Passport Badge Footer */}
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>{inst.passportBadge}</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
