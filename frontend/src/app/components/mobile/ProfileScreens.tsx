import { useState } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Screen } from '../MobileApp';

type ProfileView = 'profile' | 'subscription' | 'settings';

interface ProfileScreensProps {
  initialView?: ProfileView;
  onNavigate: (screen: Screen) => void;
}

export default function ProfileScreens({ initialView = 'profile', onNavigate }: ProfileScreensProps) {
  const [view, setView] = useState<ProfileView>(initialView);

  // Profile View
  if (view === 'profile') {
    return (
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div
          className="px-4 py-4 flex items-center"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button onClick={() => onNavigate('more')}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
            Профиль
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
              style={{ backgroundColor: '#F0F6F0' }}
            >
              👤
            </div>
            <div className="text-center">
              <p className="text-xl font-bold" style={{ color: '#262624' }}>
                Аня Смирнова
              </p>
              <p className="text-sm" style={{ color: '#737370' }}>
                anya@example.com
              </p>
            </div>
            <span
              className="px-4 py-2 rounded-full font-semibold text-white"
              style={{ backgroundColor: '#5F9A63' }}
            >
              Standard
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              <p className="text-2xl font-bold" style={{ color: '#262624' }}>
                23
              </p>
              <p className="text-xs" style={{ color: '#737370' }}>
                Сессии с ИИ
              </p>
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              <p className="text-2xl font-bold" style={{ color: '#262624' }}>
                🔥 5
              </p>
              <p className="text-xs" style={{ color: '#737370' }}>
                Дней подряд
              </p>
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              <p className="text-2xl font-bold" style={{ color: '#262624' }}>
                12
              </p>
              <p className="text-xs" style={{ color: '#737370' }}>
                Упражнений
              </p>
            </div>
          </div>

          <Button
            onClick={() => setView('subscription')}
            className="w-full h-12 text-white rounded-lg font-medium"
            style={{ backgroundColor: '#8477B4' }}
          >
            Перейти на Premium
          </Button>
        </div>
      </div>
    );
  }

  // Subscription View
  if (view === 'subscription') {
    return (
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div
          className="px-4 py-4 flex items-center"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button onClick={() => onNavigate('more')}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
            Подписка
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Current Plan */}
          <div
            className="rounded-xl p-5 space-y-4"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #5F9A63' }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium" style={{ color: '#737370' }}>
                  Ваш тариф
                </p>
                <p className="text-2xl font-bold" style={{ color: '#262624' }}>
                  Standard
                </p>
              </div>
              <span className="text-2xl font-bold" style={{ color: '#5F9A63' }}>
                990 ₽
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p style={{ color: '#737370' }}>
                Следующее списание: 11 февраля 2026
              </p>
              <p style={{ color: '#737370' }}>
                Способ оплаты: •••• 4242
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 rounded-lg text-sm" style={{ borderColor: '#5F9A63', color: '#5F9A63' }}>
                Сменить тариф
              </Button>
              <Button variant="outline" className="flex-1 rounded-lg text-sm" style={{ borderColor: '#DE5438', color: '#DE5438' }}>
                Отменить
              </Button>
            </div>
          </div>

          {/* Available Plans */}
          <div className="space-y-4">
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              Доступные планы
            </h3>

            <div
              className="rounded-xl p-5 space-y-3"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E3' }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-bold" style={{ color: '#262624' }}>
                    Бесплатный
                  </p>
                  <p className="text-xs" style={{ color: '#737370' }}>
                    5 сессий/день, базовый функционал
                  </p>
                </div>
                <span className="text-xl font-bold" style={{ color: '#262624' }}>
                  0 ₽
                </span>
              </div>
              <Button variant="outline" className="w-full rounded-lg" style={{ borderColor: '#5F9A63', color: '#5F9A63' }}>
                Перейти
              </Button>
            </div>

            <div
              className="rounded-xl p-5 space-y-3 relative"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #8477B4' }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  className="px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: '#8477B4' }}
                >
                  Рекомендуем
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-bold" style={{ color: '#262624' }}>
                    Премиум
                  </p>
                  <p className="text-xs" style={{ color: '#737370' }}>
                    Всё + wearables, приоритет, безлимит
                  </p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#8477B4' }}>
                    7 дней бесплатно
                  </p>
                </div>
                <span className="text-xl font-bold" style={{ color: '#262624' }}>
                  2 990 ₽
                </span>
              </div>
              <Button className="w-full text-white rounded-lg" style={{ backgroundColor: '#8477B4' }}>
                Попробовать Premium
              </Button>
            </div>
          </div>

          {/* Payment History */}
          <div className="space-y-3">
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              История платежей
            </h3>
            {[
              { date: '04.02.2026', amount: '990 ₽', plan: 'Стандартный', status: 'Оплачено' },
              { date: '04.01.2026', amount: '990 ₽', plan: 'Стандартный', status: 'Оплачено' }
            ].map((payment, idx) => (
              <div
                key={idx}
                className="rounded-lg p-3 flex justify-between items-center text-sm"
                style={{ backgroundColor: '#F4F4F1' }}
              >
                <div>
                  <p className="font-medium" style={{ color: '#262624' }}>
                    {payment.date} — {payment.amount}
                  </p>
                  <p className="text-xs" style={{ color: '#737370' }}>
                    {payment.plan}
                  </p>
                </div>
                <span className="text-xs font-semibold" style={{ color: '#5F9A63' }}>
                  {payment.status} ✅
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Settings View
  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      <div
        className="px-4 py-4 flex items-center"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <button onClick={() => onNavigate('more')}>
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>
        <h1 className="flex-1 text-center text-xl font-semibold" style={{ color: '#262624' }}>
          Настройки
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold" style={{ color: '#737370' }}>
            Основные
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Тёмная тема</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Haptic feedback</span>
              <Switch defaultChecked />
            </div>
            <button className="w-full flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Язык</span>
              <span style={{ color: '#737370' }}>Русский →</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold" style={{ color: '#737370' }}>
            Уведомления
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p style={{ color: '#262624' }}>Ежедневный check-in</p>
                <p className="text-xs" style={{ color: '#737370' }}>20:00</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Напоминания об упражнениях</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Советы и рекомендации</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Маркетинговые уведомления</span>
              <Switch />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold" style={{ color: '#737370' }}>
            Конфиденциальность
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-2">
              <span style={{ color: '#262624' }}>Экспорт всех данных</span>
              <span style={{ color: '#737370' }}>JSON/CSV →</span>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <span style={{ color: '#DE5438' }}>Удалить аккаунт</span>
              <span style={{ color: '#DE5438' }}>→</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold" style={{ color: '#737370' }}>
            О приложении
          </h3>
          <p className="text-sm" style={{ color: '#737370' }}>
            Версия: 1.0.0
          </p>
          <button className="text-sm" style={{ color: '#5F9A63' }}>
            Политика конфиденциальности →
          </button>
          <button className="text-sm" style={{ color: '#5F9A63' }}>
            Условия использования →
          </button>
        </div>
      </div>
    </div>
  );
}
