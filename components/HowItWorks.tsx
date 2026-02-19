"use client";

import { motion } from "framer-motion";
import { QrCode, BadgePercent, Users } from "lucide-react";

const steps = [
  {
    icon: <BadgePercent className="w-8 h-8 text-yellow-400" />,
    title: "Create a Discount",
    desc: "Shop owners set discount offers instantly from the dashboard.",
  },
  {
    icon: <QrCode className="w-8 h-8 text-yellow-400" />,
    title: "Generate QR Code",
    desc: "A QR code is created automatically for each offer.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Customers Scan & Save",
    desc: "Customers scan the QR and instantly unlock the discount.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


export default function HowItWorks() {
  return (
    // <motion.section
    //   id="how"
    //   className="w-full px-6 pt-20 "
    //   initial={{ opacity: 0, y: 40 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6 }}
    //   viewport={{ once: true }}
    // >
    //   <div className="max-w-6xl mx-auto text-center">
    //     <motion.h2
    //       className="text-4xl font-bold text-white"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.1 }}
    //       viewport={{ once: true }}
    //     >
    //       How It <span className="text-yellow-400">Works</span>
    //     </motion.h2>

    //     <motion.p
    //       className="mt-4 text-white/70 max-w-2xl mx-auto"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.2 }}
    //       viewport={{ once: true }}
    //     >
    //       In just 3 simple steps, you can attract more customers and increase sales.
    //     </motion.p>

    //     <motion.div
    //       className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
    //       variants={containerVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: true }}
    //     >
    //       {steps.map((step, i) => (
    //         <motion.div
    //           key={i}
    //           variants={cardVariants}
    //           whileHover={{ scale: 1.06, y: -4 }}
    //           className="p-8 rounded-2xl bg-white/5 border border-white/10 
    //                      backdrop-blur-xl transition duration-300"
    //         >
    //           <div className="flex justify-center">
    //             <motion.div
    //               initial={{ scale: 0.6, opacity: 0 }}
    //               whileInView={{ scale: 1, opacity: 1 }}
    //               transition={{ delay: i * 0.15 }}
    //               viewport={{ once: true }}
    //               className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20"
    //             >
    //               {step.icon}
    //             </motion.div>
    //           </div>

    //           <h3 className="mt-6 text-xl font-semibold text-white">
    //             {step.title}
    //           </h3>

    //           <p className="mt-3 text-white/70 text-sm leading-relaxed">
    //             {step.desc}
    //           </p>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
    // </motion.section>
    
    <motion.section id="how" className="w-full px-4 sm:px-6 pt-14 sm:pt-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-3xl sm:text-4xl font-bold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
          How It <span className="text-yellow-400">Works</span>
        </motion.h2>
        <motion.p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto"initial={{ opacity: 0, y: 20 }}whileInView={{ opacity: 1, y: 0 }}transition={{ delay: 0.2 }}viewport={{ once: true }}>
          In just 3 simple steps, you can attract more customers and increase sales.
        </motion.p>

        <motion.div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10"variants={containerVariants}initial="hidden"whileInView="show"viewport={{ once: true }}>
          {steps.map((step, i) => (
            <motion.div key={i} variants={cardVariants}whileHover={{ scale: 1.06, y: -4 }}className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition duration-300">
              <div className="flex justify-center">
                <motion.div initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}transition={{ delay: i * 0.15 }}viewport={{ once: true }}className="p-3 sm:p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20">
                  {step.icon}
                </motion.div>
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 sm:mt-3 text-white/70 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>

  );
}
