import { motion } from 'framer-motion';
import { BarChart3, LineChart, Cog } from 'lucide-react';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const skillCategories = [
  {
    title: 'Analytics & Data',
    icon: BarChart3,
    skills: [
      { name: 'Python (Pandas, NumPy)',       level: 80 },
      { name: 'SQL / Microsoft SQL Server',   level: 85 },
      { name: 'Data Cleaning & Analysis',     level: 80 },
      { name: 'Statistical Analysis',         level: 80 },
    ],
  },
  {
    title: 'Visualisation & BI',
    icon: LineChart,
    skills: [
      { name: 'Power BI & DAX',      level: 95 },
      { name: 'Microsoft Fabric',    level: 75 },
      { name: 'Matplotlib / Seaborn', level: 85 },
    ],
  },
  {
    title: 'Automation & Cloud',
    icon: Cog,
    skills: [
      { name: 'n8n (workflow automation)',            level: 90 },
      { name: 'Azure Fundamentals / Azure IoT',       level: 80 },
      { name: 'Power Platform (Power Apps/Automate)', level: 95 },
      { name: 'Azure Data Lake / Data Factory',       level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">02 / Skills</p>
          <h2 className="section-title-xl">
            My Skills.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="card space-y-5"
            >
              <div className="flex items-center gap-3">
                <Icon size={22} strokeWidth={1.9} className="text-textPrimary flex-shrink-0" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-textPrimary">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-textSecondary">{skill.name}</span>
                      <span className="font-mono text-xs text-textMuted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-textPrimary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.06 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
