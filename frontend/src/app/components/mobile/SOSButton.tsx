import { Heart } from 'lucide-react';

interface SOSButtonProps {
  onClick: () => void;
}

export default function SOSButton({ onClick }: SOSButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 bottom-24 w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-pulse"
      style={{ 
        backgroundColor: '#DE5438',
        zIndex: 100
      }}
    >
      <Heart className="w-7 h-7 text-white fill-current" />
    </button>
  );
}
