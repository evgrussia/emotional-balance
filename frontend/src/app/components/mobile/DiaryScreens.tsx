import { useState } from 'react';
import { ChevronLeft, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Slider } from '../ui/slider';

type DiaryView = 'timeline' | 'emotion-picker' | 'text-entry' | 'analytics';

interface DiaryScreensProps {
  initialView?: DiaryView;
}

export default function DiaryScreens({ initialView = 'timeline' }: DiaryScreensProps) {
  const [view, setView] = useState<DiaryView>(initialView);
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [entryText, setEntryText] = useState('');
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const emotions = [
    { emoji: '😊', label: 'Радость', color: '#5F9A63' },
    { emoji: '😌', label: 'Спокойствие', color: '#5289AB' },
    { emoji: '😢', label: 'Грусть', color: '#5289AB' },
    { emoji: '😟', label: 'Тревога', color: '#F4B942' },
    { emoji: '😠', label: 'Злость', color: '#DE5438' },
    { emoji: '😰', label: 'Стресс', color: '#DE5438' },
    { emoji: '😔', label: 'Одиночество', color: '#8477B4' },
    { emoji: '😴', label: 'Усталость', color: '#A8A8A3' }
  ];

  const contexts = [
    { emoji: '🏠', label: 'Дома' },
    { emoji: '💼', label: 'Работа' },
    { emoji: '👥', label: 'С людьми' },
    { emoji: '🧑', label: 'Один' }
  ];

  const tags = ['сон', 'работа', 'семья', 'здоровье', 'отношения', 'финансы'];

  // Timeline View
  if (view === 'timeline') {
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
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div 
          className="px-4 py-4 flex items-center justify-between"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
            Дневник
          </h1>
          <button 
            onClick={() => setView('analytics')}
            className="w-10 h-10 flex items-center justify-center rounded-lg" 
            style={{ backgroundColor: '#F4F4F1' }}
          >
            📊
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
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

        <button
          onClick={() => setView('emotion-picker')}
          className="fixed right-4 bottom-24 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: '#5F9A63', zIndex: 100 }}
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
    );
  }

  // Emotion Picker View
  if (view === 'emotion-picker') {
    return (
      <div className="flex flex-col h-full px-6 py-8 pb-32" style={{ backgroundColor: '#FAFAF8' }}>
        <button onClick={() => setView('timeline')} className="self-start mb-6">
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#262624' }}>
              Что ты сейчас чувствуешь?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {emotions.map((emotion) => (
              <button
                key={emotion.label}
                onClick={() => setSelectedEmotion(emotion.label)}
                className="rounded-2xl p-4 flex flex-col items-center gap-2 transition-all"
                style={{
                  backgroundColor: selectedEmotion === emotion.label ? emotion.color : '#FFFFFF',
                  color: selectedEmotion === emotion.label ? '#FFFFFF' : '#262624',
                  border: selectedEmotion === emotion.label ? 'none' : '1px solid #E8E8E3',
                  transform: selectedEmotion === emotion.label ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <span className="text-5xl">{emotion.emoji}</span>
                <span className="text-sm font-medium">{emotion.label}</span>
                {selectedEmotion === emotion.label && <span>✓</span>}
              </button>
            ))}
          </div>

          {selectedEmotion && (
            <div className="space-y-4 pt-4">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium" style={{ color: '#262624' }}>
                    Насколько сильно?
                  </span>
                  <span 
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: intensity > 7 ? '#DE543820' : intensity > 4 ? '#F4B94220' : '#5F9A6320',
                      color: intensity > 7 ? '#DE5438' : intensity > 4 ? '#F4B942' : '#5F9A63'
                    }}
                  >
                    {intensity}/10
                  </span>
                </div>
                <Slider
                  value={[intensity]}
                  onValueChange={(value) => setIntensity(value[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-2" style={{ color: '#737370' }}>
                  <span>Слабо</span>
                  <span>Сильно</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <Button
          onClick={() => setView('text-entry')}
          disabled={!selectedEmotion}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ 
            backgroundColor: selectedEmotion ? '#5F9A63' : '#E8E8E3',
            color: selectedEmotion ? '#FFFFFF' : '#A8A8A3'
          }}
        >
          Далее
        </Button>
      </div>
    );
  }

  // Text Entry View
  if (view === 'text-entry') {
    const selectedEmotionData = emotions.find(e => e.label === selectedEmotion);

    return (
      <div className="flex flex-col h-full px-6 py-8 pb-32" style={{ backgroundColor: '#FAFAF8' }}>
        <button onClick={() => setView('emotion-picker')} className="self-start mb-6">
          <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
        </button>

        <div className="flex-1 space-y-6 overflow-y-auto">
          {selectedEmotionData && (
            <div 
              className="rounded-full px-4 py-2 inline-flex items-center gap-2"
              style={{ backgroundColor: selectedEmotionData.color + '20' }}
            >
              <span className="text-2xl">{selectedEmotionData.emoji}</span>
              <span className="font-semibold" style={{ color: selectedEmotionData.color }}>
                {selectedEmotion} — {intensity}/10
              </span>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#262624' }}>
              Расскажи подробнее
            </h2>
            <p className="text-sm mb-4" style={{ color: '#737370' }}>
              Необязательно, но помогает отследить паттерны
            </p>
            
            <Textarea
              value={entryText}
              onChange={(e) => setEntryText(e.target.value)}
              placeholder="Что произошло? О чём ты думаешь?"
              className="min-h-32 resize-none"
              maxLength={500}
            />
            <p className="text-xs text-right mt-1" style={{ color: '#A8A8A3' }}>
              {entryText.length}/500
            </p>
          </div>

          <div>
            <p className="text-sm font-medium mb-3" style={{ color: '#262624' }}>
              Где ты сейчас?
            </p>
            <div className="flex gap-2">
              {contexts.map((context) => (
                <button
                  key={context.label}
                  onClick={() => setSelectedContext(context.label)}
                  className="flex-1 rounded-full py-2 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: selectedContext === context.label ? '#5F9A63' : '#FFFFFF',
                    color: selectedContext === context.label ? '#FFFFFF' : '#262624',
                    border: selectedContext === context.label ? 'none' : '1px solid #E8E8E3'
                  }}
                >
                  {context.emoji} {context.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3" style={{ color: '#262624' }}>
              Темы
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(selectedTags.filter(t => t !== tag));
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: selectedTags.includes(tag) ? '#5F9A63' : '#F4F4F1',
                    color: selectedTags.includes(tag) ? '#FFFFFF' : '#737370'
                  }}
                >
                  {tag}
                </button>
              ))}
              <button
                className="rounded-full px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: '#F4F4F1', color: '#737370' }}
              >
                + Другое
              </button>
            </div>
          </div>
        </div>

        <Button
          onClick={() => {
            // Save entry logic here
            setView('timeline');
          }}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#5F9A63' }}
        >
          Сохранить
        </Button>
      </div>
    );
  }

  // Analytics View
  if (view === 'analytics') {
    return (
      <div className="flex flex-col h-full pb-16" style={{ backgroundColor: '#FAFAF8' }}>
        <div 
          className="px-4 py-4 flex items-center justify-between"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <button onClick={() => setView('timeline')}>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <h1 className="text-xl font-semibold" style={{ color: '#262624' }}>
            Аналитика
          </h1>
          <div className="w-6"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Period Toggle */}
          <div className="flex gap-2">
            <button 
              className="flex-1 py-2 rounded-lg font-medium text-sm text-white"
              style={{ backgroundColor: '#5F9A63' }}
            >
              7 дней
            </button>
            <button 
              className="flex-1 py-2 rounded-lg font-medium text-sm"
              style={{ backgroundColor: '#F4F4F1', color: '#737370' }}
            >
              30 дней
            </button>
          </div>

          {/* Mood Line Chart */}
          <div 
            className="rounded-xl p-5 space-y-4"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              Настроение
            </h3>
            <div className="h-48 flex items-end gap-2">
              {[
                { day: 'Пн', mood: 6 },
                { day: 'Вт', mood: 5 },
                { day: 'Ср', mood: 4 },
                { day: 'Чт', mood: 7 },
                { day: 'Пт', mood: 6 },
                { day: 'Сб', mood: 8 },
                { day: 'Вс', mood: 7 }
              ].map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full rounded-t-lg transition-all"
                    style={{ 
                      height: `${(data.mood / 10) * 100}%`,
                      backgroundColor: data.mood > 7 ? '#5F9A63' : data.mood > 4 ? '#F4B942' : '#DE5438',
                      minHeight: '20px'
                    }}
                  ></div>
                  <span className="text-xs" style={{ color: '#737370' }}>
                    {data.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequent Emotions */}
          <div 
            className="rounded-xl p-5 space-y-4"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              Частые эмоции
            </h3>
            <div className="space-y-3">
              {[
                { emoji: '😟', label: 'Тревога', percent: 40, color: '#F4B942' },
                { emoji: '😰', label: 'Стресс', percent: 30, color: '#DE5438' },
                { emoji: '😌', label: 'Спокойствие', percent: 20, color: '#5289AB' },
                { emoji: '😊', label: 'Радость', percent: 10, color: '#5F9A63' }
              ].map((emotion, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{emotion.emoji}</span>
                      <span className="text-sm" style={{ color: '#262624' }}>
                        {emotion.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: emotion.color }}>
                      {emotion.percent}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#F4F4F1' }}>
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${emotion.percent}%`,
                        backgroundColor: emotion.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Triggers */}
          <div 
            className="rounded-xl p-5 space-y-4"
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <h3 className="font-semibold" style={{ color: '#262624' }}>
              Триггеры
            </h3>
            <div className="space-y-2">
              {[
                { emoji: '💼', label: 'Работа', percent: 60 },
                { emoji: '🌙', label: 'Вечер', percent: 45 },
                { emoji: '🧑', label: 'Один', percent: 35 }
              ].map((trigger, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{trigger.emoji}</span>
                    <span className="text-sm" style={{ color: '#262624' }}>
                      {trigger.label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#5F9A63' }}>
                    {trigger.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div 
            className="rounded-xl p-5 space-y-3"
            style={{ backgroundColor: '#F3F0F8' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">💡</span>
              <span className="text-sm font-semibold" style={{ color: '#262624' }}>
                ИИ-инсайт
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#737370' }}>
              Вы чаще отмечаете тревогу по вечерам, особенно связанную с работой. Попробуйте вечернюю медитацию перед сном.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
