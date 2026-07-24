import { motion } from 'framer-motion';
import { Database, Cloud } from 'lucide-react';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// `value` cards show a big number; `icon` cards show an icon in the number's place.
const stats = [
  { value: '15+',  label: 'Real-World Projects' },
  { value: '7+',   label: 'Analytics & BI Tools' },
  { icon: Database, label: 'Microsoft Data Stack' },
  { icon: Cloud,    label: 'Azure Cloud' },
  { value: '8+',   label: 'Data Technologies' },
  { value: '1+',   label: 'Years Experience' },
];

export default function About() {
  return (
    <section id="about" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">

        {/* Section label */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">01 / Biography</p>
          <h2 className="section-title-xl">
            How I Work
          </h2>
        </motion.div>

        {/* Single full-width column */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-5"
        >
          <p
            className="font-body text-textSecondary leading-relaxed text-base"
            style={{ textAlign: 'justify' }}
          >
            I believe good analytics starts long before a dashboard is built.
          </p>
          <p
            className="font-body text-textSecondary leading-relaxed text-base"
            style={{ textAlign: 'justify' }}
          >
            Every project begins with understanding the business problem. From there, I gather and prepare data,
            explore patterns, validate assumptions, analyze trends, and communicate the findings through dashboards,
            reports, and automation. My expertise spans the Microsoft Data Analytics ecosystem, including Power BI,
            SQL, Python, Microsoft Fabric, Azure, and the Power Platform, allowing me to deliver complete,
            end-to-end analytics solutions.
          </p>

          {/* Stat cards — 2 per row (mobile) → 3 (tablet) → 6 across (desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="border border-border rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center gap-1.5 hover:border-textMuted transition-colors duration-200"
              >
                <div className="h-9 flex items-center justify-center">
                  {Icon ? (
                    <Icon size={26} strokeWidth={1.8} className="text-textPrimary" />
                  ) : (
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-textPrimary">{value}</span>
                  )}
                </div>
                <p className="text-textMuted text-[11px] sm:text-xs font-mono leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
