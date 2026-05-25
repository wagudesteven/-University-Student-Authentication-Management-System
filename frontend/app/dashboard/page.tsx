"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type StudentProfile = {
  username: string;
  admission_number: string;
  course: string;
  year_of_study: number;
  semester: string;
  fee_balance: number;
  hostel_status: string;
};

export default function DashboardPage() {
  const { data: session, status } =
    useSession();

  const router = useRouter();

  const [profile, setProfile] =
    useState<StudentProfile | null>(
      null
    );

  useEffect(() => {
    if (
      status ===
      "unauthenticated"
    ) {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (
      !(session as any)
        ?.accessToken
    )
      return;

    fetch(
      "http://127.0.0.1:8000/api/auth/profile/",
      {
        headers: {
          Authorization: `Bearer ${
            (session as any)
              ?.accessToken
          }`,
        },
      }
    )
      .then((res) =>
        res.json()
      )
      .then((data) =>
        setProfile(data)
      );
  }, [session]);

  if (
    status === "loading" ||
    !profile
  ) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold text-slate-700">
          Loading student
          dashboard...
        </p>
      </main>
    );
  }

  const feeCleared =
    profile.fee_balance <= 0;

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}
      <header className="bg-white border-b shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              🎓 Student Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Welcome,
              {" "}
              {
                profile.username
              }
            </p>
          </div>

          <button
            onClick={() =>
              signOut({
                callbackUrl:
                  "/login",
              })
            }
            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* TOP CARDS */}
        <div className="grid gap-5 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
            <p className="text-sm text-slate-500">
              Admission No.
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-800">
              {
                profile.admission_number
              }
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
            <p className="text-sm text-slate-500">
              Course
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-800">
              {
                profile.course
              }
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
            <p className="text-sm text-slate-500">
              Year
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-800">
              Year{" "}
              {
                profile.year_of_study
              }
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
            <p className="text-sm text-slate-500">
              Semester
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-800">
              {
                profile.semester
              }
            </h2>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {/* FEES */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-3 text-lg font-semibold text-slate-800">
              💰 Fee Status
            </h2>

            <p
              className={
                feeCleared
                  ? "text-green-600 text-2xl font-bold"
                  : "text-red-600 text-2xl font-bold"
              }
            >
              KES{" "}
              {
                profile.fee_balance
              }
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {feeCleared
                ? "Fees cleared. Registration open."
                : "Outstanding balance. Registration blocked."}
            </p>

          </div>

          {/* HOSTEL */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-3 text-lg font-semibold text-slate-800">
              🏠 Hostel
            </h2>

            <p className="text-xl font-bold text-slate-800">
              {
                profile.hostel_status
              }
            </p>

            <button
              disabled={
                !feeCleared
              }
              className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white disabled:opacity-50"
            >
              Apply Hostel
            </button>

          </div>

          {/* UNITS */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-3 text-lg font-semibold text-slate-800">
              📚 Units
            </h2>

            <p className="text-slate-600">
              Register for current semester units.
            </p>

            <button
              disabled={
                !feeCleared
              }
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
            >
              Register Units
            </button>

          </div>

        </div>

        {/* PROFILE PANEL */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold text-slate-800">
            👤 Student Profile
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              Username:
              {" "}
              {
                profile.username
              }
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              Admission:
              {" "}
              {
                profile.admission_number
              }
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              Course:
              {" "}
              {
                profile.course
              }
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              Semester:
              {" "}
              {
                profile.semester
              }
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}