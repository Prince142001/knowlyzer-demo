import React from "react";
import LeftHeader from "../Headers/LeftHeader";
import GetStartedButton from "../Buttons/GetStarted";
import Card from "./Card";

function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-360 relative">
      <div>
        <LeftHeader
          headerClassname="max-w-2xl w-full"
          heading="How It Works"
          subHeading="Go from Data to Answers in seconds"
          description=""
        />
        <div className="mt-8">
          <GetStartedButton />
        </div>
      </div>
      <div className="h-screen absolute top-20 left-0 w-full">
        <div className="absolute top-0 right-0">
          <div className="absolute -top-45 -left-16 -z-10">
            <span className="text-[300px] text-white">3</span>
          </div>
          <Card
            icon="./../assets/icons/knowlyzer-blue-logo.png"
            iconName="Step 1"
            title="Just Ask"
            description="Chat with your data immediately. No training time required"
          />
        </div>

        <div className="absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -top-45 -left-16 -z-10">
            <span className="text-[300px] text-white">2</span>
          </div>
          <Card
            icon="./../assets/icons/spark.png"
            iconName="Step 1"
            title="Instant Indexing"
            description="We process your data locally and securely into vector embeddings."
          />
        </div>

        <div className="absolute bottom-0 left-15">
          <div className="absolute -top-45 -left-16 -z-10">
            <span className="text-[300px] text-white">1</span>
          </div>
          <Card
            icon="./../assets/icons/cloud.png"
            iconName="Step 1"
            title="Connect Your Data"
            description="Upload a PDF, drop a JSON file, or paste any website URL."
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
