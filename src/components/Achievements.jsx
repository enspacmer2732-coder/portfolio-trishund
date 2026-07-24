import { motion } from 'framer-motion';
import { Croissant, Briefcase, UtensilsCrossed, ClipboardList } from 'lucide-react';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const initiatives = [
  {
    color: '#F59E0B',
    icon: Croissant,
    title: 'Department Bakery Initiative',
    role:  'Operations & Entrepreneurship Lead',
    desc:  'Ran a ₹2L university-funded student bakery — ops, inventory & training.',
  },
  {
    color: '#6366F1',
    icon: Briefcase,
    title: 'Placement Committee',
    role:  'Placement Committee Coordinator',
    desc:  'Set up the PG placement committee — ran drives & industry outreach.',
  },
  {
    color: '#22D3EE',
    icon: UtensilsCrossed,
    title: 'Family Business',
    role:  'Co-Founder & Operations Manager',
    desc:  'Co-ran a home tiffin service 2+ years — pricing, marketing & fulfillment.',
  },
  {
    color: '#10B981',
    icon: ClipboardList,
    title: 'Class Representative',
    role:  'Class Representative, MSc Bioinformatics',
    desc:  'Liaised between students & faculty on academics and feedback.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Leadership &amp; Initiatives
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {initiatives.map(({ icon: Icon, color, title, role, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: color }}
              transition={{ duration: 0.2 }}
              className="card flex gap-4"
              style={{ transition: 'border-color 0.2s, transform 0.2s' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: color + '18', border: `1px solid ${color}40` }}
              >
                <Icon size={20} strokeWidth={1.9} className="text-textPrimary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-textPrimary">{title}</h3>
                <p className="font-mono text-xs text-textMuted mb-2">{role}</p>
                <p className="font-body text-sm text-textSecondary leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
