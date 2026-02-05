import { ChevronLeft, BarChart3, Plus } from 'lucide-react';

export default function DiaryScreen() {
  const entries = [
    {
      date: 'Сегодня',
      items: [
        {
          emoji: '😟',
          emotion: 'Тревога',
          time: '14:30',
          intensity: 7,
          preview: 'Опять не мог заснуть, мысли о работе...',
          color: '#F4B942'
        },
        {
          emoji: '😌',
          emotion: 'Спокойствие',
          time: '09:15',
          intensity: 4,
          preview: 'Утренняя медитация помогла...',
          color: '#5F9A63'
        }
      ]
    },
    {
      date: 'Вчера',
      items: [
        {
          emoji: '😠',
          emotion: 'Злость',
          time: '18:00',
          intensity: 8,
          preview: 'Конфликт с коллегой...',
          color: '#DE5438'
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <div 
        className="px-4 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
          Дневник
        </h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#F4F4F1' }}>
          <BarChart3 className="w-5 h-5" style={{ color: '#737370' }} />
        </button>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-32">
        {entries.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-3">
            <p className="text-xs font-semibold" style={{ color: '#A8A8A3' }}>
              {group.date}
            </p>
            {group.items.map((entry, entryIdx) => (
              <div
                key={entryIdx}
                className="rounded-xl p-4 space-y-2"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  borderLeft: `4px solid ${entry.color}`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{entry.emoji}</span>
                    <div>
                      <p className="font-semibold" style={{ color: '#262624' }}>
                        {entry.emotion}
                      </p>
                      <p className="text-xs" style={{ color: '#737370' }}>
                        {entry.time}
                      </p>
                    </div>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: entry.color + '20', color: entry.color }}
                  >
                    {entry.intensity}/10
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#737370' }}>
                  {entry.preview}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* FAB - New Entry */}
      <button
        className="fixed right-4 bottom-24 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: '#5F9A63' }}
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
