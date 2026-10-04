import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui";
import {
  LuArrowRight,
  LuBookOpen,
  LuCheckCheck,
  LuChevronRight,
  LuInfo,
  LuUsers,
} from "react-icons/lu";

const AboutPreview = () => {
  const features = [
    {
      icon: LuBookOpen,
      title: "Access Class Notes",
      description:
        "Get instant access to comprehensive notes from your classes and courses.",
    },
    {
      icon: LuUsers,
      title: "Study Together",
      description:
        "Connect with classmates and study groups to share resources and knowledge.",
    },
    {
      icon: LuCheckCheck,
      title: "Academic Excellence",
      description:
        "Quality notes curated by top students and verified by instructors.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Why students love us
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Your academic success starts here
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Access high-quality notes, share ideas with classmates, and build
              confidence with resources designed for real learning.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                as={Link}
                to="/auth/login"
                className="w-full gap-2 sm:w-auto"
              >
                Access Notes Now
                <LuChevronRight size={18} />
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="secondary"
                className="w-full gap-2 sm:w-auto"
              >
                Learn more about us
                <LuInfo size={18} />
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.06 }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
