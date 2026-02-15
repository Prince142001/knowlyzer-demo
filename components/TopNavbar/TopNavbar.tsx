"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export function TopNavbar() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Pricing", link: "/pricing" },
  ];

  const navButtons = [
    { name: "Sign Up", link: "/signup" },
    { name: "Get Started", link: "/get-started" },
  ];

  return (
    <Navbar>
      <NavBody>
        {/* Container for alignment */}
        <div className="flex w-full items-center justify-between">
          <NavbarLogo />

          <NavItems items={navLinks} />

          {/* FIX: Render the buttons here */}
          <div className="flex items-center space-x-2">
            {navButtons.map((btn, idx) => (
              <NavbarButton
                key={idx}
                href={btn.link}
                variant={idx === 1 ? "primary" : "secondary"} // Optional: Make the second button pop
              >
                {btn.name}
              </NavbarButton>
            ))}
          </div>
        </div>
      </NavBody>
    </Navbar>
  );
}
