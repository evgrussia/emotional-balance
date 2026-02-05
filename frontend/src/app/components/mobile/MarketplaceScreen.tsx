import { ChevronLeft, Search } from 'lucide-react';

export default function MarketplaceScreen() {
  const specialists = [
    {
      name: 'Елена Иванова',
      specialization: 'Тревожность, Стресс, КПТ',
      rating: 4.9,
      reviews: 128,
      price: 'от 3 000 ₽',
      online: true,
      tags: ['КПТ', 'Тревога']
    },
    {
      name: 'Андрей Петров',
      specialization: 'Депрессия, Выгорание, Отношения',
      rating: 4.7,
      reviews: 89,
      price: 'от 2 500 ₽',
      online: false,
      nextSlot: 'завтра, 14:00',
      tags: ['Депрессия', 'Выгорание']
    },
    {
      name: 'Мария Сидорова',
      specialization: 'Панические атаки, Фобии, КПТ',
      rating: 4.8,
      reviews: 156,
      price: 'от 3 500 ₽',
      online: true,
      tags: ['Панические атаки', 'КПТ']
    }
  ];

  return (
    <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
      <div
        className="px-4 py-4"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <h1 className="flex-1 text-xl font-semibold" style={{ color: '#262624' }}>
            Специалисты
          </h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#F4F4F1' }}>
            <Search className="w-5 h-5" style={{ color: '#737370' }} />
          </button>
        </div>

        <div className="flex gap-2">
          {['Все', 'По цене ↓', 'По рейтингу ↓', 'Онлайн 🟢'].map((filter, idx) => (
            <button
              key={idx}
              className="rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap"
              style={{
                backgroundColor: idx === 0 ? '#5F9A63' : '#F4F4F1',
                color: idx === 0 ? '#FFFFFF' : '#737370'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: '#F0F6F0' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#5F9A63' }}>
            ✨ На основе ваших сессий рекомендуем специалиста по тревожности
          </p>
        </div>

        {specialists.map((spec, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 space-y-3"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: '#F0F6F0' }}
              >
                👤
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate" style={{ color: '#262624' }}>
                      {spec.name}
                    </p>
                    <p className="text-xs truncate" style={{ color: '#737370' }}>
                      {spec.specialization}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color: '#5F9A63' }}>
                      ⭐ {spec.rating}
                    </p>
                    <p className="text-xs" style={{ color: '#737370' }}>
                      {spec.reviews} отзывов
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {spec.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#F0F6F0', color: '#5F9A63' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold" style={{ color: '#262624' }}>
                  {spec.price}
                </p>
                {spec.online ? (
                  <p className="text-xs" style={{ color: '#5F9A63' }}>
                    🟢 Онлайн
                  </p>
                ) : (
                  <p className="text-xs" style={{ color: '#737370' }}>
                    ⚪ Ближайший слот: {spec.nextSlot}
                  </p>
                )}
              </div>
              <button
                className="px-5 py-2 rounded-lg font-medium text-sm text-white"
                style={{ backgroundColor: '#5F9A63' }}
              >
                Записаться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
