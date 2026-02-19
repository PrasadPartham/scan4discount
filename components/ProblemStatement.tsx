// "use client";

// import { Sparkles, TrendingDown, Repeat, QrCode } from "lucide-react";
// import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid,Legend,} from "recharts";

// const data = [
//   { visit: "Visit 1", withoutDiscount: 30, withDiscount: 70 },
//   { visit: "Visit 2", withoutDiscount: 20, withDiscount: 80 },
//   { visit: "Visit 3", withoutDiscount: 10, withDiscount: 90 },
//   { visit: "Visit 4", withoutDiscount: 5, withDiscount: 95 },
// ];

// export default function ProblemStatementCharts() {
//   return (
//     // <section className="max-w-6xl mx-auto px-6 pt-24 text-white">
//     //   {/* Heading */}
//     //   <div className="text-center max-w-3xl mx-auto">
//     //     <h2 className="text-4xl md:text-5xl font-bold">
//     //       Customers Follow <span className="text-yellow-400">Discounts</span>
//     //     </h2>
//     //     <p className="mt-4 text-white/70">
//     //       Discounts don’t just attract customers — they bring them back again
//     //       and again.
//     //     </p>
//     //   </div>

//     //   {/* Chart + Explanation */}
//     //   <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//     //     {/* Chart */}
//     //     <div className="h-[340px] bg-white/5 border border-white/10 
//     //                     rounded-2xl p-6 backdrop-blur-xl">
//     //       <ResponsiveContainer width="100%" height="100%">
//     //         <LineChart data={data}>
//     //           <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
//     //           <XAxis dataKey="visit" stroke="#ffffff70" />
//     //           <YAxis stroke="#ffffff70" />

//     //           <Tooltip
//     //             contentStyle={{
//     //               backgroundColor: "#0f0f0f",
//     //               borderRadius: "8px",
//     //               border: "1px solid #ffffff20",
//     //               color: "#fff",
//     //             }}
//     //           />

//     //           {/* ✅ Legend Added */}
//     //           <Legend
//     //             verticalAlign="top"
//     //             height={36}
//     //             iconType="circle"
//     //             formatter={(value) => (
//     //               <span className="text-white/80 text-sm">{value}</span>
//     //             )}
//     //           />

//     //           <Line
//     //             type="monotone"
//     //             dataKey="withoutDiscount"
//     //             stroke="#ffffff60"
//     //             strokeWidth={2}
//     //             dot={false}
//     //             name="Without Discounts"
//     //           />

//     //           <Line
//     //             type="monotone"
//     //             dataKey="withDiscount"
//     //             stroke="#facc15"
//     //             strokeWidth={3}
//     //             dot={false}
//     //             name="With Discounts"
//     //           />
//     //         </LineChart>
//     //       </ResponsiveContainer>
//     //     </div>

//     //     {/* Explanation */}
//     //     <div>
//     //       <h3 className="text-2xl font-semibold">
//     //         The Discount Behavior Loop
//     //       </h3>

//     //       <ul className="mt-6 space-y-4 text-white/70 text-sm">
//     //         <ul className="mt-6 space-y-4 text-white/70 text-sm">
//     //           <li className="flex items-start gap-3">
//     //             <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5" />
//     //             <span>Customers are attracted by visible discounts.</span>
//     //           </li>

//     //           <li className="flex items-start gap-3">
//     //             <TrendingDown className="w-5 h-5 text-yellow-400 mt-0.5" />
//     //             <span>Without offers, interest fades quickly.</span>
//     //           </li>

//     //           <li className="flex items-start gap-3">
//     //             <Repeat className="w-5 h-5 text-yellow-400 mt-0.5" />
//     //             <span>Repeated discounts build repeat visits.</span>
//     //           </li>

//     //           <li className="flex items-start gap-3">
//     //             <QrCode className="w-5 h-5 text-yellow-400 mt-0.5" />
//     //             <span>Scan4Discount makes this loop automatic.</span>
//     //           </li>
//     //         </ul>

//     //       </ul>

//     //       <p className="mt-6 text-white/60">
//     //         Customers don’t forget brands — they forget discounts.
//     //       </p>
//     //     </div>
//     //   </div>
//     // </section>
//     <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-24 text-white">
//       <div className="text-center max-w-3xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//           Customers Follow <span className="text-yellow-400">Discounts</span>
//         </h2>

