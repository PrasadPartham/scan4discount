import {
  ScanLine,
  BadgePercent,
  QrCode,
  Repeat,
  TrendingUp,
} from "lucide-react";

export default function BusinessProcessExact() {
  const steps = [
    {
      step: "01",
      title: "Customer Scans QR",
      desc: "Customer scans the QR code placed at your shop.",
      icon: <ScanLine className="w-7 h-7 text-black" />,
    },
    {
      step: "02",
      title: "Instant Discount",
      desc: "A discount is instantly revealed on their phone.",
      icon: <BadgePercent className="w-7 h-7 text-black" />,
    },
    {
      step: "03",
      title: "Purchase Made",
      desc: "Customer completes purchase with excitement.",
      icon: <QrCode className="w-7 h-7 text-black" />,
    },
    {
      step: "04",
      title: "Repeat Visits",
      desc: "Customers return hoping for better discounts.",
      icon: <Repeat className="w-7 h-7 text-black" />,
    },
    {
      step: "05",
      title: "Business Grows",
      desc: "More visits mean more sales & loyal customers.",
      icon: <TrendingUp className="w-7 h-7 text-black" />,
    },
  ];

  return (
    // <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-24 text-white">
    //   {/* Header */}
    //   <div className="text-center mb-16">
    //     <h2 className="text-4xl font-bold">
    //       5 Steps <span className="text-yellow-400">Business Process</span>
    //     </h2>
    //   </div>

    //   {/* Steps Grid */}
    //   <div className="grid grid-cols-1 md:grid-cols-5 relative">
    //     {steps.map((item, index) => (
    //       <div
    //         key={index}
    //         className={`relative px-6 pb-24 text-center
    //           ${index !== steps.length - 1 ? "md:border-r md:border-dashed md:border-white/30" : ""}
    //         `}
    //       >
    //         {/* Step Number */}
    //         <div className="text-yellow-400 font-bold text-xl mb-2">
    //           {item.step}
    //         </div>

    //         {/* Title */}
    //         <h3 className="font-semibold text-lg mb-2">
    //           {item.title}
    //         </h3>

    //         {/* Description */}
    //         <p className="text-sm text-white/70 leading-relaxed">
    //           {item.desc}
    //         </p>

    //         {/* Chevron Step */}
    //         <div
    //           className="absolute bottom-0 left-0 w-full h-20 
    //                      bg-gradient-to-r from-yellow-300/50 to-yellow-400/8
    //                      flex items-center justify-center"
    //           style={{
    //             clipPath:
    //               index === steps.length - 1
    //                 ? "none"
    //                 : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
    //           }}
    //         >
    //           <div className="w-14 h-14 rounded-full bg-yellow-400 
    //                           flex items-center justify-center shadow-lg">
    //             {item.icon}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-20 text-white">
  
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          5 Steps <span className="text-yellow-400">Business Process</span>
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 relative gap-y-10 md:gap-y-0">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`relative px-4 sm:px-6 pb-20 md:pb-24 text-center
              ${
                index !== steps.length - 1
                  ? "md:border-r md:border-dashed md:border-white/30"
                  : ""
              }
            `}
          >
            {/* Step Number */}
            <div className="text-yellow-400 font-bold text-lg sm:text-xl mb-2">
              {item.step}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto">
              {item.desc}
            </p>

            {/* Chevron Step */}
            <div
              className="absolute bottom-0 left-0 w-full h-16 sm:h-20
                        bg-gradient-to-r from-yellow-300/50 to-yellow-400/8
                        flex items-center justify-center"
              style={{
                clipPath:
                  index === steps.length - 1
                    ? "none"
                    : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-yellow-400
                          flex items-center justify-center shadow-lg"
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
