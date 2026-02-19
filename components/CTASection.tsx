import { ArrowRight, QrCode } from "lucide-react";

export default function CTASection() {
  return (
    // <section className="relative overflow-hidden pt-20 px-6">
    //   {/* Background */}
    //   <div className="absolute inset-0" />
    //   <div className="absolute inset-0" />

    //   {/* Content */}
    //   <div className="relative max-w-6xl mx-auto text-center text-white">
    //     <div className="flex justify-center mb-6">
    //       <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
    //         <QrCode className="w-8 h-8 text-yellow-400" />
    //       </div>
    //     </div>

    //     <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
    //       Turn One-Time Visitors <br />
    //       <span className="text-yellow-400">Into Repeat Customers</span>
    //     </h2>

    //     <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10">
    //       Customers love discounts.  
    //       Scan4Discount keeps them coming back again and again — automatically.
    //     </p>

    //     {/* CTA Buttons */}
    //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //       <button className="inline-flex items-center justify-center gap-2 
    //                          bg-yellow-400 text-black 
    //                          px-8 py-4 rounded-full 
    //                          text-lg font-semibold 
    //                          hover:scale-105 transition">
    //         Get Started Now
    //         <ArrowRight className="w-5 h-5" />
    //       </button>

    //       <button className="inline-flex items-center justify-center 
    //                          px-8 py-4 rounded-full 
    //                          text-lg font-semibold 
    //                          border border-white/40 
    //                          hover:bg-yellow-400/10 transition">
    //         Request Demo
    //       </button>
    //     </div>
    //   </div>
    // </section>

    <section className="relative overflow-hidden pt-12 sm:pt-20 px-4 sm:px-6">
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />

      <div className="relative max-w-6xl mx-auto text-center text-white">

        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <QrCode className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
          Turn One-Time Visitors <br />
          <span className="text-yellow-400">Into Repeat Customers</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
          Customers love discounts.  
          Scan4Discount keeps them coming back again and again — automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

          <button className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition">
            Get Started Now
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border border-white/40 hover:bg-yellow-400/10 transition">
            Request Demo
          </button>
        </div>
      </div>
    </section>

  );
}
