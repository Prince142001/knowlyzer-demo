import GetStartedButton from "@/components/Buttons/GetStarted";
import ViewDemoButton from "@/components/Buttons/ViewDemo";
import { WavyBackground } from "../ui/wavy-background";

const HeroSection = () => {
  return (
    <WavyBackground
      className=" mx-auto pb-40" // Adjusts content width and spacing
      backgroundFill="#0f172a" // Change to "black" if you want dark mode
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]} // Custom colors
      waveOpacity={0.8}
      // waveBlur={0.05}
      speed="fast"
      waveWidth={200}
      waveHeight={10}
    >
      <div className="mx-auto w-full max-w-360">
        <div className="flex flex-row gap-0">
          <div className="w-[45%]">
            <h1 className="text-8xl font-bold leading-none tracking-tight text-white">
              Don't Search. Just Ask
            </h1>
            <p className="text-xl font-normal leading-6 mt-7 text-accent">
              Stop scrolling through endless documents. Just upload a PDF or
              paste a URL, and get instant, accurate answers powered by AI
            </p>

            <div className="mt-10 flex flex-row gap-4">
              <GetStartedButton />
              <ViewDemoButton />
            </div>
          </div>
          <div className="w-[55%]">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to Knowlyzer
            </h1>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default HeroSection;
