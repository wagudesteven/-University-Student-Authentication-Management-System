"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* top navigation */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-slate-800">
            🎓 Student Portal
          </h1>

          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </header>

      {/* hero section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">

        {/* left */}
        <div className="flex flex-col justify-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            University Management System
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-tight text-slate-900">
            Manage your semester in one place
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            View fee balances, register units, apply for hostel,
            and access your academic profile securely.
          </p>

          <div className="flex gap-4">

            <Link
              href="/login"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Student Login
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Dashboard
            </Link>

          </div>
        </div>

        {/* right cards */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 text-3xl">
              📚
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-800">
              Unit Registration
            </h3>

            <p className="text-sm text-slate-600">
              Register for current semester units online.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 text-3xl">
              🏠
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-800">
              Hostel Application
            </h3>

            <p className="text-sm text-slate-600">
              Apply and track hostel approval.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 text-3xl">
              💰
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-800">
              Fee Balance
            </h3>

            <p className="text-sm text-slate-600">
              View balances and payment status.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 text-3xl">
              👤
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-800">
              Student Profile
            </h3>

            <p className="text-sm text-slate-600">
              View admission details and academic info.
            </p>
          </div>

        </div>

      </section>

      {/* footer */}
      <footer className="border-t bg-white py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} University Student Portal
      </footer>

    </main>
  );
}