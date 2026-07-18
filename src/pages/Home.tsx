import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { PageTransition, MagneticButton } from '../components/ui/LayoutControls';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number; to: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Sales & Business Development",
    "Brand Growth Strategist",
    "Executive Assistant",
    "Customer Relationship Expert",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nameLetters = "Esther Titilayo Ayodele".split("");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* ── Hero ── */}
        <section className="min-h-[90vh] w-full pt-24 pb-10 grid md:grid-cols-2 gap-12 items-center">

          {/* Right: editorial portrait — shown first on mobile */}
          <div className="flex justify-center md:justify-end md:order-last">
            <div className="relative">
              {/* Gold corner brackets */}
              <div className="absolute -top-4 -left-4 w-14 h-14 border-t-[3px] border-l-[3px] border-primary rounded-tl-xl z-10 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 border-b-[3px] border-r-[3px] border-primary rounded-br-xl z-10 pointer-events-none" />
              {/* Gold accent dot */}
              <div className="absolute top-6 -right-5 w-10 h-10 bg-primary rounded-full z-10 opacity-90 shadow-lg" />
              <div className="absolute -bottom-2 left-6 w-5 h-5 bg-primary/50 rounded-full z-10" />
              <img
                src="/profile.jpg"
                alt="Esther Titilayo Ayodele"
                className="w-64 h-[360px] md:w-[300px] md:h-[420px] rounded-2xl object-cover shadow-2xl"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </div>

          {/* Left: text — shown second on mobile, first column on desktop */}
          <div className="flex flex-col items-start text-left md:order-first">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary text-sm font-bold tracking-[0.22em] uppercase mb-5"
            >
              Hey, I'm
            </motion.p>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5 flex flex-wrap"
            >
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className={letter === " " ? "w-3 md:w-4" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <div className="h-9 mb-6 overflow-hidden w-full">
              <motion.p
                key={titleIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-primary font-bold"
              >
                {titles[titleIndex]}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Sales and business development professional with a track record of
              driving revenue, launching sold-out collections and building real
              client relationships. Based in Nigeria, open to international work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link href="/sales">
                <MagneticButton className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm cursor-pointer">
                  View My Work
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-colors cursor-pointer">
                  Get in Touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>

        </section>

        {/* ── Stats ── */}
        <section className="w-full py-16 border-t border-foreground/8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[
              { value: 4, suffix: "+", label: "Years Experience" },
              { value: 3, label: "Sold-Out Collections" },
              { value: 3, label: "Events Managed" },
              { label: "Multiple", textValue: true, subLabel: "Industries" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-5 text-center"
              >
                <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                  {stat.textValue
                    ? "Multi"
                    : <AnimatedCounter to={stat.value as number} suffix={stat.suffix} />}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                  {stat.label || stat.subLabel}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Portfolio cards ── */}
        <section id="portfolios" className="w-full py-20 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              Professional <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Two tracks, one focus: growing businesses and the people in them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sales & Business Management",
                desc: "Revenue growth, client acquisition and relationship-first sales execution.",
                link: "/sales",
                img: "https://i.ibb.co/gb5gP4GK/5fe2d797be1e.jpg",
              },
              {
                title: "Marketing & Communications",
                desc: "Brand building, content strategy and campaigns that actually drive results.",
                link: "/marketing",
                img: "/profile.jpg",
              },
            ].map((portfolio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="glass-panel rounded-[1.75rem] overflow-hidden hover:-translate-y-2 transition-transform duration-400 border border-foreground/8 hover:border-primary/40">
                  <div className="h-72 overflow-hidden relative">
                    <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-400" />
                    <img
                      src={portfolio.img}
                      alt={portfolio.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  </div>
                  <div className="p-7 -mt-10 relative z-20">
                    <h3 className="text-2xl font-black mb-3">{portfolio.title}</h3>
                    <p className="text-muted-foreground mb-7 text-sm leading-relaxed">{portfolio.desc}</p>
                    <Link href={portfolio.link}>
                      <span className="text-primary font-bold tracking-wide uppercase text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                        Explore <span>→</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Skills strip ── */}
        <section className="w-full py-14 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "Business Development", "Sales Strategy", "CRM", "Lead Generation",
              "Digital Marketing", "Brand Growth", "Campaign Management", "Event Management",
              "Executive Support", "Personal Branding", "Public Relations", "Community Engagement",
            ].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-panel px-5 py-2.5 rounded-full text-sm font-semibold border-primary/15 hover:border-primary text-foreground/80 hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="w-full py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-14"
          >
            Career <span className="text-primary">Journey</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-7 relative before:absolute before:inset-y-0 before:left-[17px] before:w-[2px] before:bg-primary/20">
            {[
              { year: "2026", role: "Executive Assistant at iPips Forex Academy" },
              { year: "2025", role: "Head of Sales + Marketing at Love Yours, three sold-out collections, 3 events" },
              { year: "2024", role: "Launched Freelance Business Growth & Social Media Consulting" },
              { year: "2023", role: "Joined Ace Real Estate as Certified Realtor" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-[11px] top-5 w-3 h-3 bg-background border-2 border-primary rounded-full z-10" />
                <div className="glass-panel p-5 rounded-xl border-l-4 border-l-primary">
                  <span className="text-primary font-black tracking-widest text-xs uppercase">{item.year}</span>
                  <p className="mt-1 font-semibold text-foreground/90">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full py-20 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/8" />
            <h2 className="text-4xl md:text-5xl font-black mb-5 relative z-10">
              Want to work together?
            </h2>
            <p className="text-muted-foreground mb-9 max-w-lg mx-auto relative z-10 text-lg">
              Open to full-time roles, consulting gigs and strategic partnerships globally.
            </p>
            <Link href="/contact">
              <MagneticButton className="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm relative z-10 inline-block cursor-pointer">
                Say Hello
              </MagneticButton>
            </Link>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
