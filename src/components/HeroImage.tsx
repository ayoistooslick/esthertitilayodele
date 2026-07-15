import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface HeroImageProps {
  alt?: string;
  className?: string;
}

/**
 * Floating hero image shown at the top of each page.
 * Switches between the dark/light screenshot automatically.
 * Replace hero-dark.png / hero-light.png with an actual photo of yourself.
 */
export function HeroImage({ alt = 'Portfolio preview', className = '' }: HeroImageProps) {
  const { isDark } = useTheme();
  const src = isDark ? '/hero-dark.png' : '/hero-light.png';

  return (
    <motion.div
      key={src}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative overflow-hidden rounded-2xl shadow-2xl hero-float ${className}`}
    >
      {/* subtle orange glow underneath */}
      <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-2xl -z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
      {/* bottom fade so it blends with page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  );
}
