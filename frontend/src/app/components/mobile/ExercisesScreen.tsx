import { ChevronLeft, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Screen } from '../MobileApp';

interface ExercisesScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ExercisesScreen({ onNavigate }: ExercisesScreenProps) {
  const categories = ['Все', '🫁 Дыхание', '🧠 КПТ', '🧘 Расслабление', '💪 PMR'];
  
  const exercises = [
    {
      icon: '🧠',
      title: 'Мысли и факты',
      duration: '10 мин',
      difficulty: 'Средний',
      tag: 'Подходит при тревоге',
      color: '#5F9A63',
      recommended: true
    },
    {
      icon: '🫁',
      title: 'Дыхание 4-7-8',
      duration: '5 мин',
      difficulty: 'Лёгкий',
      tag: '',
      color: '#5F9A63'
    },
    {
      icon: '🧠',
      title: 'Когнитивная реструктуризация',
      duration: '15 мин',
      difficulty: 'Средний',
      tag: '',
      color: '#5289AB'
    },
    {
      icon: '🧘',
      title: 'Сканирование тела',
      duration: '10 мин',
      difficulty: 'Лёгкий',
      tag: '',
      color: '#8477B4'
    },
    {
      icon: '🫁',
      title: 'Квадратное дыхание',
      duration: '5 мин',
      difficulty: 'Лёгкий',
      tag: '',
      color: '#5F9A63'
    },
    {
      icon: '🧠',
      title: 'Поведенческая активация',
      duration: '10 мин',
      difficulty: 'Средний',
      tag: '🔒 Premium',
      color: '#8477B4',
      locked: true
    }
  ];

  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      <div 
        className="px-4 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <button onClick={() => onNavigate('home')}>
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>
        <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
          Упражнения
        </h1>
        <div className="w-6"></div>
      </div>

      {/* Category Filter */}
      <div className="overflow-x-auto px-4 py-4">
        <div className="flex gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
              style={{
                backgroundColor: idx === 0 ? '#5F9A63' : '#F4F4F1',
                color: idx === 0 ? '#FFFFFF' : '#737370'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Exercises List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4">
        {exercises.map((exercise, idx) => (
          <div
            key={idx}
            className="rounded-xl p-5 space-y-3"
            style={{
              backgroundColor: exercise.recommended ? '#F0F6F0' : '#FFFFFF',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              opacity: exercise.locked ? 0.7 : 1
            }}
          >
            {exercise.recommended && (
              <span className="text-xs font-semibold" style={{ color: '#5F9A63' }}>
                Рекомендуем для вас
              </span>
            )}
            
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: exercise.color + '20' }}
              >
                {exercise.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold" style={{ color: '#262624' }}>
                    {exercise.title}
                  </p>
                  {exercise.locked && <span>🔒</span>}
                </div>
                <p className="text-sm" style={{ color: '#737370' }}>
                  {exercise.duration} • {exercise.difficulty}
                </p>
                {exercise.tag && !exercise.locked && (
                  <span
                    className="inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1"
                    style={{ backgroundColor: exercise.color + '20', color: exercise.color }}
                  >
                    {exercise.tag}
                  </span>
                )}
              </div>
            </div>

            <Button
              onClick={() => onNavigate('meditations')}
              variant={exercise.recommended ? 'default' : 'outline'}
              className="w-full h-10 rounded-lg"
              style={
                exercise.recommended
                  ? { backgroundColor: '#5F9A63', color: '#FFFFFF' }
                  : { borderColor: '#5F9A63', color: '#5F9A63' }
              }
              disabled={exercise.locked}
            >
              {exercise.locked ? 'Premium' : 'Начать'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
