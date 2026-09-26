import { NavLink } from 'react-router-dom';
import { Compass, LayoutDashboard, Award, Skull, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Explore', path: '/', icon: Compass },
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Passport', path: '/passport', icon: Award },
    { label: 'Graveyard', path: '/graveyard', icon: Skull },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-white tracking-wide">
            CivicForge <span className="text-teal-400 font-mono text-sm">AI</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}