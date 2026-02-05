import { useState, useEffect } from 'react';
import { Heart, Phone, MessageCircle, Users, X, Pause } from 'lucide-react';
import { Button } from '../ui/button';

type SOSView = 'activated' | 'breathing' | 'crisis' | 'contacts';

interface SOSScreensProps {
  onClose: () => void;
}

export default function SOSScreens({ onClose }: SOSScreensProps) {
  const [view, setView] = useState<SOSView>('activated');
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingTimer, setBreathingTimer] = useState(4);
  const [breathingCycle, setBreathingCycle] = useState(1);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  useEffect(() => {
    if (!isBreathingActive || view !== 'breathing') return;

    const interval = setInterval(() => {
      setBreathingTimer((prev) => {
        if (prev <= 1) {
          if (breathingPhase === 'inhale') {
            setBreathingPhase('hold');
            return 7;
          } else if (breathingPhase === 'hold') {
            setBreathingPhase('exhale');
            return 8;
          } else {
            setBreathingPhase('inhale');
            if (breathingCycle < 5) {
              setBreathingCycle(breathingCycle + 1);
            }
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, view, breathingPhase, breathingCycle]);

  // SOS Activated Screen
  if (view === 'activated') {
    return (
      <div 
        className="h-full flex flex-col items-center justify-center px-6 py-12"
        style={{ backgroundColor: '#2E2E2B', color: '#FAFAF8' }}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
          <div className="text-8xl mb-4">❤️</div>
          
          <h1 className="text-3xl font-bold">
            Ты не один. Мы рядом.
          </h1>

          <div className="w-full space-y-4 max-w-sm">
            <Button
              onClick={() => {
                setView('breathing');
                setIsBreathingActive(true);
              }}
              className="w-full h-14 text-white rounded-lg font-medium text-base"
              style={{ backgroundColor: '#5F9A63' }}
            >
              🫁 Дыхательное упражнение
            </Button>

            <Button
              onClick={() => window.open('tel:88002000122')}
              className="w-full h-14 text-white rounded-lg font-medium text-base"
              style={{ backgroundColor: '#DE5438' }}
            >
              📞 Горячая линия 8-800-2000-122
            </Button>

            <Button
              variant="outline"
              className="w-full h-14 rounded-lg font-medium text-base border-white/30 text-white"
            >
              💬 Написать в чат поддержки
            </Button>

            <Button
              onClick={() => setView('contacts')}
              variant="outline"
              className="w-full h-14 rounded-lg font-medium text-base border-white/30 text-white"
            >
              👥 Мои доверенные лица
            </Button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-sm mt-8"
          style={{ color: '#A8A8A3' }}
        >
          Закрыть
        </button>
      </div>
    );
  }

  // Breathing Exercise Screen
  if (view === 'breathing') {
    const phaseText = {
      inhale: 'Вдохни...',
      hold: 'Задержи...',
      exhale: 'Выдохни...'
    };

    const phaseDuration = {
      inhale: '4с',
      hold: '7с',
      exhale: '8с'
    };

    const circleScale = {
      inhale: 1.5,
      hold: 1.5,
      exhale: 0.8
    };

    return (
      <div 
        className="h-full flex flex-col items-center justify-center px-6 py-12"
        style={{ background: 'linear-gradient(to bottom, #1A2E1C, #162838)' }}
      >
        <button
          onClick={() => {
            setIsBreathingActive(false);
            setView('activated');
          }}
          className="absolute top-8 left-6 text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-medium text-white/60">
              Дыхание 4-7-8
            </p>
            <h2 className="text-3xl font-bold text-white">
              {phaseText[breathingPhase]}
            </h2>
            <p className="text-lg text-white/80">
              {breathingPhase === 'inhale' ? 'Вдох' : breathingPhase === 'hold' ? 'Задержка' : 'Выдох'} — {phaseDuration[breathingPhase]}
            </p>
          </div>

          <div className="relative w-64 h-64 flex items-center justify-center">
            <div
              className="absolute rounded-full transition-all duration-1000"
              style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#7BAE7F',
                opacity: 0.3,
                transform: `scale(${circleScale[breathingPhase]})`,
                boxShadow: '0 0 40px rgba(123,174,127,0.3)'
              }}
            ></div>
            <div
              className="absolute rounded-full transition-all duration-1000"
              style={{
                width: '160px',
                height: '160px',
                backgroundColor: '#7BAE7F',
                opacity: 0.5,
                transform: `scale(${circleScale[breathingPhase]})`,
                boxShadow: '0 0 30px rgba(123,174,127,0.4)'
              }}
            ></div>
            <div 
              className="relative z-10 text-white text-5xl font-bold"
            >
              {breathingTimer}
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/60 text-sm mb-2">
              Цикл {breathingCycle} из 5
            </p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: n <= breathingCycle ? '#7BAE7F' : '#FFFFFF30'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => setIsBreathingActive(!isBreathingActive)}
            variant="outline"
            className="h-12 px-6 rounded-lg border-white/30 text-white"
          >
            {isBreathingActive ? <><Pause className="w-5 h-5 mr-2" /> Пауза</> : '▶ Продолжить'}
          </Button>
          <Button
            onClick={() => {
              setIsBreathingActive(false);
              setView('activated');
            }}
            variant="outline"
            className="h-12 px-6 rounded-lg border-white/30 text-white"
          >
            ✓ Завершить
          </Button>
        </div>
      </div>
    );
  }

  // Emergency Contacts Screen
  if (view === 'contacts') {
    return (
      <div 
        className="h-full flex flex-col"
        style={{ backgroundColor: '#FAFAF8' }}
      >
        <div 
          className="px-4 py-4 flex items-center justify-between"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button onClick={() => setView('activated')}>
            <X className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
            Экстренные контакты
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-32">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold" style={{ color: '#737370' }}>
              Горячие линии
            </h2>
            
            {[
              {
                icon: '📞',
                title: 'Телефон доверия',
                number: '8-800-2000-122',
                description: 'Бесплатно, 24/7'
              },
              {
                icon: '🚨',
                title: 'Скорая помощь',
                number: '112',
                description: 'Экстренная помощь'
              },
              {
                icon: '💚',
                title: 'Центр психологической помощи',
                number: '8-495-989-50-50',
                description: 'Московская служба'
              }
            ].map((contact, idx) => (
              <button
                key={idx}
                onClick={() => window.open(`tel:${contact.number.replace(/[^0-9]/g, '')}`)}
                className="w-full rounded-xl p-4 text-left transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{contact.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold" style={{ color: '#262624' }}>
                      {contact.title}
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#5F9A63' }}>
                      {contact.number}
                    </p>
                    <p className="text-xs" style={{ color: '#737370' }}>
                      {contact.description}
                    </p>
                  </div>
                  <Phone className="w-5 h-5" style={{ color: '#5F9A63' }} />
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold" style={{ color: '#737370' }}>
              Мои доверенные лица
            </h2>
            
            {[
              {
                name: 'Мама',
                number: '+7 999 ***-**-12'
              },
              {
                name: 'Друг',
                number: '+7 916 ***-**-45'
              }
            ].map((contact, idx) => (
              <button
                key={idx}
                onClick={() => window.open('tel:+79999999999')}
                className="w-full rounded-xl p-4 text-left transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: '#F0F6F0' }}
                  >
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold" style={{ color: '#262624' }}>
                      {contact.name}
                    </p>
                    <p className="text-sm" style={{ color: '#737370' }}>
                      {contact.number}
                    </p>
                  </div>
                  <Phone className="w-5 h-5" style={{ color: '#5F9A63' }} />
                </div>
              </button>
            ))}

            <Button
              className="w-full h-12 rounded-lg font-medium"
              variant="outline"
              style={{ borderColor: '#5F9A63', color: '#5F9A63' }}
            >
              + Добавить контакт
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
