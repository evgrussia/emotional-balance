import { useState } from 'react';
import { ChevronLeft, Flame } from 'lucide-react';
import { Progress } from '../ui/progress';

type GamificationView = 'tree' | 'achievements' | 'streaks';

interface GamificationScreensProps {
  initialView?: GamificationView;
}

export default function GamificationScreens({ initialView = 'tree' }: GamificationScreensProps) {
  const [view, setView] = useState<GamificationView>(initialView);

  // Health Tree View
  if (view === 'tree') {
    return (
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div
          className="px-4 py-4 flex items-center"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
            Твоё дерево
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 space-y-8">
          {/* Tree Visualization */}
          <div className="flex flex-col items-center space-y-6">
            <div className="text-9xl">🌳</div>
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold" style={{ color: '#5F9A63' }}>
                Уровень 3: Молодое дерево
              </p>
              <p className="text-lg" style={{ color: '#737370' }}>
                240 / 500 XP
              </p>
            </div>
            <div className="w-full max-w-xs">
              <Progress value={48} />
            </div>
          </div>

          {/* Legend */}
          <div
            className="rounded-xl p-5 space-y-3"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              Как растёт дерево
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍃</span>
                <span style={{ color: '#737370' }}>
                  Лист = дневник (+10 XP) или упражнение (+15 XP)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <span style={{ color: '#737370' }}>
                  Цветок = медитация (+10 XP)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌳</span>
                <span style={{ color: '#737370' }}>
                  Ствол = чат-сессия (+20 XP)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌿</span>
                <span style={{ color: '#737370' }}>
                  Корни = SOS-протокол (+5 XP)
                </span>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold" style={{ color: '#262624' }}>
                Последние достижения
              </h3>
              <button
                onClick={() => setView('achievements')}
                className="text-sm font-medium"
                style={{ color: '#5F9A63' }}
              >
                Все →
              </button>
            </div>
            <div className="space-y-2">
              {[
                { icon: '🏆', title: 'Первая неделя', xp: '+50 XP', earned: true },
                { icon: '🏆', title: '5 записей в дневнике', xp: '+30 XP', earned: true },
                { icon: '🏆', title: '10 упражнений', xp: '+40 XP', earned: true }
              ].map((achievement, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-3 flex items-center gap-3"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm" style={{ color: '#262624' }}>
                      {achievement.title}
                    </p>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: '#5F9A63' }}>
                    {achievement.xp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Achievements View
  if (view === 'achievements') {
    const achievements = [
      { icon: '🌱', title: 'Росток', description: 'Начните свой путь', earned: true },
      { icon: '📖', title: 'Первая запись', description: 'Первая запись в дневнике', earned: true },
      { icon: '🫁', title: 'Первый вдох', description: 'Первое дыхательное упражнение', earned: true },
      { icon: '7️⃣', title: '7 дней', description: 'Неделя практики', earned: true },
      { icon: '🧠', title: 'Исследователь мыслей', description: 'Пройдите КПТ-упражнение', earned: true },
      { icon: '🔒', title: 'Мастер дыхания', description: '20 дыхательных практик', earned: false },
      { icon: '🔒', title: 'Первая победа', description: 'Улучшите настроение в КПТ', earned: false },
      { icon: '🔒', title: '30 дней', description: 'Месяц регулярной практики', earned: false },
      { icon: '🔒', title: 'Сад мудрости', description: 'Достигните уровня Сад (1000 XP)', earned: false }
    ];

    return (
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div
          className="px-4 py-4 flex items-center"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button onClick={() => setView('tree')}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
            Достижения
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="px-4 py-4">
          <p className="text-sm font-medium" style={{ color: '#737370' }}>
            Открыто: 5 из {achievements.length}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: achievement.earned ? '#F0F6F0' : '#F4F4F1',
                    opacity: achievement.earned ? 1 : 0.5,
                    boxShadow: achievement.earned ? '0 0 20px rgba(95,154,99,0.2)' : 'none'
                  }}
                >
                  {achievement.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: achievement.earned ? '#262624' : '#A8A8A3' }}>
                    {achievement.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#737370' }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Streaks View
  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      <div
        className="px-4 py-4 flex items-center"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <button onClick={() => setView('tree')}>
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>
        <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
          Серии
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Current Streaks */}
        <div className="space-y-4">
          <h3 className="font-semibold" style={{ color: '#262624' }}>
            Текущие серии
          </h3>
          {[
            { emoji: '🔥', label: 'Дневник', days: 5 },
            { emoji: '🧘', label: 'Медитации', days: 3 },
            { emoji: '🧠', label: 'Упражнения', days: 5 }
          ].map((streak, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 flex items-center gap-4"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              <span className="text-4xl">{streak.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold" style={{ color: '#262624' }}>
                  {streak.label}
                </p>
                <p className="text-xs" style={{ color: '#737370' }}>
                  Текущая серия
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold" style={{ color: '#DE5438' }}>
                  {streak.days}
                </p>
                <p className="text-xs" style={{ color: '#737370' }}>
                  дней
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Heatmap */}
        <div className="space-y-3">
          <h3 className="font-semibold" style={{ color: '#262624' }}>
            Последние 4 недели
          </h3>
          <div className="space-y-2">
            {[...Array(4)].map((_, weekIdx) => (
              <div key={weekIdx} className="flex gap-2">
                {[...Array(7)].map((_, dayIdx) => {
                  const isActive = Math.random() > 0.3;
                  return (
                    <div
                      key={dayIdx}
                      className="flex-1 aspect-square rounded-lg"
                      style={{
                        backgroundColor: isActive ? '#5F9A63' : '#F4F4F1',
                        opacity: isActive ? 1 : 0.5
                      }}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Record */}
        <div
          className="rounded-xl p-5 text-center"
          style={{ backgroundColor: '#F0F6F0' }}
        >
          <p className="text-sm" style={{ color: '#737370' }}>
            🏆 Рекорд
          </p>
          <p className="text-4xl font-bold mt-2" style={{ color: '#5F9A63' }}>
            12 дней
          </p>
        </div>

        {/* Encouragement */}
        <div
          className="rounded-xl p-5 space-y-2"
          style={{ backgroundColor: '#F3F0F8' }}
        >
          <p className="text-sm font-semibold" style={{ color: '#262624' }}>
            💜 Пауза — это тоже забота о себе
          </p>
          <p className="text-sm" style={{ color: '#737370' }}>
            Не корите себя за пропущенные дни. Главное — продолжать.
          </p>
        </div>
      </div>
    </div>
  );
}
