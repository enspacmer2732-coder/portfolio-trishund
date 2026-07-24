import { motion } from 'framer-motion';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const experiences = [
  {
    role:     'Freelance QA & Cloud Systems Developer',
    company:  'Clarion (Cosmetics Division, Nikita Container Group)',
    location: 'Chennai (Remote)',
    period:   'Jun 2026 – Oct 2026',
    type:     'FREELANCE',
    tech:     ['CLOUD MIGRATION', 'QA AUTOMATION', 'COMPLIANCE'],
    bullets: [
      'Building a cloud system to cut QA turnaround time by 50%.',
      'Replacing paper records to keep the plant audit-ready 24/7.',
      'Designed for rollout across Clarion branches and the group.',
    ],
  },
  {
    role:     'Business Development and Analytics Executive',
    company:  'TM Krishiyug Innovatives Pvt. Ltd.',
    location: 'Bilaspur (C.G) · On-site',
    period:   'Jun 2026 – Present',
    type:     'FULL-TIME',
    tech:     ['POWER BI', 'PYTHON', 'N8N', 'EXCEL', 'MARKET RESEARCH'],
    bullets: [
      'Built B2B lead & sales databases with Power BI pipeline dashboards.',
      'Led export product & market analysis for UAE, Oman & EU entry.',
      'Automated outreach (n8n, Python, AI) across a 6,000+ B2B network.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">

        {/* Section label */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">02 / Career Path</p>
          <h2 className="section-title-xl">
            Experience.
          </h2>
        </motion.div>

        {/* Experience rows */}
        <div className="space-y-0">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group"
            >
              <div className="border-t border-border py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-0 hover:bg-surface transition-colors duration-200 px-2 -mx-2 rounded-xl cursor-default">
                {/* Period */}
                <div className="w-36 flex-shrink-0">
                  <span className="font-mono text-textMuted text-sm">{exp.period}</span>
                  <p className="font-mono text-[11px] text-textMuted mt-0.5 opacity-70">{exp.location}</p>
                </div>

                {/* Role + Company */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-textPrimary leading-tight">
                    {exp.role}
                  </h3>
                  <p className="font-body text-textSecondary text-sm mt-1">{exp.company}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-textSecondary text-sm font-body leading-relaxed">
                        <span className="text-textMuted mt-1 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags + type */}
                <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2 md:pl-8">
                  <span className="font-mono text-xs text-textMuted px-2 py-0.5 border border-border rounded-full">
                    {exp.type}
                  </span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {exp.tech.map(t => (
                      <span key={t} className="font-mono text-[10px] text-textMuted tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
