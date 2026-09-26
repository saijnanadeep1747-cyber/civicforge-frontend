 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import PassportPage from './pages/PassportPage';
import GraveyardPage from './pages/GraveyardPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/passport" element={<PassportPage />} />
            <Route path="/graveyard" element={<GraveyardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}