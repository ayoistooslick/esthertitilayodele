import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/ui/LayoutControls';

const cvVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } }
};

const cvHeader = {
  name: "Esther Titilayo Ayodele",
  location: "Ilorin, Kwara State, Nigeria",
  email: "Titiayodele6@gmail.com",
  phone: "+234 814 379 1181",
  linkedin: "linkedin.com/in/esther-titilayo-ayodele-229323291"
};

function Section({ title }: { title: string }) {
  return (
    <h2 className="text-base font-black uppercase tracking-widest text-primary border-b border-primary/30 pb-2 mb-4 mt-8">
      {title}
    </h2>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-2.5 text-sm text-foreground/75 leading-relaxed">
      <span className="text-primary mt-1.5 text-[10px] shrink-0">◆</span>
      {text}
    </li>
  );
}

function JobEntry({ title, company, period, bullets }: { title: string; company: string; period: string; bullets: string[] }) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 mb-2">
        <div>
          <h3 className="font-black text-foreground">{title}</h3>
          <p className="text-sm font-semibold text-muted-foreground">{company}</p>
        </div>
        <span className="text-xs font-bold text-primary whitespace-nowrap uppercase tracking-wide">{period}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => <Bullet key={i} text={b} />)}
      </ul>
    </div>
  );
}

