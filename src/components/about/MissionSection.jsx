import { motion } from "framer-motion";
import { LuGlobe, LuTarget, LuUsers } from "react-icons/lu";

const missionPoints = [
  {
    icon: LuTarget,
    title: "Clear Learning Path",
    text: "Helping students focus on what matters most with organized, easy-to-follow notes.",
  },
  {
    icon: LuUsers,
    title: "Community First",
    text: "Building a welcoming space where learners and creators can share knowledge together.",
  },
  {
    icon: LuGlobe,
    title: "Accessible Anywhere",
    text: "Making quality resources available to everyone, whenever they need a quick refresher.",
  },
];

function MissionSection() {
  return (
    <section id="mission" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Our mission</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Making learning feel simple and meaningful</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our goal is to make learning materials easy to access, properly organized, and genuinely useful for students, developers, and curious minds.
            </p>

            <div className="mt-8 space-y-4">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{point.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{point.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl"
          >
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Why it works</p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-100">Learning efficiency</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[92%] rounded-full bg-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-100">Student satisfaction</span>
                    <span className="font-semibold">96%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[96%] rounded-full bg-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-100">Content clarity</span>
                    <span className="font-semibold">89%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[89%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;