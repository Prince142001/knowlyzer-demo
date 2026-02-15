"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface Slide {
  id: number;
  src?: string;
  title?: string;
  href?: string;
}

interface ThreeDImageCarouselProps {
  slides: Slide[];
  itemCount?: 3 | 5; // We will default this to 5
  autoplay?: boolean;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
}

// --- CSS Styles for 5 Cards & Dragging ---
const EMBEDDED_CSS = `
.cascade-slider_container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 20;
    /* Enable touch actions */
    touch-action: pan-y; 
    user-select: none;
    cursor: grab;
}
.cascade-slider_container:active {
    cursor: grabbing;
}

.cascade-slider_slides {
    position: relative;
    height: 100%; 
    width: 100%;
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3); 
    transition: all 0.5s ease; 
    opacity: 0;
    z-index: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- 1. CENTER ITEM --- */
.cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 10; 
}

/* --- 2. INNER NEIGHBORS (Left & Right 1) --- */
.cascade-slider_item.next {
    left: 46%;
    transform: translateY(-50%) translateX(-120%) scale(0.7);
    opacity: 0.8;
    z-index: 5; 
}
.cascade-slider_item.prev {
    left: 54%;
    transform: translateY(-50%) translateX(20%) scale(0.7);
    opacity: 0.8;
    z-index: 5; 
}

/* --- 3. OUTER NEIGHBORS (Left & Right 2 - NEW FOR 5 CARDS) --- */
.cascade-slider_item.next2 {
    left: 46%;
    transform: translateY(-50%) translateX(-180%) scale(0.5);
    opacity: 0.5;
    z-index: 2; 
}
.cascade-slider_item.prev2 {
    left: 54%;
    transform: translateY(-50%) translateX(80%) scale(0.5);
    opacity: 0.5;
    z-index: 2; 
}

/* Arrows */
.cascade-slider_arrow {
    display: flex;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 20; 
    transform: translate(0, -50%);
    padding: 10px;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    color: white;
    transition: background 0.3s;
}
.cascade-slider_arrow:hover { background: rgba(0,0,0,0.8); }

@media screen and (max-width: 575px) {
    .cascade-slider_arrow-left { left: 10px; }
    .cascade-slider_arrow-right { right: 10px; }
}
@media screen and (min-width: 576px) {
    .cascade-slider_arrow-left { left: 0%; }
    .cascade-slider_arrow-right { right: 0%; }
}

/* Card Styling */
.cascade-slider_slides img {
    max-width: 200px;
    height: auto; 
    border-radius: 12px;
    display: block;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.text-slide-card {
    width: 220px;
    height: 140px;
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
    user-select: none; /* Important for dragging text */
}

/* Desktop Adjustments */
@media screen and (min-width: 768px) {
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-130%) scale(0.75); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(30%) scale(0.75); }
    
    /* Adjust outer cards for desktop spacing */
    .cascade-slider_item.next2 { transform: translateY(-50%) translateX(-200%) scale(0.55); }
    .cascade-slider_item.prev2 { transform: translateY(-50%) translateX(100%) scale(0.55); }

    .text-slide-card { width: 160px; height: 120px; font-size: 2rem; }
}
`;

const getSlideClasses = (
  index: number,
  activeIndex: number,
  total: number,
): string => {
  let diff = index - activeIndex;

  // Normalize diff to handle wrap-around (e.g. going from index 0 to last)
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  if (diff === 0) return "now";
  if (diff === 1) return "next";
  if (diff === 2) return "next2";
  if (diff === -1) return "prev";
  if (diff === -2) return "prev2";

  return "";
};

export const ThreeDImageCarousel: React.FC<ThreeDImageCarouselProps> = ({
  slides,
  itemCount = 5, // Default to 5
  autoplay = false,
  delay = 3,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayIntervalRef = useRef<number | null>(null);
  const total = slides.length;

  // --- Drag State ---
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      setActiveIndex((current) => {
        if (direction === "next") return (current + 1) % total;
        else return (current - 1 + total) % total;
      });
    },
    [total],
  );

  // --- Autoplay Logic ---
  useEffect(() => {
    if (autoplay && !isDragging) {
      autoplayIntervalRef.current = window.setInterval(() => {
        navigate("next");
      }, delay * 1000);
    }
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, delay, navigate, isDragging]);

  // --- Drag Handlers ---
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || startX === null) return;

    const clientX =
      "changedTouches" in e
        ? e.changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;
    const diff = startX - clientX;

    // Threshold of 50px to count as a swipe
    if (diff > 50) {
      navigate("next"); // Swiped Left -> Go Next
    } else if (diff < -50) {
      navigate("prev"); // Swiped Right -> Go Prev
    }

    setIsDragging(false);
    setStartX(null);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />
      <div
        className={`cascade-slider_container ${className}`}
        // Attach Mouse Events
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => setIsDragging(false)}
        // Attach Touch Events (for mobile)
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className="cascade-slider_slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`cascade-slider_item ${getSlideClasses(index, activeIndex, total)}`}
            >
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.title || "Slide"}
                  draggable={false}
                />
              ) : (
                <div className="text-slide-card">{slide.title}</div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <div
          className="cascade-slider_arrow cascade-slider_arrow-left"
          onClick={(e) => {
            e.stopPropagation();
            navigate("prev");
          }}
        >
          <ArrowLeftCircle size={32} />
        </div>
        <div
          className="cascade-slider_arrow cascade-slider_arrow-right"
          onClick={(e) => {
            e.stopPropagation();
            navigate("next");
          }}
        >
          <ArrowRightCircle size={32} />
        </div> */}
      </div>
    </>
  );
};

export default ThreeDImageCarousel;
