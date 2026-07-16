import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PageTransition } from '../components/ui/LayoutControls';
import { Link } from 'wouter';
import { SpinningProfile } from '../components/SpinningProfile';
import {
  FaBullhorn, FaPen, FaUsers, FaChartBar, FaCamera,
  FaLightbulb, FaEnvelopeOpen, FaHashtag, FaTrophy,
  FaCalendarAlt, FaMicrophoneAlt, FaThumbsUp
} from 'react-icons/fa';

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
    title: "Executive Assistant & Social Media Manager",
    company: "iPips Forex Academy",
    location: "Nigeria",
    period: "March 2026 – Present",
    bullets: [
      "Manage the CEO's schedule while coordinating admin operations and strategic business activities",
      "Lead social media strategy and content creation, increasing engagement and strengthening the Academy's digital presence, particularly on TikTok",
      "Collaborate with leadership to execute marketing campaigns, manage online communities and support business growth"
    ]
  },
  {
    title: "Social Media Manager & Brand Growth Associate",
    company: "Love Yours",
    location: "Nigeria",
    period: "March 2025 – Present",
    bullets: [
      "Joined the founding team and helped build the brand from launch, contributing to three sold-out collections and multiple successful restocks within the first year",
      "Supported marketing and sales campaigns that contributed to generating several million naira in revenue between March and December 2025",
      "Planned and promoted the Love Yours 3-in-1 Event, driving visibility, attendance and community engagement across three events in different locations"
    ]
  },
  {
    title: "Social Media Manager & Personal Brand Strategist",
    company: "Freelance",
    location: "",
    period: "January 2024 – Present",
    bullets: [
      "Helped multiple businesses and professionals grow their digital presence through strategic content and personal branding",
      "Built LinkedIn personal brands that consistently achieved 100+ engagements on multiple posts",
      "Developed content calendars and brand voice guidelines that improved audience connection and business credibility"
    ]
  },
  {
    title: "Realtor & Digital Marketing Support",
    company: "Ace Real Estate",
    location: "Nigeria",
    period: "2023 – Present",
    bullets: [
      "Used digital marketing and strategic communication to generate leads and increase property visibility",
      "Created content that positioned Ace Real Estate as a credible, professional option in the local market",
      "Supported property promotions through social media campaigns and community outreach"
    ]
  }
];

const leadershipExperience = [
  {
    icon: FaTrophy,
    title: "Social Media Lead",
    org: "Love Yours Brand",
    bullets: [
      "Owned the brand's entire social media presence from day one",
      "Grew community engagement through authentic storytelling and campaign execution",
      "Coordinated with sales and product teams to align content with business goals"
    ]
  },
  {
    icon: FaCalendarAlt,
    title: "Event Promotion Manager",
    org: "Love Yours 3-in-1 Event (2025)",
    bullets: [
      "Managed all digital promotion and community outreach for three events",
      "Created event content that drove attendance and brand awareness",
      "Coordinated cross-platform promotion from planning through post-event coverage"
    ]
  },
  {
    icon: FaMicrophoneAlt,
    title: "Debate Judge & Oratora Mentor",
    org: "National & International Competitions",
    bullets: [
      "Evaluated speakers at national and international competitions",
      "Mentored participants in communication strategy and public speaking",
      "Demonstrated communication leadership and analytical judgment under pressure"
    ]
  }
];

const competencies = [
  { icon: FaBullhorn, label: "Brand Strategy" },
  { icon: FaPen, label: "Content Creation" },
  { icon: FaHashtag, label: "Social Media" },
  { icon: FaChartBar, label: "Analytics" },
  { icon: FaCamera, label: "Visual Content" },
  { icon: FaLightbulb, label: "Campaigns" },
  { icon: FaEnvelopeOpen, label: "Email Mktg" },
  { icon: FaUsers, label: "Community" },
  { icon: FaThumbsUp, label: "Engagement" },
  { icon: FaBullhorn, label: "PR & Comms" },
  { icon: FaPen, label: "Copywriting" },
  { icon: FaChartBar, label: "Reporting" }
];

export default function MarketingPortfolio() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 pt-24">
          <Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link>
          <span className="mx-2 text-foreground/30">/</span>
          <span className="text-primary">Marketing Portfolio</span>
        </div>

        {/* Hero */}
        <section className="pb-10 mb-14 border-b border-foreground/10">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight"
              >
                Marketing & <span className="text-primary">Communications</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground"
              >
                Building brands, running campaigns and growing communities.
              </motion.p>
            </div>
            <div className="flex justify-center md:justify-end shrink-0">
              <SpinningProfile
                src="/profile.jpg"
                alt="Esther Titilayo Ayodele"
                size="md"
              />
            </div>
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
                  Marketing and Communications professional with experience in social media management,
                  brand building, content strategy, digital marketing and community engagement. Built
                  brands from scratch, drove sold-out product launches and created content that consistently
                  generates strong engagement. Passionate about authentic storytelling and marketing that
                  actually connects with people.
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
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
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

            {/* Campaign Highlights */}
            <section>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-7 h-1 bg-primary block rounded" />
                Campaign Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { stat: "3x", text: "Sold-out product collections driven by social media campaigns" },
                  { stat: "100+", text: "LinkedIn engagements achieved on multiple posts for clients" },
                  { stat: "3", text: "Events promoted and managed in 2025 across different cities" },
                  { stat: "TikTok", text: "Grew iPips Academy's TikTok presence with consistent engagement" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-panel p-7 rounded-2xl text-center border-t-2 border-t-primary"
                  >
                    <p className="text-4xl font-black text-primary mb-2">{item.stat}</p>
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
                <SkillBar skill="Social Media Strategy" percentage={92} />
                <SkillBar skill="Content Creation" percentage={90} />
                <SkillBar skill="Brand Building" percentage={88} />
                <SkillBar skill="Community Management" percentage={87} />
                <SkillBar skill="Campaign Management" percentage={85} />
                <SkillBar skill="Personal Branding" percentage={90} />
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
                  {[
                    "Certified Realtor (Ace Real Estate)",
                    "Oratora Mentor Certificate",
                    "Debate Judging Certificate",
                    "Senior School Certificate"
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-1 text-[10px] shrink-0">◆</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-black mb-3 text-primary">Platforms</h3>
                <p className="text-xs text-muted-foreground">LinkedIn · Instagram · TikTok · X (Twitter) · Canva · Google Workspace · Microsoft Office</p>
              </div>

            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
