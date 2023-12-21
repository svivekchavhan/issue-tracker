"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-400": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors font-semibold": true,
              })}
              href={link.href}
            >
              {link.lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
