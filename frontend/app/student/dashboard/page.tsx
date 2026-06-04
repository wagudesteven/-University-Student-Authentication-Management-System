"use client";

import {
  useSession,
  signOut,
} from "next-auth/react";

import Link
from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

type Result = {
  unit: string;
  cat: number;
  exam: number;
  grade: string;
};

export default function StudentDashboard() {

  const router =
    useRouter();

  const {
    data: session,
    status,
  } = useSession();

  const [
    results,
    setResults,
  ] = useState<Result[]>(
    []
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {

    async function load() {

      try {

        if (
          status ===
          "loading"
        )
          return;

        if (!session) {
          router.push(
            "/login"
          );
          return;
        }

        const access =
          (
            session as any
          )?.access;

       const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/api/student/results/`,
            {
              headers: {
                Authorization:
                  `Bearer ${access}`,
              },
            }
          );

        const data =
          await response.json();

        if (
          !response.ok
        ) {
          setError(
            "Failed to load results"
          );

          setLoading(
            false
          );

          return;
        }

        setResults(
          data.results ||
            []
        );

        setLoading(
          false
        );

      } catch {

        setError(
          "Could not connect to server"
        );

        setLoading(
          false
        );
      }
    }

    load();

  }, [
    session,
    status,
    router,
  ]);

  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center bg-gray-100">

        <p className="text-lg font-medium">
          Loading dashboard...
        </p>

      </main>
    );
  }

  return (

    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center shadow">

        <div>

          <h1 className="text-2xl font-bold">
            Student Portal
          </h1>

          <p className="text-sm text-blue-100">
            Welcome{" "}
            {
              (
                session as any
              )?.username
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
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </header>

      {/* QUICK ACTIONS */}
      <section className="p-8">

        <h2 className="text-xl font-bold mb-5">
          Student Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <Link
            href="/student/register-units"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg"
          >
            <h3 className="font-bold text-blue-700">
              Register Units
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Select semester units
            </p>
          </Link>

          <Link
            href="/student/hostel"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg"
          >
            <h3 className="font-bold text-blue-700">
              Hostel Booking
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Apply for hostel
            </p>
          </Link>

          <Link
            href="/student/fees"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg"
          >
            <h3 className="font-bold text-blue-700">
              Fee Balance
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              View account balance
            </p>
          </Link>

          <Link
            href="/student/change-password"
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg"
          >
            <h3 className="font-bold text-blue-700">
              Change Password
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Update account security
            </p>
          </Link>

        </div>

      </section>

      {/* RESULTS */}
      <section className="px-8 pb-8">

        <h2 className="text-xl font-bold mb-5">
          Exam Results
        </h2>

        {error && (

          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        )}

        {!error &&
          results.length ===
            0 && (

            <div className="bg-white p-6 rounded-xl shadow">
              No results found
            </div>
          )}

        <div className="grid md:grid-cols-2 gap-6">

          {results.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6"
              >

                <h3 className="font-bold text-lg text-blue-700 mb-4">
                  {item.unit}
                </h3>

                <p>
                  CAT:
                  <b>
                    {" "}
                    {item.cat}
                  </b>
                </p>

                <p>
                  Exam:
                  <b>
                    {" "}
                    {item.exam}
                  </b>
                </p>

                <p>
                  Grade:
                  <b className="text-green-700">
                    {" "}
                    {item.grade}
                  </b>
                </p>

              </div>
            )
          )}

        </div>

      </section>

    </main>
  );
}