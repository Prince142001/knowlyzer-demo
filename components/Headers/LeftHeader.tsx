import React from "react";
interface CenteredHeaderProps {
  headerClassname: string;
  heading: string;
  subHeading: string;
  description: string;
}

export function LeftHeader(props: CenteredHeaderProps) {
  return (
    <header className={`${props.headerClassname} w-full space-y-4`}>
      <h2 className="text-2xl font-medium bg-clip-text text-transparent bg-linear-to-tr from-[#38bdf8] to-[#22d3ee]">
        {props.heading}
      </h2>
      <h3 className="text-5xl font-bold text-white">{props.subHeading}</h3>
      <p className="text-lg text-accent mt-4">{props.description}</p>
    </header>
  );
}

export default LeftHeader;
