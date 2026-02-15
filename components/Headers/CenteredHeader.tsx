interface CenteredHeaderProps {
  headerClassname: string;
  heading: string;
  subHeading: string;
  description: string;
}

export function CenteredHeader(props: CenteredHeaderProps) {
  return (
    <header className={`${props.headerClassname} w-full`}>
      <h2 className="text-2xl font-medium text-center bg-clip-text text-transparent bg-linear-to-tr from-[#38bdf8] to-[#22d3ee]">
        {props.heading}
      </h2>
      <h3 className="text-5xl font-bold text-center text-white">
        {props.subHeading}
      </h3>
      <p className="text-lg text-center text-accent mt-4">
        {props.description}
      </p>
    </header>
  );
}

export default CenteredHeader;