//         <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
//           Discounts don’t just attract customers — they bring them back again
//           and again.
//         </p>
//       </div>

//       <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

//         <div className="h-[260px] sm:h-[320px] md:h-[340px] bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
//               <XAxis dataKey="visit" stroke="#ffffff70" />
//               <YAxis stroke="#ffffff70" />

//               <Tooltip contentStyle={{backgroundColor: "#0f0f0f",borderRadius: "8px",border: "1px solid #ffffff20",color: "#fff",}}/>
//               <Legend verticalAlign="top" height={36} iconType="circle" formatter={(value) => (
//                   <span className="text-white/80 text-xs sm:text-sm">{value}</span>)}/>
//               <Line type="monotone" dataKey="withoutDiscount" stroke="#ffffff60" strokeWidth={2} dot={false} name="Without Discounts"/>
//               <Line type="monotone" dataKey="withDiscount" stroke="#facc15" strokeWidth={3} dot={false} name="With Discounts"/>
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div>
//           <h3 className="text-xl sm:text-2xl font-semibold">
//             The Discount Behavior Loop
//           </h3>

//           <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
//             <li className="flex items-start gap-3">
//               <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
//               <span>Customers are attracted by visible discounts.</span>
//             </li>

//             <li className="flex items-start gap-3">
//               <TrendingDown className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
//               <span>Without offers, interest fades quickly.</span>
//             </li>

//             <li className="flex items-start gap-3">
//               <Repeat className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
//               <span>Repeated discounts build repeat visits.</span>
//             </li>

//             <li className="flex items-start gap-3">
//               <QrCode className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
//               <span>Scan4Discount makes this loop automatic.</span>
//             </li>
//           </ul>

//           <p className="mt-5 sm:mt-6 text-sm sm:text-base text-white/60">
//             Customers don’t forget brands — they forget discounts.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { Sparkles, TrendingDown, Repeat, QrCode } from "lucide-react";
import { useState, useEffect } from "react";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid,Legend,} from "recharts";

const data = [
  { visit: "Visit 1", withoutDiscount: 30, withDiscount: 70 },
  { visit: "Visit 2", withoutDiscount: 20, withDiscount: 80 },
  { visit: "Visit 3", withoutDiscount: 10, withDiscount: 90 },
  { visit: "Visit 4", withoutDiscount: 5, withDiscount: 95 },
];

export default function ProblemStatementCharts() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-24 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Customers Follow <span className="text-yellow-400">Discounts</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
          Discounts don't just attract customers — they bring them back again
          and again.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
          {isMounted ? (
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="visit" stroke="#ffffff70" />
              <YAxis stroke="#ffffff70" />

              <Tooltip contentStyle={{backgroundColor: "#0f0f0f",borderRadius: "8px",border: "1px solid #ffffff20",color: "#fff",}}/>
              <Legend verticalAlign="top" height={36} iconType="circle" formatter={(value) => (
                  <span className="text-white/80 text-xs sm:text-sm">{value}</span>)}/>
              <Line type="monotone" dataKey="withoutDiscount" stroke="#ffffff60" strokeWidth={2} dot={false} name="Without Discounts"/>
              <Line type="monotone" dataKey="withDiscount" stroke="#facc15" strokeWidth={3} dot={false} name="With Discounts"/>
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-[280px] flex items-center justify-center text-white/50">
              Loading chart...
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">
            The Discount Behavior Loop
          </h3>

          <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
              <span>Customers are attracted by visible discounts.</span>
            </li>

            <li className="flex items-start gap-3">
              <TrendingDown className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
              <span>Without offers, interest fades quickly.</span>
            </li>

            <li className="flex items-start gap-3">
              <Repeat className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
              <span>Repeated discounts build repeat visits.</span>
            </li>

            <li className="flex items-start gap-3">
              <QrCode className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 mt-0.5" />
              <span>Scan4Discount makes this loop automatic.</span>
            </li>
          </ul>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-white/60">
            Customers don't forget brands — they forget discounts.
          </p>
        </div>

      </div>
    </section>
  );
}