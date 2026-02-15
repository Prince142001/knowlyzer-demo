import Link from "next/link";

const ViewDemoButton = () => {
  return (
    <Link
      href="/view-demo"
      className="bg-white px-6 py-3 border border-border rounded-full text-primary text-lg font-medium"
    >
      View Demo
    </Link>
  );
};
export default ViewDemoButton;
