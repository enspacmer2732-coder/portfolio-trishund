import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCaseStudy = (e) => {
    e.stopPropagation();
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: project.featured ? 1.01 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-white border rounded-2xl overflow-hidden cursor-default group transition-all duration-200 ${
        project.featured
          ? 'border-textPrimary/20 shadow-md ring-1 ring-textPrimary/10 hover:border-textMuted hover:shadow-lg'
          : 'border-border hover:border-textMuted hover:shadow-sm'
      }`}
      role="article"
    >
      {/* Top badge row */}
      <div className="px-6 pt-5 flex items-center gap-2 flex-wrap">
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-textPrimary text-white tracking-wide">
            ★ Flagship
          </span>
        )}
        {project.stretchGoal && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 tracking-wide">
            ⚡ Stretch Goal
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`px-6 pb-6 space-y-3 ${project.featured || project.stretchGoal ? 'pt-3' : 'pt-5'}`}>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        <h3 className={`font-display font-semibold text-textPrimary leading-tight ${
          project.featured ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>
        <p className="text-textSecondary text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>
        <span className="metric-chip">{project.keyMetric}</span>

        {/* Case study link — only for Hidden Loss Detection */}
        {project.hasCaseStudy && (
          <div className="pt-2">
            <button
              onClick={handleCaseStudy}
              className="text-textPrimary font-semibold text-sm hover:underline flex items-center gap-1"
            >
              View Case Study →
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
