import { Settings, MessageCircle, BookOpen, Activity, Flame, Lightbulb, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Screen } from '../MobileApp';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const emojis = ['😢', '😟', '😐', '🙂', '😊'];

  return (
    <div className="pb-32 min-h-full" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
          Эмоциональный баланс
        </h1>
        <button 
          onClick={() => onNavigate('settings')}
          className="w-10 h-10 flex items-center justify-center rounded-lg" 
          style={{ backgroundColor: '#F4F4F1' }}
        >
          <Settings className="w-5 h-5" style={{ color: '#737370' }} />
        </button>
      </div>

      {/* Greeting */}
      <div className="px-4 py-2">
        <p className="text-2xl font-semibold" style={{ color: '#262624' }}>
          Привет, Аня! Как ты сегодня?
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Daily Check-in Card */}
        <button
          onClick={() => onNavigate('diary-extended')}
          className="w-full rounded-xl p-5 space-y-4 text-left"
          style={{ backgroundColor: '#F0F6F0' }}
        >
          <p className="text-sm font-medium" style={{ color: '#262624' }}>
            Нажми, чтобы отметить настроение
          </p>
          <div className="flex justify-between px-2">
            {emojis.map((emoji, index) => (
              <div
                key={index}
                className="text-4xl transition-transform hover:scale-110"
              >
                {emoji}
              </div>
            ))}
          </div>
        </button>

        {/* Quick Actions */}
        <div className="flex gap-3 justify-between">
          <button 
            onClick={() => onNavigate('chat')}
            className="flex-1 rounded-2xl p-4 flex flex-col items-center gap-2"
            style={{ backgroundColor: '#5F9A63' }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="text-sm font-medium text-white">Чат</span>
          </button>
          <button 
            onClick={() => onNavigate('diary-extended')}
            className="flex-1 rounded-2xl p-4 flex flex-col items-center gap-2"
            style={{ backgroundColor: '#5289AB' }}
          >
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-sm font-medium text-white">Дневник</span>
          </button>
          <button 
            onClick={() => onNavigate('exercises')}
            className="flex-1 rounded-2xl p-4 flex flex-col items-center gap-2"
            style={{ backgroundColor: '#8477B4' }}
          >
            <Activity className="w-8 h-8 text-white" />
            <span className="text-sm font-medium text-white">Практики</span>
          </button>
        </div>

        {/* Health Tree Widget */}
        <button
          onClick={() => onNavigate('tree')}
          className="w-full rounded-xl p-5 space-y-3 text-left"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌱</div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: '#262624' }}>
                Уровень 3 — Молодое дерево
              </p>
              <p className="text-sm" style={{ color: '#737370' }}>
                240/500 XP
              </p>
            </div>
          </div>
          <Progress value={48} />
        </button>

        {/* Streak Card */}
        <div 
          className="rounded-xl p-5 space-y-2"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5" style={{ color: '#DE5438' }} />
            <p className="font-semibold" style={{ color: '#262624' }}>
              5 дней подряд!
            </p>
          </div>
          <p className="text-sm" style={{ color: '#737370' }}>
            Отличная регулярность!
          </p>
          <div className="flex gap-2 pt-2">
            {[true, true, true, true, true, false, false].map((active, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: active ? '#5F9A63' : '#F4F4F1',
                  color: active ? '#FFFFFF' : '#A8A8A3'
                }}
              >
                <div className="w-2 h-2 rounded-full bg-current"></div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tip Card */}
        <div 
          className="rounded-xl p-5 space-y-3"
          style={{ backgroundColor: '#EFF5F9' }}
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" style={{ color: '#5289AB' }} />
            <span className="text-sm font-semibold" style={{ color: '#262624' }}>
              Совет дня
            </span>
          </div>
          <p className="text-sm" style={{ color: '#737370' }}>
            Попробуйте технику 5-4-3-2-1, когда чувствуете нарастающую тревогу...
          </p>
          <button className="text-sm font-medium" style={{ color: '#5289AB' }}>
            Подробнее →
          </button>
        </div>

        {/* Recommended Action Card */}
        <div 
          className="rounded-xl p-5 space-y-3"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <p className="text-xs font-medium" style={{ color: '#737370' }}>
            Рекомендуем для вас
          </p>
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#F0F6F0' }}
            >
              <Target className="w-6 h-6" style={{ color: '#5F9A63' }} />
            </div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: '#262624' }}>
                Дыхание 4-7-8
              </p>
              <p className="text-sm" style={{ color: '#737370' }}>
                5 мин • Снижает тревогу
              </p>
            </div>
          </div>
          <Button
            onClick={() => onNavigate('meditations')}
            variant="outline"
            className="w-full h-10 rounded-lg"
            style={{ borderColor: '#5F9A63', color: '#5F9A63' }}
          >
            Начать
          </Button>
        </div>
      </div>
    </div>
  );
}