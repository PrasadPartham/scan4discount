import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-yellow-400/10 via-transparent to-yellow-400/10" />

      <div className="relative text-center max-w-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-yellow-400/10 
                          border border-yellow-400/20 flex items-center justify-center">
            <SearchX className="w-10 h-10 text-yellow-400" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-bold text-yellow-400">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-white/70">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 
                       bg-yellow-400 text-black 
                       px-6 py-3 rounded-full 
                       font-semibold hover:scale-105 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full 
                       border border-white/20 
                       hover:bg-white/10 transition"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}
