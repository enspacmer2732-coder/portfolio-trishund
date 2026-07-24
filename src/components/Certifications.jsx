import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

const certifications = [
  {
    title:   'Microsoft Power BI Data Analyst Professional Certificate',
    issuer:  'Coursera',
    date:    'Jul 2026',
    badge:   '#F59E0B',
    credUrl: '#',
    id:      'MSFT-POWERBI',
  },
  {
    title:   'Microsoft Data Architecture for Modern Data Stacks Professional Certificate',
    issuer:  'Coursera',
    date:    'Aug 2026',
    badge:   '#0078D4',
    credUrl: '#',
    id:      'MSFT-DATA-ARCH',
  },
  {
    title:   'Microsoft Azure Fundamentals (AZ-900) Exam Prep',
    issuer:  'Coursera',
    date:    'Aug 2026',
    badge:   '#0089D6',
    credUrl: '#',
    id:      'AZ-900',
  },
  {
    title:   'Microsoft Power Platform Fundamentals (PL-900) Exam Prep',
    issuer:  'Coursera',
    date:    'Jun 2026',
    badge:   '#742774',
    credUrl: '#',
    id:      'PL-900',
  },
  {
    title:   'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
    issuer:  'Udemy',
    date:    'Mar 2026',
    badge:   '#EC5252',
    credUrl: '#',
    id:      'UDEMY-DS-ML',
  },
  {
    title:   'Complete Data Analyst Bootcamp: From Basics to Advanced',
    issuer:  'Udemy',
    date:    'May 2026',
    badge:   '#A435F0',
    credUrl: '#',
    id:      'UDEMY-DA',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">07 / Certifications</p>
          <h2 className="section-title-xl">
            Proven &<br />Verified.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map(({ title, issuer, date, badge, credUrl, id }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{ scale: 1.025, borderColor: badge }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="card group flex flex-col justify-between"
              style={{ transition: 'border-color 0.2s, transform 0.2s' }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: badge, backgroundColor: badge + '18', border: `1px solid ${badge}40` }}
                  >
                    {id}
                  </span>
                  {/* Verify credential link — placeholder until real URLs provided */}
                  <a
                    href={credUrl}
                    aria-label={`Verify ${title} credential`}
                    onClick={(e) => credUrl === '#' && e.preventDefault()}
                    className="text-textMuted group-hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <h3 className="font-display text-sm font-semibold text-textPrimary leading-snug mb-1">
                  {title}
                </h3>
                <p className="font-body text-xs text-textSecondary">{issuer}</p>
              </div>
              <p className="font-mono text-xs text-textMuted mt-3">{date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
