import { Leaf, Shield, Clock, MapPin, Lock, MessageCircle, BookOpen, Menu, Phone, Heart, Brain, CheckCircle2, Zap, Target, Users, TrendingUp, Award, Star, Mic, BarChart3, Watch, Sparkles, Calendar, Video } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onStartApp: () => void;
}

export default function LandingPage({ onStartApp }: LandingPageProps) {
  return (
    <div className="w-full">
      {/* Hero Section - Промпт #01 */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom, #FAFAF8, #F0F6F0)' }}>
        {/* Декоративные элементы */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 Q25 20 30 25 Q35 20 30 15 M30 35 Q25 40 30 45 Q35 40 30 35' fill='%235F9A63'/%3E%3C/svg%3E")`
        }}></div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-[1440px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5F9A63' }}>
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl" style={{ color: '#262624' }}>Emotional Balance</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-base" style={{ color: '#737370' }}>Возможности</a>
            <a href="#how-it-works" className="text-base" style={{ color: '#737370' }}>Как это работает</a>
            <a href="#pricing" className="text-base" style={{ color: '#737370' }}>Тарифы</a>
            <a href="#b2b" className="text-base" style={{ color: '#737370' }}>Для бизнеса</a>
            <a href="#testimonials" className="text-base" style={{ color: '#737370' }}>Отзывы</a>
          </div>

          <Button 
            onClick={onStartApp}
            className="text-white rounded-lg px-6 h-11"
            style={{ backgroundColor: '#5F9A63' }}
          >
            Начать бесплатно
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold" style={{ color: '#262624' }}>
                  Эмоциональный баланс
                </h1>
                <p className="text-xl lg:text-2xl" style={{ color: '#737370' }}>
                  ИИ-платформа психологической поддержки с методами КПТ. Доступна 24/7 через Telegram. Безопасно. Конфиденциально. Эффективно.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onStartApp}
                  size="lg"
                  className="text-white rounded-lg px-8 h-14 text-lg"
                  style={{ backgroundColor: '#5F9A63' }}
                >
                  Начать бесплатно
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-lg px-8 h-14 text-lg"
                  style={{ borderColor: '#5F9A63', color: '#5F9A63' }}
                >
                  Узнать больше
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" style={{ color: '#5F9A63' }} />
                  <span className="text-sm" style={{ color: '#737370' }}>Данные в РФ (ФЗ-152)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" style={{ color: '#5F9A63' }} />
                  <span className="text-sm" style={{ color: '#737370' }}>Методы КПТ</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" style={{ color: '#5F9A63' }} />
                  <span className="text-sm" style={{ color: '#737370' }}>Через Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{ color: '#5F9A63' }} />
                  <span className="text-sm" style={{ color: '#737370' }}>24/7</span>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-[300px] h-[600px] rounded-[40px] overflow-hidden shadow-2xl" style={{ backgroundColor: '#262624' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 rounded-b-3xl" style={{ backgroundColor: '#000000' }}></div>
                <div className="absolute inset-2 rounded-[32px] overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5F9A63' }}>
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">AI-помощник</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="rounded-2xl p-3 max-w-[85%]" style={{ backgroundColor: '#F4F4F1' }}>
                        <p className="text-sm">Привет! 👋 Я твой AI-помощник. Расскажи, что тебя беспокоит?</p>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="rounded-2xl p-3 max-w-[85%] text-white" style={{ backgroundColor: '#5F9A63' }}>
                          <p className="text-sm">Меня что-то тревожит...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-20 -left-10 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#5F9A63', filter: 'blur(20px)' }}></div>
              <div className="absolute bottom-20 -right-10 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#8477B4', filter: 'blur(30px)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Промпт #02 */}
      <section id="problem" className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Почему это важно
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              15 миллионов россиян страдают от тревожности  депрессии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                emoji: '💰',
                title: 'Финансовый барьер',
                description: 'Сессия у психолога: 3 000–7 000 ₽. Недоступно для 70%+ населения'
              },
              {
                emoji: '⏰',
                title: 'Временной барьер',
                description: 'Запись за дни и недели. Помощь недоступна в момент кризиса'
              },
              {
                emoji: '📍',
                title: 'Географический барьер',
                description: '5 психологов на 100 000 человек в регионах'
              },
              {
                emoji: '🤐',
                title: 'Стигматизация',
                description: '60% не обращаются из-за страха осуждения'
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 transition-transform hover:scale-105"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="text-4xl mb-4">{problem.emoji}</div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#262624' }}>
                  {problem.title}
                </h3>
                <p className="text-sm" style={{ color: '#737370' }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(to right, #F0F6F0, #D9EAD9)' }}>
            <p className="text-2xl font-semibold" style={{ color: '#262624' }}>
              Emotional Balance решает все 4 барьера одновременно
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Промпт #03 */}
      <section id="features" className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Всё для вашего эмоционального здоровья
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              Полная экосистема психологической поддержки в одном приложении
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                color: '#5F9A63',
                title: 'ИИ-психолог 24/7',
                description: 'Текстовый и голосовой чат с ИИ на базе российских LLM. КПТ-протоколы, streaming-ответы, сохранение контекста между сессиями. 5 бесплатных сессий в день.'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                color: '#5289AB',
                title: 'Голосовые сессии',
                description: 'Говорите голосом — ИИ слушает и отвечает. Собственная технология распознавания и синтеза речи. Выбор голоса: мужской/женский.'
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                color: '#5F9A63',
                title: 'Дневник эмоций',
                description: 'Ежедневный трекинг эмоций с палитрой из 8 эмоций. ИИ-анализ паттернов, триггеров и корреляций. Визуализация графиков за неделю/месяц.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                color: '#8477B4',
                title: 'КПТ-упражнения',
                description: 'Библиотека адаптивных упражнений: когнитивное реструктурирование, поведенческая активация, экспозиция. ИИ подбирает под ваше состояние.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                color: '#DE5438',
                title: 'SOS-протоколы',
                description: 'Мгновенная помощь при панике, тревоге, бессоннице. Дыхательные техники 4-7-8, grounding 5-4-3-2-1, прогрессивная мышечная релаксация. Бесплатно на всех тарифах.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                color: '#DE5438',
                title: 'Детектор кризисных состояний',
                description: 'Автоматическое распознавание суицидальных намерений. Мгновенная связь с горячей линией 8-800-2000-122. Нельзя отключить. Работает всегда.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.color + '15', color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-3 text-xl" style={{ color: '#262624' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#737370' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section - Промпт #04 */}
      <section className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              И это ещё не всё
            </h2>
          </div>

          <div className="space-y-24">
            {/* Meditation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#8477B4' }}>
                  <div className="p-8 text-white space-y-4">
                    <div className="text-6xl">🧘</div>
                    <h3 className="text-2xl font-bold">Медитация</h3>
                    <div className="w-48 h-48 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-4 border-white/50 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#8477B4' }}>
                  Premium
                </div>
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Медитации и дыхательные практики
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  Каталог медитаций по категориям: расслабление, сон, тревога, фокус, body-scan. Дыхательные техники с визуальной анимацией. Выбор длительности: 3, 5, 10, 15, 20 минут. Фоновые звуки: природа, дождь, океан.
                </p>
              </div>
            </div>

            {/* Marketplace */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Маркетплейс психологов
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  Каталог верифицированных психологов с фильтрами по специализации, цене, рейтингу. Онлайн-запись, видео-консультации, оплата через YooKassa. Рейтинг и отзывы. Скидка 5-10% для подписчиков.
                </p>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#F0F6F0' }}></div>
                    <div className="flex-1">
                      <p className="font-semibold">Елена Иванова</p>
                      <p className="text-sm" style={{ color: '#737370' }}>КПТ, Тревожность</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold" style={{ color: '#5F9A63' }}>⭐ 4.9</p>
                      <p className="text-xs" style={{ color: '#737370' }}>128 отзывов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wearables */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#5289AB' }}>
                  <div className="p-8 text-white space-y-6">
                    <div className="text-6xl">⌚</div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>❤️ Пульс</span>
                        <span className="text-2xl font-bold">72 уд/мин</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>📊 Стресс</span>
                        <span className="text-2xl font-bold">Низкий</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>😴 Сон</span>
                        <span className="text-2xl font-bold">7ч 12м</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#8477B4' }}>
                  Premium
                </div>
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Интеграция с носимыми устройствами
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  Подключите Apple Watch или Mi Band. Мониторинг пульса, вариабельности сердечного ритма (HRV), качества сна. Push-уведомление при повышенном стрессе с предложением дыхательной практики.
                </p>
              </div>
            </div>

            {/* Gamification */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Терапевтическая геймификация
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  Дерево эмоционального здоровья растёт вместе с вами. Листья за дневник, цветы за медитации, рост ствола за чат-сессии. Достижения: "7 дней осознанности", "Мастер дыхания". Нет наказания за пропуск.
                </p>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #D9EAD9, #F0F6F0)' }}>
                <div className="text-center space-y-4">
                  <div className="text-8xl">🌳</div>
                  <p className="text-xl font-bold" style={{ color: '#5F9A63' }}>Уровень 5: Цветущий сад</p>
                </div>
              </div>
            </div>

            {/* Mini Courses */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🧠</div>
                      <div className="flex-1">
                        <p className="font-semibold">Основы КПТ</p>
                        <p className="text-sm" style={{ color: '#737370' }}>7 уроков • 35 минут</p>
                      </div>
                    </div>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#F0F6F0' }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: '#5F9A63', width: '60%' }}></div>
                    </div>
                    <p className="text-sm" style={{ color: '#737370' }}>Урок 4 из 7</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Мини-курсы самообразования
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  Короткие обучающие модули по 5-10 минут: основы КПТ, управление тревогой, эмоциональный интеллект, здоровый сон. Формат: текст + иллюстрации + тест + практика.
                </p>
              </div>
            </div>

            {/* Therapeutic Bridge */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: '#262624' }}>
                  Терапевтический мост ИИ↔Психолог
                </h3>
                <p className="text-lg" style={{ color: '#737370' }}>
                  ИИ генерирует структурированное саммари ваших сессий для живого психолога: темы, эмоциональные тренды, прогресс по упражнениям. Психолог получает перед консультацией. Вы контролируете что отправить.
                </p>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#F3F0F8' }}>
                <div className="p-6 space-y-4">
                  <h4 className="font-semibold" style={{ color: '#262624' }}>ИИ-саммари за 2 недели</h4>
                  <div className="space-y-2 text-sm">
                    <p style={{ color: '#737370' }}>📊 Темы: Тревога перед сном (5 раз)</p>
                    <p style={{ color: '#737370' }}>📈 Средняя тревога: 6.2/10</p>
                    <p style={{ color: '#737370' }}>✅ Завершено 4 упражнения</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Промпт #05 */}
      <section id="how-it-works" className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Как начать
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              3 простых шага до вашего цифрового психолога
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5" style={{ backgroundColor: '#B5D6B5', opacity: 0.3 }}></div>
            
            {[
              {
                number: '1',
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'Откройте бот в Telegram',
                description: 'Найдите @EmotionalBalanceBot или перейдите по ссылке. Нажмите "Начать". Авторизация — одна кнопка.',
                time: '30 секунд'
              },
              {
                number: '2',
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: 'Пройдите мини-опросник',
                description: '4 коротких вопроса: настроение, проблемы, цели, триггеры. ИИ создаст персональный профиль и подберёт рекомендации.',
                time: '2 минуты'
              },
              {
                number: '3',
                icon: <Zap className="w-8 h-8" />,
                title: 'Начните чат с ИИ-психологом',
                description: 'Расскажите что вас беспокоит. ИИ применит методы КПТ, предложит упражнения и поддержит в любое время дня и ночи.',
                time: 'Мгновенно'
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white"
                  style={{ backgroundColor: '#5F9A63' }}
                >
                  {step.number}
                </div>
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#F0F6F0', color: '#5F9A63' }}
                >
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-2 text-xl" style={{ color: '#262624' }}>
                  {step.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#737370' }}>
                  {step.description}
                </p>
                <span 
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#F0F6F0', color: '#5F9A63' }}
                >
                  {step.time}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 text-center space-y-6" style={{ background: 'linear-gradient(to right, #F0F6F0, #D9EAD9)' }}>
            <p className="text-2xl font-semibold" style={{ color: '#262624' }}>
              Первые 5 сессий бесплатно. Без карты. Без обязательств.
            </p>
            <Button 
              onClick={onStartApp}
              size="lg"
              className="text-white rounded-lg px-12 h-14 text-lg"
              style={{ backgroundColor: '#5F9A63' }}
            >
              Начать бесплатно
            </Button>
            <p className="text-sm" style={{ color: '#737370' }}>
              Уже 50 000+ пользователей доверяют нам
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section - Промпт #06 */}
      <section id="pricing" className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Тарифные планы
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              Выберите подходящий план. SOS-помощь бесплатна на всех тарифах. ❤️
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Free */}
            <div 
              className="rounded-2xl p-8 space-y-6"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E3' }}
            >
              <div>
                <div className="inline-block px-4 py-2 rounded-lg mb-4" style={{ backgroundColor: '#F4F4F1' }}>
                  <span className="font-semibold" style={{ color: '#737370' }}>Бесплатный</span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold" style={{ color: '#262624' }}>0 ₽</span>
                  <span className="text-xl" style={{ color: '#737370' }}>/месяц</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { text: 'ИИ-чат: 5 сообщений/день', included: true },
                  { text: 'Дневник эмоций: 1 запись/день', included: true },
                  { text: 'КПТ-упражнение: 1 в день', included: true },
                  { text: '1 базовая медитация', included: true },
                  { text: 'Маркетплейс: просмотр каталога', included: true },
                  { text: 'SOS-протоколы (всегда)', included: true },
                  { text: 'Детектор кризисов (всегда)', included: true },
                  { text: 'Голосовые сессии', included: false },
                  { text: 'Wearables', included: false },
                  { text: 'ИИ-аналитика дневника', included: false }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#5F9A63' }} />
                    ) : (
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-300">×</div>
                    )}
                    <span className="text-sm" style={{ color: feature.included ? '#262624' : '#A8A8A3' }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onStartApp}
                variant="outline"
                className="w-full rounded-lg h-12"
                style={{ borderColor: '#5F9A63', color: '#5F9A63' }}
              >
                Начать бесплатно
              </Button>
            </div>

            {/* Standard - Recommended */}
            <div 
              className="rounded-2xl p-8 space-y-6 relative transform scale-105 shadow-xl"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #5F9A63' }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#5F9A63' }}>
                  Популярный
                </span>
              </div>
              
              <div>
                <div className="inline-block px-4 py-2 rounded-lg mb-4 text-white" style={{ backgroundColor: '#5F9A63' }}>
                  <span className="font-semibold">Стандартный</span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold" style={{ color: '#262624' }}>990 ₽</span>
                  <span className="text-xl" style={{ color: '#737370' }}>/месяц</span>
                </div>
                <p className="text-sm" style={{ color: '#5F9A63' }}>7 дней бесплатно</p>
              </div>
              
              <div className="space-y-3">
                {[
                  'ИИ-чат: без ограничений',
                  'Голосовые сессии: 30 мин/день',
                  'Дневник эмоций: без ограничений + ИИ-анализ',
                  'КПТ-упражнения: без ограничений + программы',
                  'Базовый каталог медитаций',
                  'Маркетплейс: запись + скидка 5%',
                  'Мини-курсы',
                  'Геймификация',
                  'Реферальная программа'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#5F9A63' }} />
                    <span className="text-sm" style={{ color: '#262624' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onStartApp}
                className="w-full text-white rounded-lg h-12"
                style={{ backgroundColor: '#5F9A63' }}
              >
                Попробовать 7 дней бесплатно
              </Button>
            </div>

            {/* Premium */}
            <div 
              className="rounded-2xl p-8 space-y-6"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #8477B4' }}
            >
              <div>
                <div className="inline-block px-4 py-2 rounded-lg mb-4 text-white" style={{ backgroundColor: '#8477B4' }}>
                  <span className="font-semibold">Премиум</span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold" style={{ color: '#262624' }}>2 990 ₽</span>
                  <span className="text-xl" style={{ color: '#737370' }}>/месяц</span>
                </div>
                <p className="text-sm" style={{ color: '#8477B4' }}>7 дней бесплатно</p>
              </div>
              
              <div className="space-y-3">
                {[
                  'Всё из Стандартного',
                  'ИИ-чат: приоритет обработки',
                  'Голосовые сессии: без ограничений',
                  'Полный каталог медитаций + фоновые звуки',
                  'Расширенная аналитика',
                  'Маркетплейс: скидка 10% + приоритет',
                  'Apple Watch + Mi Band',
                  'Терапевтический мост',
                  'Эксклюзивные КПТ-упражнения'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8477B4' }} />
                    <span className="text-sm" style={{ color: '#262624' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onStartApp}
                className="w-full text-white rounded-lg h-12"
                style={{ backgroundColor: '#8477B4' }}
              >
                Попробовать 7 дней бесплатно
              </Button>
            </div>
          </div>

          <p className="text-center text-sm" style={{ color: '#737370' }}>
            Все цены включают НДС. Отмена в любой момент. Оплата через YooKassa.
          </p>

          {/* B2B Teaser */}
          <div className="mt-16 rounded-2xl p-8 text-center space-y-4" style={{ backgroundColor: '#EFF5F9' }}>
            <h3 className="text-2xl font-semibold" style={{ color: '#262624' }}>
              Для корпоративных клиентов
            </h3>
            <p style={{ color: '#737370' }}>
              Wellness-программы для команд от 10 человек. Анонимная аналитика, корпоративный тариф, управление через Telegram.
            </p>
            <Button 
              variant="outline"
              className="rounded-lg"
              style={{ borderColor: '#5289AB', color: '#5289AB' }}
            >
              Запросить демо
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section - Промпт #07 */}
      <section className="py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Почему Emotional Balance
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              Сравните с другими решениями
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full rounded-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <thead>
                <tr style={{ backgroundColor: '#F0F6F0' }}>
                  <th className="p-4 text-left font-semibold" style={{ color: '#262624' }}>Критерий</th>
                  <th className="p-4 text-center font-semibold" style={{ color: '#5F9A63', backgroundColor: '#D9EAD9' }}>Emotional Balance</th>
                  <th className="p-4 text-center font-semibold" style={{ color: '#737370' }}>Психолог</th>
                  <th className="p-4 text-center font-semibold" style={{ color: '#737370' }}>Replika/Woebot</th>
                  <th className="p-4 text-center font-semibold" style={{ color: '#737370' }}>Calm/Headspace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Доступность 24/7', eb: '✅', psych: '❌', ai: '✅', med: '✅' },
                  { label: 'На русском языке', eb: '✅', psych: '✅', ai: '❌', med: 'Частично' },
                  { label: 'ФЗ-152 (данные в РФ)', eb: '✅', psych: '✅', ai: '❌', med: '❌' },
                  { label: 'КПТ-протоколы', eb: '✅', psych: '✅', ai: 'Базовые', med: '❌' },
                  { label: 'Стоимость/мес', eb: 'от 0 ₽', psych: 'от 12 000 ₽', ai: 'от $9.99', med: 'от $14.99' },
                  { label: 'Голосовые сессии', eb: '✅', psych: '✅', ai: '❌', med: '❌' },
                  { label: 'Детектор кризисов', eb: '✅', psych: '❌', ai: '❌', med: '❌' },
                  { label: 'Wearables', eb: '✅', psych: '❌', ai: '❌', med: '❌' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #F4F4F1' }}>
                    <td className="p-4 font-medium" style={{ color: '#262624' }}>{row.label}</td>
                    <td className="p-4 text-center" style={{ backgroundColor: '#F0F6F0', color: '#5F9A63' }}>{row.eb}</td>
                    <td className="p-4 text-center" style={{ color: '#737370' }}>{row.psych}</td>
                    <td className="p-4 text-center" style={{ color: '#737370' }}>{row.ai}</td>
                    <td className="p-4 text-center" style={{ color: '#737370' }}>{row.med}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials - Промпт #09 */}
      <section id="testimonials" className="py-24" style={{ background: 'linear-gradient(to right, #FAFAF8, #F3F0F8)' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Кому подходит Emotional Balance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Аня, 28 лет, Москва',
                avatar: '👩',
                quote: 'Панические атаки часто начинаются ночью, когда помощь недоступна. С Emotional Balance я могу получить поддержку в 3 часа ночи — и это спасает.',
                tag: 'Тревожность',
                color: '#F4B942'
              },
              {
                name: 'Дмитрий, 35 лет, Екатеринбург',
                avatar: '👨',
                quote: 'После 12 часов на работе сил на психолога не остаётся. 15-минутная КПТ-сессия с ИИ в метро — это именно то, что нужно.',
                tag: 'Выгорание',
                color: '#DE5438'
              },
              {
                name: 'Марина, 40 лет, HR-директор',
                avatar: '👩‍💼',
                quote: 'Подключила команду из 50 человек. Анонимная аналитика показала что уровень стресса упал на 30% за 2 месяца. ROI очевиден.',
                tag: 'B2B Wellness',
                color: '#5289AB'
              },
              {
                name: 'Олег, 32 года, Тольятти',
                avatar: '👨‍💻',
                quote: 'В нашем городе 2 психолога и оба заняты на месяц вперёд. Emotional Balance дал мне доступ к поддержке и помог записаться к онлайн-специалисту.',
                tag: 'Регионы',
                color: '#5F9A63'
              }
            ].map((person, idx) => (
              <div 
                key={idx}
                className="rounded-xl p-6 space-y-4"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderLeft: `4px solid ${person.color}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{person.avatar}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#262624' }}>{person.name}</p>
                    <span 
                      className="inline-block px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: person.color + '20', color: person.color }}
                    >
                      {person.tag}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#737370' }}>
                  "{person.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section - Промпт #10 */}
      <section id="b2b" className="py-24" style={{ backgroundColor: '#EFF5F9' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold" style={{ color: '#262624' }}>
                Для корпоративных клиентов
              </h2>
              <p className="text-xl" style={{ color: '#737370' }}>
                Снижайте выгорание. Повышайте продуктивность.
              </p>
              
              <div className="space-y-3">
                {[
                  'Групповое управление через Telegram (от 10 сотрудников)',
                  'Анонимная агрегированная аналитика для HR',
                  'Метрики: % активных, средний стресс, количество сессий',
                  'Ежемесячный PDF-отчёт',
                  'Premium-доступ для каждого сотрудника',
                  'Оплата по invoice, корпоративный тариф',
                  'Настраиваемые лимиты использования',
                  'Брендирование (логотип компании)'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#5289AB' }} />
                    <span style={{ color: '#262624' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="text-white rounded-lg" style={{ backgroundColor: '#5289AB' }}>
                  Запросить демо
                </Button>
                <Button variant="outline" className="rounded-lg" style={{ borderColor: '#5289AB', color: '#5289AB' }}>
                  Скачать презентацию
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className="text-3xl font-bold" style={{ color: '#5F9A63' }}>-30%</p>
                  <p className="text-sm" style={{ color: '#737370' }}>уровень стресса</p>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className="text-3xl font-bold" style={{ color: '#5F9A63' }}>+25%</p>
                  <p className="text-sm" style={{ color: '#737370' }}>вовлечённость</p>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                  <p className="text-3xl font-bold" style={{ color: '#5F9A63' }}>3x</p>
                  <p className="text-sm" style={{ color: '#737370' }}>ROI</p>
                </div>
              </div>

              <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <h4 className="font-semibold" style={{ color: '#262624' }}>HR Дашборд</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: '#737370' }}>32 участника</span>
                    <span className="font-semibold" style={{ color: '#5289AB' }}>Активность: 78%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#F0F6F0' }}>
                    <div className="h-full rounded-full" style={{ backgroundColor: '#5289AB', width: '78%' }}></div>
                  </div>
                  <p className="text-sm" style={{ color: '#737370' }}>Средний стресс: 4.2/10 📉 -12% за месяц</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap - Промпт #11 */}
      <section className="py-24" style={{ background: 'linear-gradient(to bottom, #FAFAF8, #F3F0F8)' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Скоро в Emotional Balance
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              Мы постоянно развиваемся
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                version: 'v1.0',
                status: 'Запуск',
                color: '#5F9A63',
                items: [
                  '✅ ИИ-чат 24/7 + голосовые сессии',
                  '✅ Дневник эмоций + ИИ-аналитика',
                  '✅ КПТ-упражнения + SOS-протоколы',
                  '✅ Маркетплейс психологов',
                  '✅ Медитации и дыхание',
                  '✅ B2B wellness',
                  '✅ Apple Watch + Mi Band'
                ]
              },
              {
                version: 'v1.5',
                status: 'Расширение',
                color: '#5289AB',
                items: [
                  '🔮 ACT и DBT терапевтические подходы',
                  '🔮 Предиктивная аналитика кризисов',
                  '🔮 Voice sentiment analysis',
                  '🔮 Peer-support сообщество'
                ]
              },
              {
                version: 'v2.0',
                status: 'Платформа',
                color: '#8477B4',
                items: [
                  '🚀 Нативные iOS и Android приложения',
                  '🚀 Веб-версия вне Telegram',
                  '🚀 Групповая терапия',
                  '🚀 Видео-аватар ИИ',
                  '🚀 Работа с несовершеннолетними'
                ]
              },
              {
                version: 'v3.0',
                status: 'Экспансия',
                color: '#DE5438',
                items: [
                  '🌍 Международная экспансия',
                  '🌍 Интеграция с ЭМК',
                  '🌍 Дополнительные языки'
                ]
              }
            ].map((phase, idx) => (
              <div 
                key={idx}
                className="rounded-xl p-6 space-y-4"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${phase.color}`
                }}
              >
                <div>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.version}
                  </span>
                  <h3 className="font-bold text-lg" style={{ color: '#262624' }}>
                    {phase.status}
                  </h3>
                </div>
                <div className="space-y-2 text-sm" style={{ color: '#737370' }}>
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section - Промпт #08 */}
      <section className="py-24" style={{ background: 'linear-gradient(to bottom, #FAFAF8, #EFF5F9)' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#262624' }}>
              Безо��асность и конфиденциальность
            </h2>
            <p className="text-xl" style={{ color: '#737370' }}>
              Ваши данные под надёжной защитой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                emoji: '🔒',
                title: 'ФЗ-152 Compliance',
                description: 'Все данные хранятся исключительно на серверах в России. Полное соответствие Федеральному закону о персональных данных.'
              },
              {
                emoji: '🛡️',
                title: 'Шифрование',
                description: 'AES-256 шифрование данных at rest. TLS 1.3 для передачи данных. Ваши записи и диалоги защищены.'
              },
              {
                emoji: '🤖',
                title: 'Российские LLM',
                description: 'Используем GigaChat и YandexGPT — российские языковые модели. Данные не покидают территорию РФ.'
              },
              {
                emoji: '⚠️',
                title: 'Этичный ИИ',
                description: 'ИИ не заменяет врача. Обязательный disclaimer. Детектор кризисов нельзя отключить. Безопасность превыше всего.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: '#F0F6F0' }}>
                  {item.emoji}
                </div>
                <h3 className="font-semibold mb-2 text-lg" style={{ color: '#262624' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: '#737370' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-6 flex gap-4" style={{ backgroundColor: '#F4F4F1' }}>
            <div className="text-2xl">ℹ️</div>
            <p className="text-sm" style={{ color: '#737370' }}>
              Emotional Balance — это wellness-платформа, а не медицинское устройство. ИИ-помощник не ставит диагнозы и не назначает лечение. При серьёзных проблемах обратитесь к квалифицированному специалисту.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Промпт #12 */}
      <footer style={{ backgroundColor: '#262624' }}>
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5F9A63' }}>
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-xl text-white">Emotional Balance</span>
              </div>
              <p className="text-sm" style={{ color: '#A8A8A3' }}>Эмоциональный баланс</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Продукт</h4>
              <div className="space-y-2 text-sm" style={{ color: '#A8A8A3' }}>
                <div>ИИ-чат</div>
                <div>Дневник</div>
                <div>Упражнения</div>
                <div>Медитации</div>
                <div>SOS</div>
                <div>Маркетплейс</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Для бизнеса</h4>
              <div className="space-y-2 text-sm" style={{ color: '#A8A8A3' }}>
                <div>B2B программы</div>
                <div>Демо</div>
                <div>Кейсы</div>
                <div>Партнёрство</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Поддержка</h4>
              <div className="space-y-2 text-sm" style={{ color: '#A8A8A3' }}>
                <div>Помощь</div>
                <div>FAQ</div>
                <div>Контакты</div>
                <div>Горячая линия 8-800-2000-122</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#3A3A38' }}>
            <p className="text-sm" style={{ color: '#A8A8A3' }}>
              © 2026 Emotional Balance. Не является медицинским устройством.
            </p>
            <p className="text-sm" style={{ color: '#A8A8A3' }}>
              Данные хранятся в РФ 🇷🇺
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}