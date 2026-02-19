"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // <section id="home" className="w-full px-6">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

    //     {/* Text Section */}
    //     <motion.div
    //       initial={{ opacity: 0, x: -40 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.7 }}
    //       className="text-center md:text-left"
    //     >
    //       <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
    //         Attract More Customers <br />
    //         with{" "}
    //         <span className="text-yellow-400">
    //           Smart QR Discounts
    //         </span>
    //       </h1>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.2 }}
    //         className="mt-6 text-lg font-medium text-white/80 max-w-lg mx-auto md:mx-0"
    //       >
    //         Create discount offers instantly, generate QR codes, and let customers
    //         unlock deals by scanning — all in seconds.
    //       </motion.p>

    //       {/* Buttons */}
    //       <motion.div
    //         initial="hidden"
    //         animate="visible"
    //         variants={{
    //           hidden: {},
    //           visible: {
    //             transition: {
    //               staggerChildren: 0.15,
    //             },
    //           },
    //         }}
    //         className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap"
    //       >
    //         <motion.div
    //           variants={{
    //             hidden: { opacity: 0, y: 20 },
    //             visible: { opacity: 1, y: 0 },
    //           }}
    //         >
    //           <Link
    //             href="/signup"
    //             className="px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition"
    //           >
    //             Get Started
    //           </Link>
    //         </motion.div>

    //         <motion.div
    //           variants={{
    //             hidden: { opacity: 0, y: 20 },
    //             visible: { opacity: 1, y: 0 },
    //           }}
    //         >
    //           <Link
    //             href="/#features"
    //             className="px-8 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition"
    //           >
    //             Learn More
    //           </Link>
    //         </motion.div>
    //       </motion.div>

    //       {/* Trust Text */}
    //       <motion.p
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.5 }}
    //         className="mt-8 text-sm text-white/50"
    //       >
    //         Trusted by local shops, cafes & retail businesses.
    //       </motion.p>
    //     </motion.div>

    //     {/* Image Section */}
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.9, x: 40 }}
    //       animate={{ opacity: 1, scale: 1, x: 0 }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //       className="
    //         relative 
    //         w-full 
    //         max-w-md 
    //         mx-auto 
    //         aspect-square
    //         md:max-w-xl
    //         lg:max-w-2xl
    //       "
    //     >
    //       <Image
    //         src="/home.png"
    //         alt="Hero Image"
    //         fill
    //         className="object-contain"
    //         priority
    //       />
    //     </motion.div>

    //   </div>
    // </section>

    <section id="home" className="w-full px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 items-center mt-4 md:mt-0">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            Attract More Customers <br />
            with{" "}
            <span className="text-yellow-400">
              Smart QR Discounts
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg font-medium text-white/80 max-w-lg mx-auto md:mx-0">
            Create discount offers instantly, generate QR codes, and let customers
            unlock deals by scanning — all in seconds.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={{hidden: {},visible: {transition: {staggerChildren: 0.15,},},}}
            className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
            <motion.div variants={{hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0 },}}>
              <Link href="/register" className="px-6 sm:px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition text-sm sm:text-base">
                Get Started
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0 },}}>
              <Link href="/features" className="px-6 sm:px-8 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition text-sm sm:text-base">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/50">
            Trusted by local shops, cafes & retail businesses.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto aspect-square">
          <Image src="/home.png" alt="Hero Image" fill className="object-contain" priority/>
        </motion.div>

      </div>
    </section>
  );
}
