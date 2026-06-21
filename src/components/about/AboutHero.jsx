import { motion } from "framer-motion";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import { HashLink } from "react-router-hash-link";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_22%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm"
        >
          <LuSparkles size={16} />
          Learn smarter, faster
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 text-5xl font-bold leading-tight sm:text-6xl"
        >
          About Our <span className="text-blue-300">Notes Platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-slate-300"
        >
          A clean and inspiring space to discover, organize, and share educational notes that help learners stay focused and productive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <HashLink
            smooth
            to="#features"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Explore features
            <LuArrowRight size={18} />
          </HashLink>
          <HashLink
            smooth
            to="#mission"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/5"
          >
            Our mission
          </HashLink>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;