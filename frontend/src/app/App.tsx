import { useState } from 'react';
import LandingPage from './components/LandingPage';
import MobileApp from './components/MobileApp';

export default function App() {
  const [view, setView] = useState<'landing' | 'app'>('landing');

  return (
    <div className="min-h-screen">
      {view === 'landing' ? (
        <LandingPage onStartApp={() => setView('app')} />
      ) : (
        <MobileApp onBackToLanding={() => setView('landing')} />
      )}
    </div>
  );
}
