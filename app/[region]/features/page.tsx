"use client";

import { motion } from "framer-motion";
import {QrCode,Sparkles,Store,BarChart3,Zap,ShieldCheck,} from "lucide-react";

export default function FeaturesPage() {
  return (
    <motion.main className="relative min-h-screen px-6 pt-8 md:pt-20 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <motion.section className="max-w-6xl mx-auto text-center mb-8 md:mb-20" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}transition={{ duration: 0.7 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Turn Every Purchase Into a
          <span className="text-yellow-400"> Surprise Discount</span>
        </h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Scan4Discount helps shop owners boost repeat customers using QR-based
          random discounts — simple, fast, and powerful.
        </p>
      </motion.section>

      <motion.section className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-20" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {features.map((feature, index) => (
          <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05 }}className="bg-white/5 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6 transition">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-white/70">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section className="max-w-5xl mx-auto text-center" initial={{ opacity: 0 }}whileInView={{ opacity: 1 }}transition={{ duration: 0.6 }}viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-12">
          How <span className="text-yellow-400">Scan4Discount</span> Works
        </h2>

        <div className="grid gap-12 md:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}transition={{ delay: index * 0.15 }}viewport={{ once: true }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-white/80 text-sm">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};


const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Random Discount Engine",
    description:
      "Automatically generate surprise discounts that keep customers excited and coming back.",
  },
  {
    icon: <QrCode className="w-8 h-8 text-yellow-400" />,
    title: "Instant QR Codes",
    description:
      "Create QR codes in seconds. No app needed for customers — just scan & save.",
  },
  {
    icon: <Store className="w-8 h-8 text-yellow-400" />,
    title: "Built for Any Shop/Company/Institute",
    description:
      "Perfect for tea stalls, clothing stores, salons, supermarkets, and more.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
    title: "Smart Dashboard",
    description:
      "Track scans, discounts given, and customer activity from one simple dashboard.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "2-Minute Setup",
    description:
      "Create an account, set discounts, generate QR — you’re live instantly.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Secure & Reliable",
    description:
      "One-time scan protection and secure discount logic to prevent misuse.",
  },
];

const steps = [
  "Owner creates an account",
  "Sets discount range (ex: 5%–30%)",
  "Generates QR code",
  "Customer scans after purchase",
  "Random discount is applied",
  "Customer gets instant Rewards"
];
