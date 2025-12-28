"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 transition-all duration-300 ${
        path.startsWith(href)
          ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent"
          : "text-white/80 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.8)]"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
