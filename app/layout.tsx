// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import { Toaster } from 'sonner';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar/>
//         {children}
//         <Footer/>
//         <Toaster 
//           position="top-right" 
//           richColors 
//           closeButton
//           toastOptions={{
//             style: {
//               background: 'rgba(0, 0, 0, 0.9)',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//               color: 'white',
//             },
//           }}
//         />
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scan4Discount",
  description: "Scan & Save More",
  icons: {
    icon: "/scan4discount.jpeg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
            },
          }}
        />
      </body>
    </html>
  );
}
