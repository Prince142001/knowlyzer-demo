import CenteredHeader from "../Headers/CenteredHeader";
import AnyFileFormat from "./AnyFileFormat";
import { IndexYourWebsite } from "./IndexYourWebsite";
import TrustButVerify from "./TrustButVerify";
import VerifiedDomain from "./VerifiedDomain";

export function PowerfulFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredHeader
          headerClassname="max-w-4xl w-full mx-auto"
          heading="Powerful Features"
          subHeading="Everything you need to chat with your data"
          description="From static PDFs to dynamic websites, ClearChat handles it all securely"
        />
      </div>
      <div className="mx-auto w-full max-w-360">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
          <IndexYourWebsite />
          <AnyFileFormat />
          <VerifiedDomain />
          <TrustButVerify />
        </div>
      </div>
    </section>
  );
}