function SalesCV() {
  return (
    <div className="glass-panel p-7 md:p-10 rounded-[2rem] border border-foreground/8">
      {/* Header */}
      <div className="text-center border-b border-foreground/10 pb-7 mb-6">
        <h1 className="text-3xl font-black mb-1">{cvHeader.name}</h1>
        <p className="text-primary font-bold text-sm mb-3">Sales & Business Development Professional</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
          <span>{cvHeader.location}</span>
          <a href={`mailto:${cvHeader.email}`} className="hover:text-primary transition-colors">{cvHeader.email}</a>
          <a href={`tel:${cvHeader.phone}`} className="hover:text-primary transition-colors">{cvHeader.phone}</a>
          <a href={`https://${cvHeader.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{cvHeader.linkedin}</a>
        </div>
      </div>

      {/* Summary */}
      <Section title="Professional Summary" />
      <p className="text-sm text-foreground/80 leading-relaxed">
        Sales and Business Development professional with experience in startup growth, real estate, CRM,
        brand marketing and executive support. Track record of helping businesses grow from the ground up,
        driving revenue through strategic marketing and customer engagement, and building long-term client
        relationships. Passionate about helping organizations increase revenue, strengthen loyalty and
        achieve sustainable growth.
      </p>

      {/* Work Experience */}
      <Section title="Work Experience" />
      <JobEntry
        title="Executive Assistant"
        company="iPips Forex Academy, Nigeria"
        period="March 2026 – Present"
        bullets={[
          "Support the CEO in managing daily operations, business coordination and strategic initiatives",
          "Coordinate marketing, communication and admin activities to improve operational efficiency",
          "Work closely with leadership on business growth, partnerships and customer engagement"
        ]}
      />
      <JobEntry
        title="Head of Sales, Marketing & Brand Growth Associate"
        company="Love Yours, Nigeria"
        period="March 2025 – Present"
        bullets={[
          "Joined the founding team and helped grow the business from a startup into a commercially successful brand, contributing to several million naira in revenue between March and December 2025",
          "Contributed to three sold-out product collections and multiple successful restocks",
          "Worked with cross-functional teams to increase brand awareness, strengthen loyalty and drive repeat purchases"
        ]}
      />
      <JobEntry
        title="Business Growth & Social Media Consultant"
        company="Freelance"
        period="January 2024 – Present"
        bullets={[
          "Help businesses increase brand visibility through strategic digital marketing and personal branding",
          "Develop marketing strategies that improve audience engagement and generate business opportunities",
          "Build LinkedIn personal brands that consistently achieve strong engagement and professional credibility"
        ]}
      />
      <JobEntry
        title="Realtor"
        company="Ace Real Estate, Nigeria"
        period="2023 – Present"
        bullets={[
          "Promoted and facilitated sales of residential properties and plots of land",
          "Built client relationships that supported trust, referrals and repeat business",
          "Used digital marketing and effective communication to generate leads and increase property visibility"
        ]}
      />

      {/* Leadership */}
      <Section title="Leadership Experience" />
      <div className="mb-4">
        <h3 className="font-black text-sm">Head of Sales — Love Yours</h3>
        <ul className="mt-2 space-y-1.5">
          {["Supported sales planning and execution across multiple product launches",
            "Worked with marketing and ops to improve customer experience",
            "Contributed to business growth through CRM and strategic sales"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-black text-sm">Event Manager — Road Trips & Love Yours 3-in-1 Event (2025)</h3>
        <ul className="mt-2 space-y-1.5">
          {["Coordinated three events across different locations",
            "Managed planning, promotion and stakeholder coordination end-to-end",
            "Increased event visibility through strategic marketing and community outreach"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-black text-sm">Debate Judge & Oratora Mentor — National & International</h3>
        <ul className="mt-2 space-y-1.5">
          {["Evaluated speakers at national and international debate competitions",
            "Mentored participants in leadership, communication and critical thinking"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>

      {/* Education */}
      <Section title="Education & Certifications" />
      <div className="mb-4">
        <h3 className="font-black text-sm">B.Sc. Mass Communication</h3>
        <p className="text-sm text-muted-foreground">Kwara State University (KWASU), Nigeria — Second Class Upper, 2025</p>
      </div>
      <ul className="space-y-1.5 mb-4">
        {["Certified Realtor — Ace Real Estate", "Oratora Mentor Certificate", "Senior School Certificate"].map((c, i) => <Bullet key={i} text={c} />)}
      </ul>

      {/* Skills */}
      <Section title="Skills" />
      <div className="flex flex-wrap gap-2">
        {["Business Development", "Sales Strategy", "CRM", "Lead Generation", "Negotiation",
          "Client Acquisition", "Executive Support", "Event Management", "Digital Marketing",
          "Personal Branding", "Team Collaboration", "Microsoft Office", "Google Workspace", "Canva"
        ].map((s, i) => (
          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{s}</span>
        ))}
      </div>
    </div>
  );
}

function MarketingCV() {
  return (
    <div className="glass-panel p-7 md:p-10 rounded-[2rem] border border-foreground/8">
      {/* Header */}
      <div className="text-center border-b border-foreground/10 pb-7 mb-6">
        <h1 className="text-3xl font-black mb-1">{cvHeader.name}</h1>
        <p className="text-primary font-bold text-sm mb-3">Marketing & Communications Professional</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
          <span>{cvHeader.location}</span>
          <a href={`mailto:${cvHeader.email}`} className="hover:text-primary transition-colors">{cvHeader.email}</a>
          <a href={`tel:${cvHeader.phone}`} className="hover:text-primary transition-colors">{cvHeader.phone}</a>
          <a href={`https://${cvHeader.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{cvHeader.linkedin}</a>
        </div>
      </div>

      {/* Summary */}
      <Section title="Professional Summary" />
      <p className="text-sm text-foreground/80 leading-relaxed">
        Marketing and Communications professional with experience in social media management,
        brand building, content strategy, digital marketing and community engagement. Built
        brands from scratch, drove sold-out product launches and created content that consistently
        generates strong engagement. Passionate about authentic storytelling and marketing that
        actually connects with people.
      </p>

      {/* Work Experience */}
      <Section title="Work Experience" />
      <JobEntry
        title="Executive Assistant & Social Media Manager"
        company="iPips Forex Academy, Nigeria"
        period="March 2026 – Present"
        bullets={[
          "Manage the CEO's schedule while coordinating admin operations and strategic business activities",
          "Lead social media strategy and content creation, increasing engagement and the Academy's digital presence, particularly on TikTok",
          "Collaborate with leadership to execute marketing campaigns and manage online communities"
        ]}
      />
      <JobEntry
        title="Social Media Manager & Brand Growth Associate"
        company="Love Yours, Nigeria"
        period="March 2025 – Present"
        bullets={[
          "Joined the founding team and helped build the brand from launch, contributing to three sold-out collections and multiple successful restocks within year one",
          "Supported campaigns that contributed to generating several million naira in revenue between March and December 2025",
          "Planned and promoted the Love Yours 3-in-1 Event, driving visibility, attendance and community engagement across three events"
        ]}
      />
      <JobEntry
        title="Social Media Manager & Personal Brand Strategist"
        company="Freelance"
        period="January 2024 – Present"
        bullets={[
          "Helped multiple businesses and professionals grow their digital presence through strategic content and personal branding",
          "Built LinkedIn personal brands that consistently achieved 100+ engagements on multiple posts",
          "Developed content calendars and brand voice guidelines that improved audience connection and business credibility"
        ]}
      />
      <JobEntry
        title="Realtor & Digital Marketing Support"
        company="Ace Real Estate, Nigeria"
        period="2023 – Present"
        bullets={[
          "Used digital marketing to generate leads and increase property visibility in the local market",
          "Created content that positioned Ace Real Estate as a professional, credible option",
          "Supported property promotions through social media campaigns and community outreach"
        ]}
      />

      {/* Leadership */}
      <Section title="Leadership Experience" />
      <div className="mb-4">
        <h3 className="font-black text-sm">Social Media Lead — Love Yours Brand</h3>
        <ul className="mt-2 space-y-1.5">
          {["Owned the brand's entire social media presence from day one",
            "Grew community engagement through authentic storytelling and campaign execution",
            "Coordinated with sales and product teams to align content with business goals"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-black text-sm">Event Promotion Manager — Love Yours 3-in-1 Event (2025)</h3>
        <ul className="mt-2 space-y-1.5">
          {["Managed all digital promotion and community outreach for three events",
            "Created event content that drove attendance and brand awareness",
            "Coordinated cross-platform promotion from planning through post-event coverage"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-black text-sm">Debate Judge & Oratora Mentor — National & International</h3>
        <ul className="mt-2 space-y-1.5">
          {["Evaluated speakers at national and international debate competitions",
            "Mentored participants in communication strategy and public speaking"
          ].map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>

      {/* Education */}
      <Section title="Education & Certifications" />
      <div className="mb-4">
        <h3 className="font-black text-sm">B.Sc. Mass Communication</h3>
        <p className="text-sm text-muted-foreground">Kwara State University (KWASU), Nigeria — Second Class Upper, 2025</p>
      </div>
      <ul className="space-y-1.5 mb-4">
        {["Certified Realtor — Ace Real Estate", "Oratora Mentor Certificate", "Debate Judging Certificate", "Senior School Certificate"].map((c, i) => <Bullet key={i} text={c} />)}
      </ul>

      {/* Skills */}
      <Section title="Skills" />
      <div className="flex flex-wrap gap-2">
        {["Social Media Strategy", "Content Creation", "Brand Building", "Community Management",
          "Campaign Management", "Personal Branding", "Copywriting", "Email Marketing",
          "Analytics & Reporting", "LinkedIn Growth", "TikTok Content", "Instagram Marketing",
          "Canva", "Google Workspace"
        ].map((s, i) => (
          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function CV() {
  const [activeTab, setActiveTab] = useState<'sales' | 'marketing'>('sales');

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">

        {/* Hero */}
        <section className="pt-24 pb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              Resume
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-4 leading-tight"
            >
              Curriculum <span className="text-primary">Vitae</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground"
            >
              Pick a perspective to see the tailored version.
            </motion.p>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Esther Titilayo Ayodele"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl ring-4 ring-primary/30"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </section>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {(['sales', 'marketing'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3.5 rounded-full font-bold tracking-wide uppercase text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-[0_0_18px_hsl(20_90%_48%/0.35)]'
                  : 'bg-foreground/5 text-muted-foreground hover:bg-foreground/10 border border-foreground/10'
              }`}
            >
              {tab === 'sales' ? 'Sales & Business' : 'Marketing & Comms'}
            </button>
          ))}
        </div>

        {/* CV Viewer */}
        <div className="relative min-h-[700px] mb-20">
          <AnimatePresence mode="wait">
            {activeTab === 'sales' && (
              <motion.div key="sales" variants={cvVariants} initial="hidden" animate="visible" exit="exit">
                <SalesCV />
              </motion.div>
            )}
            {activeTab === 'marketing' && (
              <motion.div key="marketing" variants={cvVariants} initial="hidden" animate="visible" exit="exit">
                <MarketingCV />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </PageTransition>
  );
}
