import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { PowerfulFeatures } from "@/components/PowerfulFeatures/PowerfulFeatures";
import LogoCloud from "@/components/TrustedBy/logo-cloud";
export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <LogoCloud />
      <PowerfulFeatures />
      <HowItWorks />
    </main>
  );
}
