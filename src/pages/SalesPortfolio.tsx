import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PageTransition } from '../components/ui/LayoutControls';
import { Link } from 'wouter';
import {
  FaBriefcase, FaChartLine, FaHandshake, FaUserPlus,
  FaComments, FaUsers, FaHeart, FaDollarSign,
  FaGlobe, FaLightbulb, FaUserFriends, FaStar,
  FaTrophy, FaCalendarAlt, FaMicrophoneAlt
} from 'react-icons/fa';
import { FaPalette, FaGoogle, FaWindows, FaLinkedin, FaInstagram, FaTwitter, FaMobileAlt } from 'react-icons/fa';

const AnimatedCounter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        setCount(Math.floor(progress * to));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="font-semibold text-sm">{skill}</span>
        <span className="text-primary text-sm font-bold">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const workExperience = [
  {
    title: "Executive Assistant",
    company: "iPips Forex Academy",
    location: "Nigeria",
    period: "March 2026 – Present",
    bullets: [
      "Support the CEO in managing daily operations, business coordination and strategic initiatives",
      "Coordinate marketing, communication and admin activities to improve operational efficiency",
      "Work closely with leadership on business growth, partnerships and customer engagement"
    ]
  },
  {
    title: "Head of Sales, Marketing & Brand Growth Associate",
    company: "Love Yours",
    location: "Nigeria",
    period: "March 2025 – Present",
    bullets: [
      "Joined the founding team and helped grow the business from a startup idea into a commercially successful brand, contributing to several million naira in revenue between March and December 2025",
      "Contributed to three sold-out product collections and multiple sold-out restocks through coordinated sales, marketing and customer engagement",
      "Worked with cross-functional teams to increase brand awareness, strengthen loyalty and drive repeat purchases"
    ]
  },
  {
    title: "Business Growth & Social Media Consultant",
    company: "Freelance",
    location: "",
    period: "January 2024 – Present",
    bullets: [
      "Help businesses increase brand visibility through strategic digital marketing and personal branding",
      "Develop marketing strategies that improve audience engagement and generate business opportunities",
      "Build LinkedIn personal brands that consistently achieve strong engagement and professional credibility"
    ]
  },
  {
    title: "Realtor",
    company: "Ace Real Estate",
    location: "Nigeria",
    period: "2023 – Present",
    bullets: [
      "Promoted and facilitated sales of residential properties and plots by understanding client needs and recommending suitable investments",
      "Built strong client relationships that supported trust, referrals and repeat business",
      "Used digital marketing and effective communication to generate leads and increase property visibility"
    ]
  }
];

const leadershipExperience = [
  {
    icon: FaTrophy,
    title: "Head of Sales",
    org: "Love Yours",
    bullets: [
      "Supported sales planning and execution across multiple product launches and restocks",
      "Worked with marketing and ops to improve customer experience and market presence",
      "Contributed to business growth through CRM and strategic sales initiatives"
    ]
  },
  {
    icon: FaCalendarAlt,
    title: "Event Manager",
    org: "Road Trips & Love Yours 3-in-1 Event (2025)",
    bullets: [
      "Coordinated three successful events across different locations",
      "Managed planning, promotion and stakeholder coordination from start to finish",
      "Increased event visibility through strategic marketing and community engagement"
    ]
  },
  {
    icon: FaMicrophoneAlt,
    title: "Debate Judge & Oratora Mentor",
    org: "National & International Competitions",
    bullets: [
      "Evaluated speakers at national and international debate competitions",
      "Mentored aspiring speakers in leadership, communication and critical thinking",
      "Demonstrated strong analytical and decision-making skills under pressure"
    ]
  }
];

const competencies = [
  { icon: FaBriefcase, label: "Business Dev" },
  { icon: FaChartLine, label: "Sales Strategy" },
  { icon: FaHandshake, label: "CRM" },
  { icon: FaUserPlus, label: "Lead Gen" },
  { icon: FaComments, label: "Negotiation" },
  { icon: FaUsers, label: "Client Acq." },
  { icon: FaHeart, label: "Relationships" },
  { icon: FaDollarSign, label: "Revenue" },
  { icon: FaGlobe, label: "Market Exp." },
  { icon: FaLightbulb, label: "Strategy" },
  { icon: FaUserFriends, label: "Teamwork" },
  { icon: FaStar, label: "Exec Support" }
];

