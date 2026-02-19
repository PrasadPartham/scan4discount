// // // // // // import Link from "next/link";
// // // // // // import { MapPin, Phone, Mail } from "lucide-react";
// // // // // // import Image from "next/image";

// // // // // // export default function Footer() {
// // // // // //   return (
// // // // // //     <footer id="contact" className="w-full border-t border-white/10 bg-black/20 backdrop-blur-xl mt-12 md:mt-20">
// // // // // //       <div className="max-w-360 mx-auto px-6 py-4">

// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

// // // // // //           <div>
// // // // // //             <Link href="/" className="flex items-center gap-1 text-3xl font-bold text-white tracking-tight">
// // // // // //               <Image src="/logo1.png" alt="Scan4Discount Logo" width={40} height={40} className="object-contain"/>
// // // // // //               <span>Scan<span className="text-yellow-400">4</span>Discount</span>
// // // // // //             </Link>

// // // // // //             <p className="mt-4 text-white/70 text-sm leading-relaxed">
// // // // // //               Smart QR discount campaigns that help shop owners attract more
// // // // // //               customers instantly.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="text-lg font-semibold text-white">Quick Links</h3>

// // // // // //             <div className="mt-4 flex flex-col gap-3 text-white/60 text-sm">
// // // // // //               <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
// // // // // //               <Link href="/features" className="hover:text-yellow-400 transition">Features</Link>
// // // // // //               <Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
// // // // // //               <Link href="/contact" className="hover:text-yellow-400 transition">Contact us</Link>
// // // // // //               <Link href="https://login.scan4discount.com/login" className="text-yellow-400/70 hover:text-yellow-400 transition">Get Started</Link>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="text-lg font-semibold text-white">Contact</h3>

// // // // // //             <div className="mt-5 space-y-5 text-sm text-white/70">
// // // // // //              <div className="flex gap-3">
// // // // // //                 <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
// // // // // //                 <p>
// // // // // //                   <span className="font-semibold text-white">India Location -</span>
// // // // // //                   <br />Main Branch: QHub - Co-working Space,<br />
// // // // // //                   4th Floor, Madhapur Metro Station,
// // // // // //                   <br />Road No 36 & 37, Jubilee Hills,<br />
// // // // // //                   Telangana 500033
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="flex gap-3">
// // // // // //                 <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
// // // // // //                 <p>
// // // // // //                   <span className="font-semibold text-white">USA Location -</span>
// // // // // //                   <br />8751 Collin McKinney Pkwy, Suite 1102,<br />
// // // // // //                   McKinney, TX 75070
// // // // // //                 </p>
// // // // // //               </div>

             

// // // // // //               <div className="flex gap-3">
// // // // // //                 <Phone className="w-5 h-5 text-yellow-400 mt-1" />
// // // // // //                 <p>
// // // // // //                   +91 8977639611 <br />
// // // // // //                   +1 (214) 842 - 5345
                  
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="flex gap-3">
// // // // // //                 <Mail className="w-5 h-5 text-yellow-400 mt-1" />
// // // // // //                 <p>support@scan4discount.com</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="mt-4 border-t border-white/10 pt-4 flex justify-center">
// // // // // //           <p className="text-yellow-400 text-sm text-center">
// // // // // //             © {new Date().getFullYear()} Scan4Discount. All rights reserved.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </footer>
// // // // // //   );
// // // // // // }

// import Link from "next/link";
// import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer id="contact" className="w-full border-t border-white/10 bg-black/20 backdrop-blur-xl mt-12 md:mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-4">

//         <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_1fr_1.3fr] gap-6 md:gap-8">

//           <div>
//             <Link href="/" className="flex items-center gap-1 text-3xl font-bold text-white tracking-tight">
//               <Image src="/logo1.png" alt="Scan4Discount Logo" width={40} height={40} className="object-contain"/>
//               <span>Scan<span className="text-yellow-400">4</span>Discount</span>
//             </Link>

//             <p className="mt-4 text-white/70 text-sm leading-relaxed">
//               Smart QR discount campaigns that help shop owners attract more
//               customers instantly.
//             </p>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex gap-4">
//               <Link 
//                 href="https://www.instagram.com/scan4discount/" 
//                 target="_blank"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
//               >
//                 <Instagram className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
//               </Link>
              
//               <Link 
//                 href="https://www.facebook.com/profile.php?id=61587573665502" 
//                 target="_blank"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
//               >
//                 <Facebook className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
//               </Link>
              
