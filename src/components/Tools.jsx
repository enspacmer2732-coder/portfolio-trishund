import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// All tools from the spec — using devicons/CDN logos uniformly (colored brand logos)
const tools = [
  {
    name: 'Python',
    category: 'Language',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'SQL',
    category: 'Language',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Microsoft SQL Server',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  },
  {
    name: 'Power BI',
    category: 'BI Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'DAX',
    category: 'Language',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'Microsoft Fabric',
    category: 'BI Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'Pandas',
    category: 'Library',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'NumPy',
    category: 'Library',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
  {
    name: 'Matplotlib',
    category: 'Library',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
  },
  {
    name: 'Seaborn',
    category: 'Library',
    logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
  },
  {
    name: 'Scikit-learn',
    category: 'Library',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  },
  {
    name: 'Excel',
    category: 'Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
  },
  {
    name: 'Google Sheets',
    category: 'Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg',
  },
  {
    name: 'Azure Fundamentals',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Azure IoT',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Azure Data Lake',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Azure Data Factory',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Power Platform',
    category: 'Low-Code',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'Power Connectors',
    category: 'Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'n8n',
    category: 'Tool',
    logo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
  },
  {
    name: 'Claude / Claude Code',
    category: 'Tool',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/1024px-Claude_AI_logo.svg.png',
  },
  {
    name: 'Google AI Studio',
    category: 'Tool',
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
  },
];

// Category badge colors (light-theme friendly)
const categoryColors = {
  'Language':  { bg: '#EEF2FF', text: '#4F46E5', border: '#C7D2FE' },
  'BI Tool':   { bg: '#FFFBEB', text: '#D97706', border: '#FDE68A' },
  'Library':   { bg: '#F0FDFA', text: '#0D9488', border: '#99F6E4' },
  'Tool':      { bg: '#F0FDF4', text: '#16A34A', border: '#BBF7D0' },
  'Cloud':     { bg: '#F8FAFC', text: '#64748B', border: '#CBD5E1' },
  'Database':  { bg: '#FFF7ED', text: '#EA580C', border: '#FDBA74' },
  'Low-Code':  { bg: '#FDF4FF', text: '#9333EA', border: '#E9D5FF' },
};

export default function Tools() {
  return (
    <section id="tools" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">— / What I Use</p>
          <h2 className="section-title-xl">
            Tools &<br />Technologies.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {tools.map(({ name, category, logo }) => {
            const color = categoryColors[category] || categoryColors['Tool'];
            return (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-white border border-border rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-default hover:border-textMuted hover:shadow-sm transition-all duration-200"
              >
                {/* Logo image */}
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initial */}
                <div
                  className="w-10 h-10 rounded-xl text-textPrimary font-bold text-lg items-center justify-center hidden"
                  style={{ backgroundColor: color.bg }}
                >
                  {name[0]}
                </div>

                <span className="font-mono text-xs text-textSecondary text-center leading-tight font-medium">
                  {name}
                </span>
                <span
                  className="text-[9px] font-mono px-2 py-0.5 rounded-full font-semibold whitespace-nowrap"
                  style={{ color: color.text, backgroundColor: color.bg, border: `1px solid ${color.border}` }}
                >
                  {category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
