import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, MagneticButton } from '../components/ui/LayoutControls';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

// ─── Formspree setup ────────────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form, choose your email, copy the form ID (e.g. "xpwzgkdo")
// 3. Replace the placeholder below with your actual Formspree form ID
const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← replace this
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
const IS_CONFIGURED = FORMSPREE_ID !== 'YOUR_FORM_ID';
// ────────────────────────────────────────────────────────────────────────────

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    if (!IS_CONFIGURED) {
      // Fallback: open the user's mail client if Formspree isn't configured
      const body = encodeURIComponent(`Name: ${data.fullName}\nEmail: ${data.email}\n\n${data.message}`);
      window.location.href = `mailto:Titiayodele6@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${body}`;
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (res.ok) {
        setSubmitState('success');
        reset();
        setTimeout(() => setSubmitState('idle'), 6000);
      } else {
        setSubmitState('error');
        setTimeout(() => setSubmitState('idle'), 5000);
      }
    } catch {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 5000);
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-20">

        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              Say Hello
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-5 leading-tight"
            >
              Let's <span className="text-primary">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Open to international roles, consulting work and collaborations. Reach out any time.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="flex justify-center shrink-0"
          >
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
              <img
                src="/profile.jpg"
                alt="Esther Titilayo Ayodele"
                className="w-full h-full rounded-full object-cover shadow-xl ring-4 ring-primary/30"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </motion.div>
        </section>

        {/* Setup notice (only shown when Formspree isn't configured) */}
        {!IS_CONFIGURED && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-700 dark:text-amber-400 text-sm"
          >
            <strong>Form setup needed:</strong> To receive messages by email, create a free account at{' '}
            <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline font-bold">formspree.io</a>,
            create a form, then replace <code className="bg-amber-500/10 px-1 rounded">YOUR_FORM_ID</code> in{' '}
            <code className="bg-amber-500/10 px-1 rounded">src/pages/Contact.tsx</code> with your real form ID.
            Until then, clicking Send will open your email client instead.
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* Contact details */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FaEnvelope, text: "Titiayodele6@gmail.com", href: "mailto:Titiayodele6@gmail.com" },
                { icon: FaPhone, text: "+234 814 379 1181", href: "tel:+2348143791181" },
                { icon: FaLinkedin, text: "LinkedIn Profile", href: "https://linkedin.com/in/esther-titilayo-ayodele-229323291" },
                { icon: FaMapMarkerAlt, text: "Ilorin, Nigeria", href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col gap-3 border border-foreground/8 hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={16} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-sm font-semibold hover:text-primary transition-colors truncate"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="glass-panel p-7 rounded-3xl border border-foreground/8"
            >
              <h3 className="text-xl font-black mb-5">Currently open to:</h3>
              <ul className="space-y-3">
                {[
                  "Full-time roles (Remote / International)",
                  "Freelance Consulting",
                  "Strategic Partnerships",
                  "Speaking Engagements",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)] animate-pulse shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="glass-panel h-44 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden border border-foreground/8 group"
            >
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt size={18} />
              </div>
              <span className="font-bold text-foreground/90">Ilorin, Kwara State, Nigeria</span>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] border-t-2 border-t-primary relative"
          >
            <h3 className="text-2xl font-black mb-7">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Full Name</label>
                <input
                  {...register("fullName", { required: "Name is required" })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
                {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Subject</label>
                <div className="relative">
                  <select
                    {...register("subject", { required: "Please pick a topic" })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-background">Pick a topic</option>
                    <option value="Career Opportunity" className="bg-background">Career Opportunity</option>
                    <option value="Business Enquiry" className="bg-background">Business Enquiry</option>
                    <option value="Collaboration" className="bg-background">Collaboration</option>
                    <option value="General" className="bg-background">General</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</div>
                </div>
                {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we work together?"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <MagneticButton
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm flex justify-center items-center gap-3 disabled:opacity-60"
              >
                {isSubmitting
                  ? 'Sending…'
                  : !IS_CONFIGURED
                  ? <><FaPaperPlane /> Send via Email Client</>
                  : <><FaPaperPlane /> Send Message</>}
              </MagneticButton>

              {submitState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-600 dark:text-green-400 text-sm text-center font-semibold"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {submitState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 text-sm text-center font-semibold"
                >
                  Something went wrong. Please try emailing directly at Titiayodele6@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
