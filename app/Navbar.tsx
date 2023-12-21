import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "issues", href: "/issue" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.lable}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
