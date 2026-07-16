import { motion } from 'framer-motion';

interface SpinningProfileProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SpinningProfile({ src, alt = 'Profile', size = 'md' }: SpinningProfileProps) {
  const sizeMap = {
    sm: 'w-44 h-44',
    md: 'w-56 h-56 md:w-64 md:h-64',
    lg: 'w-64 h-64 md:w-80 md:h-80',
  };

  return (
    <div className={`relative ${sizeMap[size]} mx-auto`}>
      {/* Soft glow behind */}
      <div className="absolute inset-4 rounded-full bg-primary/25 blur-2xl -z-10" />

      {/* Outer slow-spinning dashed ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        style={{
          border: '2px dashed',
          borderColor: 'hsl(var(--primary) / 0.45)',
          borderRadius: '50%',
        }}
      />

      {/* Middle counter-spin solid ring */}
      <motion.div
        className="absolute inset-[8%] rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        style={{
          border: '1.5px solid',
          borderColor: 'hsl(var(--primary) / 0.6)',
          borderRadius: '50%',
        }}
      />

      {/* Inner ring – static accent */}
      <div
        className="absolute inset-[13%] rounded-full"
        style={{
          border: '2px solid',
          borderColor: 'hsl(var(--primary) / 0.9)',
          borderRadius: '50%',
        }}
      />

      {/* Profile image */}
      <div className="absolute inset-[16%] rounded-full overflow-hidden z-10 shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
