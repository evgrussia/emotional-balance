import { 
  Settings, 
  Bell, 
  CreditCard, 
  Phone, 
  Lock, 
  BarChart3, 
  Award, 
  Users, 
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Screen } from '../MobileApp';

interface MoreScreenProps {
  onBackToLanding: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function MoreScreen({ onBackToLanding, onNavigate }: MoreScreenProps) {
  const menuItems = [
    { icon: Settings, label: 'Настройки', color: '#737370', screen: 'settings' as Screen },
    { icon: Bell, label: 'Уведомления', color: '#737370', screen: null },
    { icon: CreditCard, label: 'Подписка', color: '#737370', screen: 'subscription' as Screen, badge: 'Standard' },
    { icon: Phone, label: 'Экстренные контакты', color: '#737370', screen: null },
    { icon: Lock, label: 'Конфиденциальность', color: '#737370', screen: null },
    { icon: BarChart3, label: 'Статистика', color: '#737370', screen: null },
    { icon: Award, label: 'Достижения', color: '#737370', screen: 'achievements' as Screen },
    { icon: Users, label: 'Пригласить друга', color: '#5F9A63', screen: null },
    { icon: HelpCircle, label: 'Помощь', color: '#737370', screen: null }
  ];

  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <div className="px-4 py-6" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="text-xl font-semibold mb-6" style={{ color: '#262624' }}>
          Профиль
        </h1>
        
        {/* User Info */}
        <button
          onClick={() => onNavigate('profile')}
          className="w-full flex items-center gap-4 mb-6"
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
            style={{ backgroundColor: '#F0F6F0' }}
          >
            👤
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg font-semibold" style={{ color: '#262624' }}>
              Аня Смирнова
            </p>
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: '#5F9A63' }}
            >
              Standard
            </span>
          </div>
          <ChevronRight className="w-5 h-5" style={{ color: '#A8A8A3' }} />
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#262624' }}>
              23
            </p>
            <p className="text-xs" style={{ color: '#737370' }}>
              сессии
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#262624' }}>
              🔥 5
            </p>
            <p className="text-xs" style={{ color: '#737370' }}>
              дней
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#262624' }}>
              12
            </p>
            <p className="text-xs" style={{ color: '#737370' }}>
              упражнений
            </p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.screen && onNavigate(item.screen)}
            className="w-full flex items-center justify-between px-4 py-4 rounded-lg transition-colors hover:bg-white/50"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" style={{ color: item.color }} />
              <span className="font-medium" style={{ color: '#262624' }}>
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {item.badge && (
                <span 
                  className="px-2 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: '#F0F6F0', color: '#5F9A63' }}
                >
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5" style={{ color: '#A8A8A3' }} />
            </div>
          </button>
        ))}

        <button
          onClick={onBackToLanding}
          className="w-full flex items-center justify-between px-4 py-4 rounded-lg transition-colors hover:bg-white/50"
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5" style={{ color: '#DE5438' }} />
            <span className="font-medium" style={{ color: '#DE5438' }}>
              Выйти
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}