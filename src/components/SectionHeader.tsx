import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title.split(' ').map((word, i, arr) => (
          <span key={i}>
            {i === arr.length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              word + ' '
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;

