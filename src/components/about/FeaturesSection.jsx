import { motion } from "framer-motion";
import { LuCompass, LuLayers3, LuShieldCheck } from "react-icons/lu";

const features = [
  {
    icon: LuCompass,
    title: "Explore Notes",
    description: "Browse public notes shared across subjects and topics with a clean, distraction-free layout.",
  },
  {
    icon: LuLayers3,
    title: "Organized Content",
    description: "Keep everything structured with thoughtful categories, search support, and clear formatting.",
  },
  {
    icon: LuShieldCheck,
    title: "Smart Sharing",
    description: "Share knowledge effortlessly while keeping your notes clear, secure, and easy to revisit.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Platform features</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">Everything you need to study better</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
                >
                  <Icon size={22} />
                </motion.div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;