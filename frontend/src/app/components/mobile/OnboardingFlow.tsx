import { useState } from 'react';
import { ChevronLeft, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Progress } from '../ui/progress';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [mood, setMood] = useState(3);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptAge, setAcceptAge] = useState(false);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const toggleTrigger = (trigger: string) => {
    if (selectedTriggers.includes(trigger)) {
      setSelectedTriggers(selectedTriggers.filter(t => t !== trigger));
    } else {
      setSelectedTriggers([...selectedTriggers, trigger]);
    }
  };

  // Step 1: Disclaimer
  if (step === 1) {
    return (
      <div className="flex flex-col h-full px-6 py-8" style={{ paddingBottom: '120px' }}>
        <button onClick={handleBack} className="self-start mb-6">
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>

        <div className="flex-1 space-y-6">
          <div className="flex justify-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#F0F6F0' }}
            >
              <Shield className="w-8 h-8" style={{ color: '#5F9A63' }} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center" style={{ color: '#262624' }}>
              Важная информация
            </h2>
            
            <p className="text-base leading-relaxed" style={{ color: '#737370' }}>
              Emotional Balance — это wellness-платформа психологической поддержки. 
              Это НЕ замена профессиональной медицинской помощи. 
              ИИ-помощник не ставит диагнозы и не назначает лечение.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              />
              <span className="text-sm" style={{ color: '#737370' }}>
                Я прочитал(а) и принимаю условия использования и политику обработки персональных данных (ФЗ-152)
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={acceptAge}
                onCheckedChange={(checked) => setAcceptAge(checked === true)}
              />
              <span className="text-sm" style={{ color: '#737370' }}>
                Мне есть 18 лет
              </span>
            </label>
          </div>
        </div>

        <Button
          onClick={handleNext}
          disabled={!acceptTerms || !acceptAge}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ 
            backgroundColor: acceptTerms && acceptAge ? '#5F9A63' : '#E8E8E3',
            color: acceptTerms && acceptAge ? '#FFFFFF' : '#A8A8A3'
          }}
        >
          Принимаю
        </Button>
      </div>
    );
  }

  // Step 2: Goals Selection
  if (step === 2) {
    const goals = [
      { emoji: '😟', label: 'Тревога' },
      { emoji: '😰', label: 'Стресс' },
      { emoji: '😴', label: 'Сон' },
      { emoji: '💔', label: 'Отношения' },
      { emoji: '🙁', label: 'Самооценка' },
      { emoji: '😔', label: 'Настроение' },
      { emoji: '💼', label: 'Работа' },
      { emoji: '👨‍👩‍👧', label: 'Семья' }
    ];

    return (
      <div className="flex flex-col h-full px-6 py-8" style={{ paddingBottom: '120px' }}>
        <div className="flex items-center justify-between mb-6">
          <button onClick={handleBack}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <span className="text-sm font-medium" style={{ color: '#737370' }}>
            Шаг 1 из 4
          </span>
        </div>

        <Progress value={25} className="mb-6" />

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#262624' }}>
              Что тебя сейчас беспокоит?
            </h2>
            <p className="text-sm" style={{ color: '#737370' }}>
              Выбери 1-3 темы
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {goals.map((goal) => (
              <button
                key={goal.label}
                onClick={() => toggleGoal(goal.label)}
                className="h-11 rounded-full flex items-center justify-center gap-2 transition-all font-medium text-sm"
                style={{
                  backgroundColor: selectedGoals.includes(goal.label) ? '#5F9A63' : '#FFFFFF',
                  color: selectedGoals.includes(goal.label) ? '#FFFFFF' : '#262624',
                  border: selectedGoals.includes(goal.label) ? 'none' : '1px solid #E8E8E3'
                }}
              >
                <span>{goal.emoji}</span>
                <span>{goal.label}</span>
                {selectedGoals.includes(goal.label) && <span>✓</span>}
              </button>
            ))}
          </div>

          <p className="text-sm text-center" style={{ color: '#737370' }}>
            Выбрано: {selectedGoals.length} из 3
          </p>
        </div>

        <Button
          onClick={handleNext}
          disabled={selectedGoals.length === 0}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ 
            backgroundColor: selectedGoals.length > 0 ? '#5F9A63' : '#E8E8E3',
            color: selectedGoals.length > 0 ? '#FFFFFF' : '#A8A8A3'
          }}
        >
          Продолжить
        </Button>
      </div>
    );
  }

  // Step 3: Mood Assessment
  if (step === 3) {
    const emojis = ['😢', '😟', '😐', '🙂', '😊'];
    
    return (
      <div className="flex flex-col h-full px-6 py-8" style={{ paddingBottom: '120px' }}>
        <div className="flex items-center justify-between mb-6">
          <button onClick={handleBack}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <span className="text-sm font-medium" style={{ color: '#737370' }}>
            Шаг 2 из 4
          </span>
        </div>

        <Progress value={50} className="mb-6" />

        <div className="flex-1 space-y-8">
          <h2 className="text-2xl font-bold" style={{ color: '#262624' }}>
            Как ты себя чувствуешь прямо сейчас?
          </h2>

          <div className="space-y-6">
            <div className="flex justify-between px-2">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setMood(index + 1)}
                  className="text-5xl transition-transform"
                  style={{
                    transform: mood === index + 1 ? 'scale(1.2)' : 'scale(1)',
                    opacity: mood === index + 1 ? 1 : 0.4
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <input
              type="range"
              min="1"
              max="5"
              value={mood}
              onChange={(e) => setMood(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none"
              style={{
                background: `linear-gradient(to right, #DE5438 0%, #F4B942 50%, #5F9A63 100%)`
              }}
            />

            <div className="flex justify-between text-sm" style={{ color: '#737370' }}>
              <span>Плохо</span>
              <span>Отлично</span>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium" style={{ color: '#262624' }}>
              Как давно ты чувствуешь себя так?
            </p>
            {[
              'Несколько дней',
              'Несколько недель',
              'Месяц и больше',
              'Не хочу отвечать'
            ].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="duration" className="w-5 h-5" />
                <span className="text-sm" style={{ color: '#737370' }}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          onClick={handleNext}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#5F9A63' }}
        >
          Продолжить
        </Button>
      </div>
    );
  }

  // Step 4: Triggers
  if (step === 4) {
    const triggers = [
      { emoji: '💼', label: 'Работа' },
      { emoji: '👥', label: 'Люди' },
      { emoji: '🏠', label: 'Дом' },
      { emoji: '💰', label: 'Финансы' },
      { emoji: '📱', label: 'Соцсети' },
      { emoji: '🌙', label: 'Вечер/ночь' },
      { emoji: '🚗', label: 'Дорога' },
      { emoji: '🤷', label: 'Не знаю' }
    ];

    return (
      <div className="flex flex-col h-full px-6 py-8" style={{ paddingBottom: '120px' }}>
        <div className="flex items-center justify-between mb-6">
          <button onClick={handleBack}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <span className="text-sm font-medium" style={{ color: '#737370' }}>
            Шаг 3 из 4
          </span>
        </div>

        <Progress value={75} className="mb-6" />

        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold" style={{ color: '#262624' }}>
            Что чаще всего вызывает стресс?
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {triggers.map((trigger) => (
              <button
                key={trigger.label}
                onClick={() => toggleTrigger(trigger.label)}
                className="h-11 rounded-full flex items-center justify-center gap-2 transition-all font-medium text-sm"
                style={{
                  backgroundColor: selectedTriggers.includes(trigger.label) ? '#5F9A63' : '#FFFFFF',
                  color: selectedTriggers.includes(trigger.label) ? '#FFFFFF' : '#262624',
                  border: selectedTriggers.includes(trigger.label) ? 'none' : '1px solid #E8E8E3'
                }}
              >
                <span>{trigger.emoji}</span>
                <span>{trigger.label}</span>
                {selectedTriggers.includes(trigger.label) && <span>✓</span>}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleNext}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#5F9A63' }}
        >
          Продолжить
        </Button>
      </div>
    );
  }

  // Step 5: Plan Selection
  return (
    <div className="flex flex-col h-full px-6 py-8" style={{ paddingBottom: '120px' }}>
      <div className="flex items-center justify-between mb-6">
        <button onClick={handleBack}>
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>
        <span className="text-sm font-medium" style={{ color: '#737370' }}>
          Шаг 4 из 4
        </span>
      </div>

      <Progress value={100} className="mb-6" />

      <div className="flex-1 overflow-y-auto space-y-4">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#262624' }}>
          Выберите план
        </h2>

        {/* Free Plan */}
        <div 
          className="rounded-xl p-5 space-y-3"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E3' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg" style={{ color: '#262624' }}>
                Бесплатный
              </h3>
              <p className="text-sm" style={{ color: '#737370' }}>
                5 сессий/день, 1 запись в дневник
              </p>
            </div>
            <span className="text-2xl font-bold" style={{ color: '#262624' }}>
              0 ₽
            </span>
          </div>
          <Button
            onClick={onComplete}
            variant="outline"
            className="w-full h-10 rounded-lg"
            style={{ borderColor: '#5F9A63', color: '#5F9A63' }}
          >
            Начать бесплатно
          </Button>
        </div>

        {/* Standard Plan - Recommended */}
        <div 
          className="rounded-xl p-5 space-y-3 relative"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #5F9A63' }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span 
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: '#5F9A63' }}
            >
              Рекомендуем
            </span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg" style={{ color: '#262624' }}>
                Стандартный
              </h3>
              <p className="text-sm" style={{ color: '#737370' }}>
                Безлимит чат, голос, дневник
              </p>
              <p className="text-xs font-medium" style={{ color: '#5F9A63' }}>
                7 дней бесплатно
              </p>
            </div>
            <span className="text-2xl font-bold" style={{ color: '#262624' }}>
              990 ₽
            </span>
          </div>
          <Button
            onClick={onComplete}
            className="w-full h-10 text-white rounded-lg font-medium"
            style={{ backgroundColor: '#5F9A63' }}
          >
            Попробовать бесплатно
          </Button>
        </div>

        {/* Premium Plan */}
        <div 
          className="rounded-xl p-5 space-y-3"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #8477B4' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg" style={{ color: '#262624' }}>
                Премиум
              </h3>
              <p className="text-sm" style={{ color: '#737370' }}>
                Всё + wearables, приоритет
              </p>
              <p className="text-xs font-medium" style={{ color: '#8477B4' }}>
                7 дней бесплатно
              </p>
            </div>
            <span className="text-2xl font-bold" style={{ color: '#262624' }}>
              2 990 ₽
            </span>
          </div>
          <Button
            onClick={onComplete}
            className="w-full h-10 text-white rounded-lg font-medium"
            style={{ backgroundColor: '#8477B4' }}
          >
            Попробовать бесплатно
          </Button>
        </div>

        <p className="text-center text-xs pt-4" style={{ color: '#737370' }}>
          ❤️ SOS-помощь бесплатна на всех тарифах
        </p>
      </div>
    </div>
  );
}
