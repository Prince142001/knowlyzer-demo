import Link from "next/link";

const GetStartedButton = () => {
  return (
    <Link
      href="/get-started"
      className="bg-secondary/50 px-6 py-3 border border-border rounded-full text-white text-lg font-medium"
    >
      Get Started
    </Link>
  );
};
export default GetStartedButton;
