import { motion } from 'framer-motion';
import { PageTransition } from '../components/ui/LayoutControls';
import { FaShieldAlt, FaStar, FaSeedling, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12">

        {/* Hero */}
        <section className="pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]"
            >
              About <span className="text-primary">Esther</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Esther Titilayo Ayodele is a Sales, Business Development and Marketing
              Communications professional from Ilorin, Kwara State, Nigeria. B.Sc Mass Communication,
              Kwara State University, Second Class Upper, Class of 2025.
            </motion.p>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Esther Titilayo Ayodele"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl ring-4 ring-primary/30"
              style={{ objectPosition: 'center 12%' }}
            />
          </div>
        </section>

        {/* Extended Bio */}
        <section className="py-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2rem] border border-foreground/8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl" />
            <div className="space-y-5 text-foreground/80 leading-relaxed relative z-10">
              <p>
                Her career spans startup growth, real estate sales, digital marketing and
                executive operations. She was part of the founding team at Love Yours, helped
                grow it into a commercially successful brand, facilitated property transactions at
                Ace Real Estate and currently supports the CEO of iPips Forex Academy as Executive Assistant.
              </p>
              <p>
                As a freelance consultant, she's worked with businesses and professionals to grow
                their digital presence and build strong personal brands, particularly on LinkedIn.
              </p>
              <p>
                Outside the office, Esther has served as a Debate Judge and Oratora Mentor at
                national and international competitions, which honestly says a lot about how she
                thinks and communicates under pressure.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission / Vision / Philosophy */}
        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-center mb-10"
          >
            What Drives <span className="text-primary">Her</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: "Mission",
                text: "To help people and organizations grow in ways that actually last, not just quick wins.",
              },
              {
                title: "Vision",
                text: "Become a leading voice in sales and brand strategy across Africa and beyond.",
              },
              {
                title: "Philosophy",
                text: "Relationships first. Everything else follows from genuine trust and real conversations.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-7 rounded-2xl border border-foreground/8 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-1 bg-primary rounded mb-4" />
                <h3 className="text-lg font-black mb-3 text-primary">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-center mb-10"
          >
            Core <span className="text-primary">Values</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaShieldAlt, title: "Integrity", text: "Doing the right thing, especially when it's harder." },
              { icon: FaStar, title: "Excellence", text: "Not perfectionism, just genuine care about the work." },
              { icon: FaSeedling, title: "Growth", text: "Always learning, always improving, no exceptions." },
              { icon: FaHandshake, title: "Connection", text: "Real relationships over transactional networking." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel p-6 rounded-2xl text-center border border-foreground/8 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <val.icon size={20} />
                </div>
                <h3 className="font-black text-lg mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership style + Goals */}
        <section className="py-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-7">
            {[
              {
                label: "Leadership Style",
                quote: "I lead by listening first. The best decisions come when everyone in the room feels heard.",
              },
              {
                label: "Career Goals",
                quote: "Build a body of work that creates real economic value for Nigeria and opens doors for the next generation of professionals.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-7 rounded-2xl border-l-4 border-l-primary"
              >
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-3">{item.label}</p>
                <p className="text-foreground/80 leading-relaxed italic text-base">"{item.quote}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="py-10 pb-20 text-center">
          <p className="text-xs font-black tracking-widest uppercase text-muted-foreground mb-4">Languages</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["English (Fluent)", "Yoruba (Native)"].map((lang, i) => (
              <span key={i} className="glass-panel px-5 py-2 rounded-full text-sm font-semibold border border-primary/30 text-primary">
                {lang}
              </span>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
