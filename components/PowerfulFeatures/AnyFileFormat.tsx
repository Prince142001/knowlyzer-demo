import ThreeDImageCarousel from "../lightswind/3d-image-carousel";

const fileFormatSlides = [
  { id: 1, title: "PDF" },
  { id: 2, title: "DOCX" },
  { id: 3, title: "JSON" },
  { id: 4, title: "CSV" },
  { id: 5, title: "XLSX" },
];

export function AnyFileFormat() {
  return (
    <div className="w-[42%] h-104 p-7 bg-secondary/50 border border-border rounded-2xl relative overflow-hidden">
      <div className="relative z-10 mb-4">
        <h3 className="text-4xl font-semibold text-white">Any File Format</h3>
        <p className="text-lg text-left text-accent mt-4">
          PDF, DOCX, TXT, JSON, and CSV, XLSX
        </p>
        <br />
      </div>

      <div className="flex items-center justify-center">
        <ThreeDImageCarousel
          slides={fileFormatSlides}
          itemCount={5} // <--- Forces 5-card layout
          autoplay={true}
          delay={5}
          className="h-53 w-full"
        />
      </div>
    </div>
  );
}

export default AnyFileFormat;
