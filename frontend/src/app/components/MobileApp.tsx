import { useState } from 'react';
import WelcomeScreen from './mobile/WelcomeScreen';
import HomeScreen from './mobile/HomeScreen';
import ChatScreen from './mobile/ChatScreen';
import DiaryScreen from './mobile/DiaryScreen';
import DiaryScreens from './mobile/DiaryScreens';
import MoreScreen from './mobile/MoreScreen';
import SOSButton from './mobile/SOSButton';
import SOSScreens from './mobile/SOSScreens';
import BottomTabBar from './mobile/BottomTabBar';
import OnboardingFlow from './mobile/OnboardingFlow';
import ExercisesScreen from './mobile/ExercisesScreen';
import MeditationsScreen from './mobile/MeditationsScreen';
import MarketplaceScreen from './mobile/MarketplaceScreen';
import ProfileScreens from './mobile/ProfileScreens';
import GamificationScreens from './mobile/GamificationScreens';

interface MobileAppProps {
  onBackToLanding: () => void;
}

export type Screen = 
  | 'welcome'
  | 'onboarding'
  | 'home'
  | 'chat'
  | 'diary'
  | 'diary-extended'
  | 'more'
  | 'sos'
  | 'exercises'
  | 'meditations'
  | 'marketplace'
  | 'profile'
  | 'subscription'
  | 'settings'
  | 'tree'
  | 'achievements';

export default function MobileApp({ onBackToLanding }: MobileAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const handleCompleteOnboarding = () => {
    setHasCompletedOnboarding(true);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    if (!hasCompletedOnboarding) {
      if (currentScreen === 'welcome') {
        return <WelcomeScreen onStart={() => setCurrentScreen('onboarding')} />;
      }
      if (currentScreen === 'onboarding') {
        return <OnboardingFlow onComplete={handleCompleteOnboarding} />;
      }
    }

    // SOS screen - special fullscreen mode
    if (currentScreen === 'sos') {
      return <SOSScreens onClose={() => setCurrentScreen('home')} />;
    }

    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'chat':
        return <ChatScreen />;
      case 'diary':
        return <DiaryScreen />;
      case 'diary-extended':
        return <DiaryScreens />;
      case 'exercises':
        return <ExercisesScreen onNavigate={setCurrentScreen} />;
      case 'meditations':
        return <MeditationsScreen />;
      case 'marketplace':
        return <MarketplaceScreen />;
      case 'profile':
      case 'subscription':
      case 'settings':
        return <ProfileScreens initialView={currentScreen as any} onNavigate={setCurrentScreen} />;
      case 'tree':
      case 'achievements':
        return <GamificationScreens initialView={currentScreen === 'tree' ? 'tree' : 'achievements'} />;
      case 'more':
        return <MoreScreen onBackToLanding={onBackToLanding} onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  const showSOS = hasCompletedOnboarding && currentScreen !== 'sos' && currentScreen !== 'welcome' && currentScreen !== 'onboarding';
  const showTabBar = hasCompletedOnboarding && currentScreen !== 'sos';

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4" style={{ backgroundColor: '#E8E8E3' }}>
      {/* Mobile Frame */}
      <div 
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: '393px',
          height: '852px',
          borderRadius: '40px',
          backgroundColor: '#000000'
        }}
      >
        {/* Notch */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
          style={{
            width: '160px',
            height: '28px',
            backgroundColor: '#000000',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px'
          }}
        ></div>

        {/* Screen Content */}
        <div 
          className="absolute inset-0 overflow-y-auto"
          style={{
            backgroundColor: '#FAFAF8',
            paddingTop: '28px'
          }}
        >
          {renderScreen()}

          {/* SOS Button - always visible except on welcome/onboarding/sos */}
          {showSOS && (
            <SOSButton onClick={() => setCurrentScreen('sos')} />
          )}

          {/* Bottom Tab Bar - only on main screens */}
          {showTabBar && (
            <BottomTabBar 
              currentTab={(currentScreen === 'home' || currentScreen === 'chat' || currentScreen === 'diary' || currentScreen === 'more') ? currentScreen : 'home'}
              onTabChange={setCurrentScreen}
            />
          )}
        </div>
      </div>

      {/* Desktop helper */}
      <div className="absolute top-8 left-8">
        <button
          onClick={onBackToLanding}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          style={{ 
            backgroundColor: '#FFFFFF',
            color: '#5F9A63',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          ← Вернуться на главную
        </button>
      </div>
    </div>
  );
}