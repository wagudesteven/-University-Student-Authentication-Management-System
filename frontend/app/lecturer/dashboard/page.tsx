"use client";

import ProtectedRoute
from "@/components/ProtectedRoute";

import Link
from "next/link";

import {
  signOut,
} from "next-auth/react";

export default function LecturerDashboard() {

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gray-100">

        {/* HEADER */}
        <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center shadow">

          <div>

            <h1 className="text-3xl font-bold">
              Lecturer Dashboard
            </h1>

            <p className="text-blue-100 mt-1">
              Manage students, results and academic records
            </p>

          </div>

          <button
            onClick={() =>
              signOut({
                callbackUrl:
                  "/login",
              })
            }
            className="
              bg-red-500
              hover:bg-red-600
              px-4
              py-2
              rounded-lg
              font-medium
            "
          >
            Logout
          </button>

        </header>

        {/* BODY */}
        <section className="p-8">

          <div className="grid md:grid-cols-3 gap-6">

            {/* ADD RESULTS */}
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">

              <h2 className="text-xl font-bold text-blue-700">
                Add Results
              </h2>

              <p className="text-gray-500 mt-3">
                Enter CAT marks,
                exam marks
                and grades.
              </p>

              <Link
                href="/lecturer/add-result"
                className="
                  inline-block
                  mt-5
                  bg-blue-700
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                Open
              </Link>

            </div>

            {/* STUDENTS */}
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">

              <h2 className="text-xl font-bold text-blue-700">
                Students
              </h2>

              <p className="text-gray-500 mt-3">
                View student
                academic records,
                units and grades.
              </p>

              <Link
                href="/student/dashboard"
                className="
                  inline-block
                  mt-5
                  bg-blue-700
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                View
              </Link>

            </div>

            {/* SUMMARY */}
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">

              <h2 className="text-xl font-bold text-blue-700">
                Results Summary
              </h2>

              <p className="text-gray-500 mt-3">
                Check semester
                performance
                and progress.
              </p>

              <Link
                href="/lecturer/results"
                className="
                  inline-block
                  mt-5
                  bg-blue-700
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                Open
              </Link>

            </div>

          </div>

        </section>

      </main>

    </ProtectedRoute>
  );
}