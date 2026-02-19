"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Trail Version",
      price: "7 Days Free Trail",
      desc: "Perfect for trying out the platform",
      features: [
        "Create basic discounts",
        "QR code generation",
        "Limited scans",
      ],
    },
    {
      name: "Pro",
      price: "₹599 / month",
      desc: "Best for growing businesses",
      popular: true,
      features: [
        "Unlimited discounts",
        "Advanced analytics",
        "Customer insights",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large brands & franchises",
      features: [
        "Custom integrations",
        "Dedicated account manager",
        "Custom analytics",
        "24/7 premium support",
      ],
    },
  ];

  return (
    // <section id="pricing" className="w-full px-6 py-16">
    //   <div className="max-w-6xl mx-auto text-center">

    //     {/* Heading */}
    //     <motion.h2
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="text-4xl font-bold text-white"
    //     >
    //       Simple & Transparent Pricing
    //     </motion.h2>

    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.1 }}
    //       viewport={{ once: true }}
    //       className="mt-4 text-white/70 max-w-2xl mx-auto"
    //     >
    //       Choose a plan that fits your business needs. Upgrade anytime.
    //     </motion.p>

    //     {/* Pricing Cards */}
    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    //       {plans.map((plan, i) => (
    //         <motion.div
    //           key={i}
    //           initial={{ opacity: 0, y: 40 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: i * 0.15 }}
    //           viewport={{ once: true }}
    //           whileHover={{ scale: 1.05 }}
    //           className={`relative p-8 rounded-2xl border backdrop-blur-xl
    //             ${
    //               plan.popular
    //                 ? "bg-yellow-400/10 border-yellow-400/40"
    //                 : "bg-white/5 border-white/10"
    //             }`}
    //         >
    //           {plan.popular && (
    //             <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm 
    //                              rounded-full bg-yellow-400 text-black font-semibold">
    //               Most Popular
    //             </span>
    //           )}

    //           <h3 className="text-xl font-semibold text-white">
    //             {plan.name}
    //           </h3>

    //           <p className="mt-2 text-white/60 text-sm">
    //             {plan.desc}
    //           </p>

    //           <div className="mt-6 text-3xl font-bold text-white">
    //             {plan.price}
    //           </div>

    //           <ul className="mt-6 space-y-3 text-left">
    //             {plan.features.map((feature, idx) => (
    //               <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
    //                 <Check className="w-5 h-5 text-yellow-400" />
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>

    //           <button
    //             className={`mt-8 w-full py-3 rounded-xl font-semibold transition
    //               ${
    //                 plan.popular
    //                   ? "bg-yellow-400 text-black hover:bg-yellow-300"
    //                   : "bg-white/10 text-white hover:bg-white/20"
    //               }`}
    //           >
    //             Get Started
    //           </button>
    //         </motion.div>
    //       ))}
    //     </div>

    //   </div>
    // </section>

    <section id="pricing" className="w-full px-4 sm:px-6 pt-8 sm:pt-16">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Simple & Transparent Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto"
        >
          Choose a plan that fits your business needs. Upgrade anytime.
        </motion.p>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl
                ${
                  plan.popular
                    ? "bg-yellow-400/10 border-yellow-400/40"
                    : "bg-white/5 border-white/10"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs sm:text-sm 
                                rounded-full bg-yellow-400 text-black font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg sm:text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-white/60 text-sm">{plan.desc}</p>
              <div className="mt-5 sm:mt-6 text-2xl sm:text-3xl font-bold text-white">{plan.price}</div>

              <ul className="mt-5 sm:mt-6 space-y-3 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="https://login.scan4discount.com/login" className={`mt-7 sm:mt-8 block w-full text-center py-3 rounded-xl font-semibold transition text-sm sm:text-base
                  ${plan.popular ? "bg-yellow-400 text-black hover:bg-yellow-300": "bg-white/10 text-white hover:bg-white/20"}`}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