//               <Link 
//                 href="https://www.youtube.com/@Scan4Discount" 
//                 target="_blank"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
//               >
//                 <Youtube className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
//               </Link>
              
//               <Link 
//                 href="https://x.com/Scan4Discount" 
//                 target="_blank"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
//               >
//                 <Twitter className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Quick Links</h3>

//             <div className="mt-4 flex flex-col gap-3 text-white/60 text-sm">
//               <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
//               <Link href="/features" className="hover:text-yellow-400 transition">Features</Link>
//               <Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
//               <Link href="/contact" className="hover:text-yellow-400 transition">Contact us</Link>
//               <Link href="https://login.scan4discount.com/login" className="text-yellow-400/70 hover:text-yellow-400 transition">Get Started</Link>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            
//             <p className="mt-4 text-white/70 text-sm">
//               Subscribe to our newsletter for tips and updates.
//             </p>
            
//             <form className="mt-4 flex flex-col gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-yellow-400 text-sm"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition text-sm"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Contact</h3>

//             <div className="mt-5 space-y-5 text-sm text-white/70">
//              <div className="flex gap-3">
//                 <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
//                 <p>
//                   <span className="font-semibold text-white">India Location -</span>
//                   <br />Main Branch: QHub - Co-working Space,<br />
//                   4th Floor, Madhapur Metro Station,
//                   <br />Road No 36 & 37, Jubilee Hills,<br />
//                   Telangana 500033
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
//                 <p>
//                   <span className="font-semibold text-white">USA Location -</span>
//                   <br />8751 Collin McKinney Pkwy, Suite 1102,<br />
//                   McKinney, TX 75070
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
//                 <p>
//                   +91 8977639611 <br />
//                   +1 (214) 842 - 5345
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
//                 <p>support@scan4discount.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 border-t border-white/10 pt-4 flex justify-center">
//           <p className="text-yellow-400 text-sm text-center">
//             © {new Date().getFullYear()} Scan4Discount. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully subscribed!', {
          description: 'Check your email for confirmation.',
        });
        setEmail(''); // Clear the input
      } else {
        toast.error('Subscription failed', {
          description: data.error || 'Please try again.',
        });
      }
    } catch (error) {
      toast.error('Connection error', {
        description: 'Please check your internet and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="w-full border-t border-white/10 bg-black/20 backdrop-blur-xl mt-12 md:mt-20">
      <div className="max-w-360 mx-auto px-6 py-4">

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_1.3fr_1fr] gap-6 md:gap-8">

          <div>
            <Link href="/" className="flex items-center gap-1 text-3xl font-bold text-white tracking-tight">
              <Image src="/logo1.png" alt="Scan4Discount Logo" width={40} height={40} className="object-contain"/>
              <span>Scan<span className="text-yellow-300">4</span>Discount</span>
            </Link>

            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Smart QR discount campaigns that help shop owners attract more
              customers instantly.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex gap-4">
              <Link 
                href="https://www.instagram.com/scan4discount/" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
              </Link>
              
              <Link 
                href="https://www.facebook.com/profile.php?id=61587573665502" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
              </Link>
              
              <Link 
                href="https://www.youtube.com/@Scan4Discount" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
              >
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
              </Link>
              
              <Link 
                href="https://x.com/Scan4Discount" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400/20 flex items-center justify-center transition group"
              >
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-white/60 text-sm">
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link href="/features" className="hover:text-yellow-400 transition">Features</Link>
              <Link href="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact us</Link>
              <Link href="/register" className="text-yellow-400/70 hover:text-yellow-400 transition">Get Started</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            
            <p className="mt-4 text-white/70 text-sm">
              Subscribe to our newsletter for tips and updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col gap-2 max-w-68">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-yellow-400 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-5 text-sm text-white/70">
             <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">India Location -</span>
                  <br />Main Branch: QHub - Co-working Space,<br />
                  4th Floor, Madhapur Metro Station,
                  <br />Road No 36 & 37, Jubilee Hills,<br />
                  Telangana 500033
                </p>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">USA Location -</span>
                  <br />8751 Collin McKinney Pkwy, Suite 1102,<br />
                  McKinney, TX 75070
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p>
                  +91 8977639611 <br />
                  +1 (214) 842 - 5345
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p>support@scan4discount.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 flex justify-center">
          <p className="text-yellow-400 text-sm text-center">
            © {new Date().getFullYear()} Scan4Discount. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}