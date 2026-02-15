"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// 1. Data structure for cleaner code
const CHAT_MESSAGES = [
  {
    id: 1,
    role: "user",
    text: "Tell me about Knowlyzer",
    avatar: "/assets/icons/avatar.png",
  },
  {
    id: 2,
    role: "assistant",
    text: "I am an AI-powered data analysis assistant. I can read your documents (PDFs, spreadsheets, text files) and index your website content to provide instant, accurate answers based strictly on your data.",
    avatar: "/assets/light-favicon.png",
  },
  {
    id: 3,
    role: "user",
    text: "What kind of files can I upload for analysis?",
    avatar: "/assets/icons/avatar.png",
  },
  {
    id: 4,
    role: "assistant",
    text: "I support almost any text-based format. You can upload PDFs, DOCX, TXT, JSON, CSV, and XLSX files. I can even analyze structured data from spreadsheets to help you find trends.",
    avatar: "/assets/light-favicon.png",
  },
];

export function TrustButVerify() {
  return (
    <div className="w-[55%] min-h-100 p-7 bg-secondary/50 border border-border rounded-2xl relative overflow-hidden flex flex-col justify-between">
      <div className="relative z-10 mb-4 bg-secondary/50 backdrop-blur-sm">
        <h3 className="text-4xl font-semibold text-white">Trust, but Verify</h3>
        <p className="text-lg text-left text-accent mt-4">
          Knowlyzer doesn't just hallucinate. It cites the exact page and
          paragraph where it found the answer.
        </p>
      </div>

      {/* 2. Vertical Marquee Container */}
      {/* We add a gradient mask manually for the vertical fade effect */}
      <div
        className="flex-1 overflow-hidden relative max-h-[219.1px] h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <InfiniteSlider
          direction="vertical"
          speed={40}
          gap={24}
          className="h-[219.1px] w-full"
        >
          {CHAT_MESSAGES.map((msg, idx) => (
            <div key={idx} className="w-full">
              {msg.role === "user" ? (
                // --- USER MESSAGE ---
                <div className="w-full flex items-end justify-end">
                  <div className="max-w-sm w-full">
                    <div className="flex gap-3 items-end justify-end">
                      <div className="border border-border rounded-br-0 rounded-bl-2xl rounded-t-2xl px-3.5 py-2 bg-primary/10">
                        <p className="text-white text-base font-normal">
                          {msg.text}
                        </p>
                      </div>
                      <figure className="w-12 h-12 p-2.5 shrink-0 flex items-center justify-center rounded-full bg-secondary/50 border border-border">
                        <img
                          src={msg.avatar}
                          alt="User"
                          className="w-6 h-6 object-contain"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              ) : (
                // --- ASSISTANT MESSAGE ---
                <div className="w-full flex items-start justify-start">
                  <div className="max-w-sm w-full">
                    <div className="flex gap-3 items-start justify-start">
                      <figure className="w-12 h-12 p-2.5 shrink-0 flex items-center justify-center rounded-full bg-secondary/50 border border-border">
                        <img
                          src={msg.avatar}
                          alt="Knowlyzer"
                          className="w-6 h-6 object-contain"
                        />
                      </figure>
                      <div className="border border-border rounded-tl-0 rounded-tr-2xl rounded-b-2xl px-3.5 py-2 bg-secondary/80">
                        <p className="text-white text-base font-normal">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}

export default TrustButVerify;
