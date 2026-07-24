import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const education = [
  {
    degree:  'MSc Bioinformatics',
    school:  'Pondicherry University',
    period:  'Jul 2024 – May 2026',
    grade:   'Grade 9.0 / 10',
    details: [
      'Thesis: "Machine Learning-Based QSAR Modeling and Molecular Docking of Natural Compounds as Falcipain-2 Inhibitors for Antimalarial Drug Discovery"',
      'Relevant Coursework: Data Mining & ML, DBMS, Python Programming, R & Big Data Analytics, Statistics',
    ],
    color: '#6366F1',
  },
  {
    degree:  'BSc Biotechnology',
    school:  'Guru Ghasidas Vishwavidyalaya',
    period:  'Jun 2021 – May 2024',
    grade:   'Grade 8.25 / 10',
    details: [
      'Thesis: "Targeting Neoantigens in Cancer Immunotherapy: Enhancing the Efficacy of Immune Checkpoint Inhibitors"',
    ],
    color: '#22D3EE',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="card flex gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: edu.color + '18', border: `1px solid ${edu.color}40` }}
              >
                <GraduationCap size={22} className="text-textPrimary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-textPrimary">{edu.degree}</h3>
                    <p className="font-body text-textSecondary text-sm">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-textMuted block">{edu.period}</span>
                    <span
                      className="font-mono text-xs font-semibold mt-1 inline-block"
                      style={{ color: edu.color }}
                    >
                      {edu.grade}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1 mt-2">
                  {edu.details.map((d, i) => (
                    <li key={i} className="flex gap-2 text-textMuted text-sm font-body">
                      <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
