import { useState } from 'react';
import { ChevronLeft, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export default function MeditationsScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [view, setView] = useState<'catalog' | 'player'>('catalog');

  if (view === 'player') {
    return (
      <div
        className="h-full flex flex-col items-center justify-between px-6 py-12"
        style={{ background: 'linear-gradient(to bottom, #F3F0F8, #EFF5F9)' }}
      >
        <button onClick={() => setView('catalog')} className="self-start">
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold" style={{ color: '#262624' }}>
              Глубокое расслабление
            </h2>
            <p className="text-sm" style={{ color: '#737370' }}>
              Расслабьте тело и разум
            </p>
          </div>

          <div className="w-48 h-48 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8477B420' }}>
            <div className="text-6xl">🧘</div>
          </div>

          <div className="w-full space-y-4">
            <div className="h-1 rounded-full" style={{ backgroundColor: '#E8E8E3' }}>
              <div className="h-full rounded-full" style={{ backgroundColor: '#5F9A63', width: '34%' }}></div>
            </div>
            <div className="flex justify-between text-sm" style={{ color: '#737370' }}>
              <span>3:24</span>
              <span>10:00</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="w-12 h-12 flex items-center justify-center">
              <SkipBack className="w-6 h-6" style={{ color: '#737370' }} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#5F9A63' }}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
            <button className="w-12 h-12 flex items-center justify-center">
              <SkipForward className="w-6 h-6" style={{ color: '#737370' }} />
            </button>
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {['🌧 Дождь', '🌊 Океан', '🌲 Природа'].map((sound) => (
              <button
                key={sound}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#FFFFFF', color: '#737370' }}
              >
                {sound}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const categories = ['Все', '😌 Расслабление', '😴 Сон', '😟 Тревога', '🎯 Фокус'];
  const meditations = [
    {
      emoji: '✨',
      title: 'Вечернее расслабление',
      duration: '10 мин',
      tag: 'Рекомендуем',
      premium: false
    },
    {
      emoji: '😌',
      title: 'Глубокое расслабление',
      duration: '10 мин',
      premium: false
    },
    {
      emoji: '😴',
      title: 'Сон и покой',
      duration: '15 мин',
      premium: true
    },
    {
      emoji: '😟',
      title: 'Отпускаем тревогу',
      duration: '5 мин',
      premium: false
    },
    {
      emoji: '🧘',
      title: 'Body-scan',
      duration: '20 мин',
      premium: true
    },
    {
      emoji: '🫁',
      title: 'Дыхание 4-7-8',
      duration: '5 мин',
      premium: false
    }
  ];

  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      <div
        className="px-4 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
          Медитации
        </h1>
      </div>

      <div className="overflow-x-auto px-4 py-4">
        <div className="flex gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
              style={{
                backgroundColor: idx === 0 ? '#8477B4' : '#F4F4F1',
                color: idx === 0 ? '#FFFFFF' : '#737370'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-3">
        {meditations[0] && (
          <div
            className="rounded-xl p-5 space-y-3"
            style={{ backgroundColor: '#F3F0F8' }}
          >
            <span className="text-xs font-semibold" style={{ color: '#8477B4' }}>
              ✨ Рекомендуем: На основе ваших записей в дневнике
            </span>
            <div className="flex items-center gap-3">
              <div className="text-4xl">{meditations[0].emoji}</div>
              <div className="flex-1">
                <p className="font-semibold" style={{ color: '#262624' }}>
                  {meditations[0].title}
                </p>
                <p className="text-sm" style={{ color: '#737370' }}>
                  {meditations[0].duration} • 🎧 Аудио + голос
                </p>
              </div>
            </div>
            <button
              onClick={() => setView('player')}
              className="w-full h-10 rounded-lg font-medium text-white"
              style={{ backgroundColor: '#8477B4' }}
            >
              Начать
            </button>
          </div>
        )}

        {meditations.slice(1).map((med, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 flex items-center gap-3"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <div className="text-3xl">{med.emoji}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm" style={{ color: '#262624' }}>
                  {med.title}
                </p>
                {med.premium && <span className="text-xs">🔒</span>}
              </div>
              <p className="text-xs" style={{ color: '#737370' }}>
                {med.duration} • 🎧 Аудио{med.premium && ' + голос'}
              </p>
            </div>
            <button
              onClick={() => !med.premium && setView('player')}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: med.premium ? '#E8E8E3' : '#F0F6F0' }}
            >
              <Play className="w-5 h-5 ml-0.5" style={{ color: med.premium ? '#A8A8A3' : '#5F9A63' }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
