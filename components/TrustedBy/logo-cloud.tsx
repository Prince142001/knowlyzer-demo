"use client";

import { animate, motion, useMotionValue } from "motion/react";
import React, { CSSProperties, useEffect, useState } from "react";
import useMeasure from "react-use-measure";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    if (size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
  fadeWidth?: number;
  containerClassName?: string;
};

export function BlurredInfiniteSlider({
  children,
  fadeWidth = 80,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, #1e293b ${fadeWidth}px, #1e293b calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, #1e293b ${fadeWidth}px, #1e293b calc(100% - ${fadeWidth}px), transparent)`,
  };

  return (
    <div
      className={cn("relative w-full", containerClassName)}
      style={maskStyle}
    >
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  );
}

const LOGOS = [
  {
    src: "https://farberpharma.com/assets/images/logo.webp",
    alt: "Farber Pharma",
    height: 45,
  },
  {
    src: "https://zonetocode.com/assets/images/logo.png",
    alt: "ZoneToCode",
    height: 45,
  },
  {
    src: "https://cdn.picflow.com/web/64x64/01c9c0b92e/picflow-symbol-primary.svg",
    alt: "Picflow",
    height: 45,
  },
  {
    src: "https://cdn.brandfetch.io/idZHcZ_i7F/w/800/h/1200/theme/dark/symbol.webp?c=1bxid64Mup7aczewSAYMX&t=1729268241679",
    alt: "Figma",
    height: 45,
  },
  {
    src: "https://www.dynamitetechnology.in/images/logo2.png",
    alt: "Dynamite Technology",
    height: 45,
  },
];

export default function LogoCloudDemoPage() {
  return (
    <section className="bg-primary overflow-hidden py-10 w-full border-y border-border">
      <div className="mx-auto w-full max-w-360">
        {/* Эта структура отвечает за адаптивную верстку */}
        <div className="flex flex-col items-center md:flex-row">
          {/* На экранах 'md' и шире этот блок будет слева с линией */}
          <div className="shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
            <p className="text-xl font-normal leading-6 text-accent">
              Trusted by leading companies
              {/* worldwide */}
            </p>
          </div>
          {/* На маленьких экранах этот блок будет под текстом */}
          <div className="w-full py-6 md:w-auto md:flex-1">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
              fadeWidth={80} // Ширина затухания по краям
            >
              {LOGOS.map((logo) => (
                <div key={logo.src} className="flex">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width="auto"
                    style={{ height: `${logo.height}px` }}
                    className="
    mx-auto w-fit 
    transition-all duration-300
    
    /* MAKES IT GRAY */
    grayscale 
    brightness-75  /* Adjust this: 50 is darker, 100 is lighter */
    opacity-70     /* Optional: makes it blend slightly with background */

    /* RESET ON HOVER */
    hover:grayscale-0 
    hover:brightness-100
    hover:opacity-100
    
    dark:invert
  "
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