export default function SalesPortfolio() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 pt-24">
          <Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link>
          <span className="mx-2 text-foreground/30">/</span>
          <span className="text-primary">Sales Portfolio</span>
        </div>

        {/* Hero */}
        <section className="pb-10 mb-14 border-b border-foreground/10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black mb-4 leading-tight"
            >
              Sales & Business <span className="text-primary">Management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Driving growth through strategy, relationships and execution.
            </motion.p>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Esther Titilayo Ayodele"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-primary/30"
              style={{ objectPosition: 'center 12%' }}
            />
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 space-y-20">

            {/* Summary */}
            <section>
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-7 md:p-9 rounded-2xl border-l-4 border-l-primary"
              >
                <p className="text-base leading-relaxed text-foreground/85">
                  Sales and Business Development professional with experience in startup growth, real estate sales,
                  CRM, brand marketing and executive support. Experienced in helping businesses grow from the ground
                  up, driving revenue through strategic marketing and customer engagement, and building long-term
                  client relationships. Passionate about helping organizations increase revenue, strengthen loyalty
                  and achieve sustainable growth.
                </p>
              </motion.div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-7 h-1 bg-primary block rounded" />
                Work Experience
              </h2>

              <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[10px] before:w-[2px] before:bg-foreground/8">
                {workExperience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08 }}
                    className="relative pl-9"
                  >
                    <div className="absolute left-[5px] top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_hsl(20_90%_48%/0.7)]" />
                    <div className="glass-panel p-7 rounded-2xl hover:border-primary/25 transition-colors border border-foreground/8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-1">
                        <div>
                          <h3 className="text-xl font-black text-primary">{job.title}</h3>
                          <p className="font-semibold text-foreground/80 mt-0.5">
                            {job.company}{job.location ? ` · ${job.location}` : ''}
                          </p>
                        </div>
                        <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase whitespace-nowrap">{job.period}</span>
                      </div>
                      <ul className="space-y-2.5 mt-3">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-foreground/70 text-sm">
                            <span className="text-primary mt-1.5 text-[10px] shrink-0">◆</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-7 h-1 bg-primary block rounded" />
                Leadership Experience
              </h2>
              <div className="space-y-6">
                {leadershipExperience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-panel p-7 rounded-2xl hover:border-primary/25 transition-colors border border-foreground/8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <item.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-primary mb-0.5">{item.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">{item.org}</p>
                        <ul className="space-y-1.5">
                          {item.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-3 text-foreground/70 text-sm">
                              <span className="text-primary mt-1.5 text-[10px] shrink-0">◆</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-7 h-1 bg-primary block rounded" />
                Key Achievements
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { stat: 3, text: "Sold-out product collections at Love Yours" },
                  { stat: 3, text: "Major events co-managed across locations" },
                  { stat: "₦M+", text: "Revenue contributed at Love Yours in year one", isString: true },
                  { stat: "4+", text: "Years of cross-sector business experience", isString: true }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-panel p-7 rounded-2xl text-center border-t-2 border-t-primary"
                  >
                    <p className="text-4xl font-black text-primary mb-2">
                      {item.isString ? item.stat : <AnimatedCounter to={item.stat as number} />}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <section className="glass-panel p-7 rounded-3xl sticky top-28 border border-foreground/8">

              <h3 className="text-xl font-black mb-6 text-primary">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {competencies.map((comp, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-foreground/4 hover:bg-primary/10 transition-colors">
                    <comp.icon className="text-primary text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/75">{comp.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-black mb-5 text-primary">Skills Matrix</h3>
                <SkillBar skill="Business Development" percentage={90} />
                <SkillBar skill="Sales Strategy" percentage={90} />
                <SkillBar skill="CRM & Relationships" percentage={88} />
                <SkillBar skill="Executive Support" percentage={88} />
                <SkillBar skill="Lead Generation" percentage={85} />
                <SkillBar skill="Event Management" percentage={83} />
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-black mb-4 text-primary">Education</h3>
                <div className="bg-foreground/4 p-4 rounded-xl border border-foreground/8">
                  <h4 className="font-black mb-0.5">B.Sc. Mass Communication</h4>
                  <p className="text-sm text-muted-foreground mb-2">Kwara State University, Nigeria</p>
                  <span className="inline-block px-2.5 py-1 bg-primary/15 text-primary text-xs rounded-full font-bold uppercase tracking-wide">
                    Second Class Upper · 2025
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-black mb-3 text-primary">Certifications</h3>
                <ul className="space-y-2">
                  {["Certified Realtor (Ace Real Estate)", "Oratora Mentor Certificate", "Senior School Certificate"].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-1 text-[10px] shrink-0">◆</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-black mb-3 text-primary">Tools</h3>
                <div className="flex flex-wrap gap-2.5">
                  {[FaPalette, FaGoogle, FaWindows, FaLinkedin, FaInstagram, FaTwitter, FaMobileAlt].map((Icon, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-foreground/60">
                      <Icon />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Canva · Google Workspace · Microsoft Office · LinkedIn · Instagram · TikTok · X</p>
              </div>

            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
