"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="
        w-64
        min-h-screen
        bg-white
        border-r
        p-5
        space-y-4
      "
    >
      <Link href="/student/dashboard">
        Student Dashboard
      </Link>

      <Link href="/student/results">
        Results
      </Link>

      <Link href="/student/units">
        Units
      </Link>

      <Link href="/student/hostel">
        Hostel
      </Link>

      <Link href="/lecturer/dashboard">
        Lecturer Dashboard
      </Link>

      <Link href="/lecturer/add-result">
        Add Result
      </Link>
    </aside>
  );
}