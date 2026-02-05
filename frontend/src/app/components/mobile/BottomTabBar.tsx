import { Home, MessageCircle, BookOpen, Menu } from 'lucide-react';

interface BottomTabBarProps {
  currentTab: 'home' | 'chat' | 'diary' | 'more';
  onTabChange: (tab: 'home' | 'chat' | 'diary' | 'more') => void;
}

export default function BottomTabBar({ currentTab, onTabChange }: BottomTabBarProps) {
  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Главная' },
    { id: 'chat' as const, icon: MessageCircle, label: 'Чат' },
    { id: 'diary' as const, icon: BookOpen, label: 'Дневник' },
    { id: 'more' as const, icon: Menu, label: 'Ещё' }
  ];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-around px-4"
      style={{ 
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E8E8E3',
        zIndex: 50
      }}
    >
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center gap-1 min-w-[60px] py-2"
          >
            <tab.icon 
              className="w-6 h-6"
              style={{ 
                color: isActive ? '#5F9A63' : '#A8A8A3',
                fill: isActive ? '#5F9A63' : 'none'
              }}
            />
            <span 
              className="text-xs font-medium"
              style={{ color: isActive ? '#5F9A63' : '#A8A8A3' }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
