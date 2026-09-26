import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { mockChallenges } from '../mockData';
import { TrendingUp, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function DashboardPage() {
  const chartData = mockChallenges.map((c) => ({
    name: c.title.length > 15 ? c.title.substring(0, 15) + '...' : c.title,
    Confidence: c.confidenceScore,
    Readiness: c.readinessIndex,
  }));

  const avgConfidence = Math.round(
    mockChallenges.reduce((acc, curr) => acc + curr.confidenceScore, 0) / mockChallenges.length
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold text-white">CivicSignal AI Triage Analytics</h2>
        <p className="text-xs text-slate-400 mt-1">Real-time confidence scoring & readiness evaluation metrics.</p>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 border border-teal-500/20">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Avg Confidence</div>
            <div className="text-xl font-bold text-white mt-0.5">{avgConfidence}%</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Total Tracked</div>
            <div className="text-xl font-bold text-white mt-0.5">{mockChallenges.length} Challenges</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Validation Status</div>
            <div className="text-xl font-bold text-white mt-0.5">Automated</div>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-semibold text-slate-300">Confidence vs. Readiness Score</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '12px' }} />
              <Bar dataKey="Confidence" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Readiness" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}