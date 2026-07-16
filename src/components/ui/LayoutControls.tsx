import { motion } from 'framer-motion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen relative z-10 pt-24 pb-12"
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ 
  children, 
  className,
  onClick
}: { 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 block">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-inherit" />
    </motion.button>
  );
}
