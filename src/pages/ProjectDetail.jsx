import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Database, BookOpen, ChevronLeft } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

const pageVariants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:     { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function Section({ title, children }) {
  return (
    <motion.section
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="space-y-4"
    >
      <h2 className="font-display text-2xl font-bold text-textPrimary border-l-4 border-accent pl-4">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const index   = projects.findIndex(p => p.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl text-textPrimary">Project not found.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 bg-surfaceLight overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} banner`}
          loading="eager"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="section-wrap pb-8 pt-0 w-full">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-textMuted hover:text-textPrimary font-mono text-sm transition-colors mb-4 focus-visible:outline-accent"
              aria-label="Back to home"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-textPrimary leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="section-wrap space-y-12 pt-10">

        {/* Key metrics row */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          <span className="metric-chip text-base">{project.keyMetric}</span>
          <span className="font-mono text-xs text-textMuted bg-surfaceLight border border-border px-3 py-1 rounded-md">
            📅 {project.date}
          </span>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-textSecondary bg-surfaceLight border border-border hover:border-accent px-3 py-1 rounded-md transition-colors"
              aria-label="GitHub repository"
            >
              <GithubIcon size={13} /> GitHub
            </a>
          )}
          {project.links.dataset && (
            <a
              href={project.links.dataset}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-textSecondary bg-surfaceLight border border-border hover:border-accent px-3 py-1 rounded-md transition-colors"
              aria-label="Dataset source"
            >
              <Database size={13} /> Dataset
            </a>
          )}
        </motion.div>

        {/* 1. Overview */}
        <Section title="📋 Overview">
          <p className="text-textSecondary leading-relaxed font-body">{project.overview}</p>
        </Section>

        {/* 2. Problem & Objective */}
        <Section title="🎯 Problem Statement & Objective">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-display text-base font-semibold text-textPrimary mb-2">Problem</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-body">{project.problemStatement}</p>
            </div>
            <div className="card">
              <h3 className="font-display text-base font-semibold text-textPrimary mb-2">Business Objective</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-body">{project.businessObjective}</p>
            </div>
          </div>
          <div className="card mt-4">
            <h3 className="font-display text-base font-semibold text-textPrimary mb-2">Why It Was Needed</h3>
            <p className="text-textSecondary text-sm leading-relaxed font-body">{project.whyNeeded}</p>
          </div>
          <div className="mt-4">
            <p className="font-mono text-xs text-textMuted mb-2 uppercase tracking-widest">Stakeholders</p>
            <div className="flex flex-wrap gap-2">
              {project.stakeholders.map(s => (
                <span key={s} className="bg-surfaceLight border border-border text-textSecondary font-mono text-xs px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* 3. Dataset */}
        <Section title="🗄️ Dataset">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { label: 'Source',      value: project.dataset.source },
              { label: 'Rows',        value: project.dataset.rows },
              { label: 'Columns',     value: project.dataset.columns },
              { label: 'Time Period', value: project.dataset.timePeriod },
            ].map(({ label, value }) => (
              <div key={label} className="card text-center">
                <p className="font-mono text-xs text-textMuted mb-1">{label}</p>
                <p className="font-display text-base font-semibold text-textPrimary">{value}</p>
              </div>
            ))}
          </div>
          <div className="card">
            <h3 className="font-display text-sm font-semibold text-textPrimary mb-2">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {project.dataset.features.map(f => (
                <span key={f} className="tech-badge">{f}</span>
              ))}
            </div>
          </div>
          <div className="card mt-4">
            <h3 className="font-display text-sm font-semibold text-textPrimary mb-2">Data Quality Issues Found</h3>
            <ul className="space-y-1">
              {project.dataset.qualityIssues.map((q, i) => (
                <li key={i} className="flex gap-2 text-textSecondary text-sm font-body">
                  <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 4. Data Cleaning */}
        <Section title="🧹 Data Cleaning">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(project.cleaning).map(([key, val]) => (
              <div key={key} className="card">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed font-body">{val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. EDA */}
        <Section title="🔍 Exploratory Data Analysis">
          <div className="card mb-4">
            <h3 className="font-display text-base font-semibold text-textPrimary mb-3">Key Findings</h3>
            <ul className="space-y-2">
              {project.eda.keyFindings.map((f, i) => (
                <li key={i} className="flex gap-3 text-textSecondary text-sm font-body leading-relaxed">
                  <span className="font-mono text-accent text-xs mt-0.5 flex-shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {project.eda.charts.map((chart, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="bg-surfaceLight h-56 flex items-center justify-center">
                  <img
                    src={chart.image}
                    alt={chart.caption}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-textMuted font-mono text-xs">
                    Chart {i + 1}
                  </div>
                </div>
                <p className="text-textMuted text-xs font-mono px-5 py-3">{chart.caption}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Data Storytelling */}
        <Section title="📖 Data Storytelling">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { key: 'insights',        label: '💡 Insights',        val: project.storytelling.insights },
              { key: 'patterns',        label: '🔄 Patterns',        val: project.storytelling.patterns },
              { key: 'recommendations', label: '✅ Recommendations', val: project.storytelling.recommendations },
            ].map(({ label, val, key }) => (
              <div key={key} className="card">
                <h3 className="font-display text-sm font-semibold text-textPrimary mb-2">{label}</h3>
                <p className="text-textSecondary text-sm leading-relaxed font-body">{val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Dashboard */}
        <Section title="📊 Live Dashboard">
          <p className="text-textSecondary leading-relaxed font-body">{project.dashboard.description}</p>

          {project.dashboard.embedUrl ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-sm text-success">Live Interactive Dashboard</span>
              </div>
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-border"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  src={project.dashboard.embedUrl}
                  title={`${project.title} — Live Dashboard`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>
              <a
                href={project.dashboard.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
              >
                Open in full screen →
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {project.dashboard.screenshots.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-border bg-surfaceLight">
                  <img
                    src={img}
                    alt={`${project.title} dashboard screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full object-contain max-h-[500px]"
                    onError={(e) => {
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              ))}
              <p className="font-mono text-xs text-textMuted">
                * Dashboard screenshot (live embed not configured for this project)
              </p>
            </div>
          )}
        </Section>

        {/* 8. Business Impact */}
        <Section title="💼 Business Impact">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Revenue Opportunity',  val: project.businessImpact.revenueOpportunity  },
              { label: 'Cost Reduction',       val: project.businessImpact.costReduction        },
              { label: 'Process Improvement',  val: project.businessImpact.processImprovement  },
            ].map(({ label, val }) => (
              <div key={label} className="card text-center">
                <p className="font-mono text-xs text-textMuted mb-2 uppercase tracking-widest">{label}</p>
                <p className="font-display text-base font-semibold text-success leading-snug">{val}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 9. Learnings & Challenges */}
        <Section title="🎓 Key Learnings & Challenges">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-display text-sm font-semibold text-textPrimary mb-2 flex items-center gap-2">
                <BookOpen size={16} className="text-accent" /> Key Learnings
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed font-body">{project.keyLearnings}</p>
            </div>
            <div className="card">
              <h3 className="font-display text-sm font-semibold text-textPrimary mb-2 flex items-center gap-2">
                <span className="text-accent">⚡</span> Challenges
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed font-body">{project.challenges}</p>
            </div>
          </div>
        </Section>

        {/* Prev / Next */}
        <div className="border-t border-border pt-10 grid md:grid-cols-2 gap-4">
          {prevProject ? (
            <motion.button
              onClick={() => navigate(`/project/${prevProject.id}`)}
              whileHover={{ scale: 1.02, borderColor: '#6366F1' }}
              transition={{ duration: 0.2 }}
              className="card flex items-center gap-4 text-left cursor-pointer group"
              style={{ transition: 'border-color 0.2s, transform 0.2s' }}
              aria-label={`Previous project: ${prevProject.title}`}
            >
              <ArrowLeft size={18} className="text-textMuted group-hover:text-accent flex-shrink-0 transition-colors" />
              <div>
                <p className="font-mono text-xs text-textMuted mb-1">Previous</p>
                <p className="font-display text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors line-clamp-1">
                  {prevProject.title}
                </p>
              </div>
            </motion.button>
          ) : <div />}

          {nextProject ? (
            <motion.button
              onClick={() => navigate(`/project/${nextProject.id}`)}
              whileHover={{ scale: 1.02, borderColor: '#6366F1' }}
              transition={{ duration: 0.2 }}
              className="card flex items-center justify-end gap-4 text-right cursor-pointer group"
              style={{ transition: 'border-color 0.2s, transform 0.2s' }}
              aria-label={`Next project: ${nextProject.title}`}
            >
              <div>
                <p className="font-mono text-xs text-textMuted mb-1">Next</p>
                <p className="font-display text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors line-clamp-1">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight size={18} className="text-textMuted group-hover:text-accent flex-shrink-0 transition-colors" />
            </motion.button>
          ) : <div />}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
