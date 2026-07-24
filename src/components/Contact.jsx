import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  const [state, handleSubmit] = useForm('xjgdzrlv');

  return (
    <section id="contact" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="section-number mb-3">04 / Contact</p>
          <h2 className="section-title-xl">
            Let's Build<br />The Future.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left: info */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-textSecondary">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-textPrimary" />
                </div>
                <div>
                  <p className="font-mono text-xs text-textMuted">Email</p>
                  <p className="font-body text-sm">trishundkupatkar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-textSecondary">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-textPrimary" />
                </div>
                <div>
                  <p className="font-mono text-xs text-textMuted">Location</p>
                  <p className="font-body text-sm">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-xs text-textMuted mb-3 uppercase tracking-widest">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Trishund"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-textMuted hover:text-textPrimary hover:border-textPrimary transition-all duration-200"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/trishund-kupatkar-384931227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-textMuted hover:text-textPrimary hover:border-textPrimary transition-all duration-200"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://www.kaggle.com/trishundkupatkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kaggle"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-textMuted hover:text-textPrimary hover:border-textPrimary transition-all duration-200"
                >
                  <KaggleIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-surface border border-success/30 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-textPrimary mb-2">Message Sent!</h3>
                <p className="font-body text-textSecondary text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-textMuted mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="input-field focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-textMuted mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="input-field focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-textMuted mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project or opportunity…"
                    rows={5}
                    className="input-field resize-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
                </div>
                <input type="hidden" name="_subject" value="Portfolio Contact — Trishund Kupatkar" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
