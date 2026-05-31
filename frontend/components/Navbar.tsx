"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        bg-blue-700
        text-white
        h-16
        px-6
        flex
        items-center
        justify-between
        shadow
      "
    >
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-lg"
      >
        <GraduationCap size={24} />
        University Portal
      </Link>

      <nav className="flex gap-6">
        <Link href="/login">Login</Link>
        <Link href="/lecturer/register">
          Lecturer Register
        </Link>
      </nav>
    </header>
  );
}