import { Leaf } from 'lucide-react';
import { Button } from '../ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div 
      className="flex flex-col items-center justify-between h-full px-6 py-12"
      style={{ 
        background: 'linear-gradient(to bottom, #FAFAF8, #F0F6F0)',
        paddingBottom: '120px'
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        {/* Logo */}
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#5F9A63' }}
        >
          <Leaf className="w-12 h-12 text-white" />
        </div>

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold" style={{ color: '#262624' }}>
            Эмоциональный баланс
          </h1>
          <p className="text-lg" style={{ color: '#737370' }}>
            Твоя поддержка 24/7.<br />
            Безопасно. Конфиденциально.
          </p>
        </div>

        {/* Page Dots */}
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="rounded-full transition-all"
              style={{
                width: dot === 0 ? '24px' : '8px',
                height: '8px',
                backgroundColor: dot === 0 ? '#5F9A63' : '#E8E8E3'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full space-y-4">
        <Button
          onClick={onStart}
          className="w-full h-12 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#5F9A63' }}
        >
          Начать
        </Button>
        
        <button className="text-sm underline" style={{ color: '#737370' }}>
          Условия использования
        </button>
      </div>
    </div>
  );
}