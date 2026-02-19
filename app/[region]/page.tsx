import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrustedBy from "@/components/TrustedBy";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="text-white min-h-screen ">
      <Hero/>
      <TrustedBy/>
      <ProblemStatement/>
      <Solution/>
      <HowItWorks />
      <CTASection/>
    </main>
  );
}
