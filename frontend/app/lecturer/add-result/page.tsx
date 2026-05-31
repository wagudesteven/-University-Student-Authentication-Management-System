"use client";

import {
  useState,
} from "react";

import Link
from "next/link";

import {
  signOut,
} from "next-auth/react";

import ProtectedRoute
from "@/components/ProtectedRoute";

import api
from "@/lib/api";

export default function AddResultPage() {

  const [
    form,
    setForm,
  ] = useState({
    student_id: "",
    unit_id: "",
    cat_marks: "",
    exam_marks: "",
    grade: "",
  });

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const handleChange =
    (
      e:
        React.ChangeEvent<HTMLInputElement>
    ) => {

      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });
    };

  const submit =
    async () => {

      try {

        setLoading(
          true
        );

        setMessage(
          ""
        );

        setError(
          ""
        );

        await api.post(
          "/api/lecturer/add-result/",
          form
        );

        setMessage(
          "Result saved successfully 🎉"
        );

        setForm({
          student_id:
            "",

          unit_id:
            "",

          cat_marks:
            "",

          exam_marks:
            "",

          grade:
            "",
        });

      } catch (
        err: any
      ) {

        console.error(
          err
        );

        setError(
          "Could not save result"
        );

      } finally {

        setLoading(
          false
        );
      }
    };

  return (

    <ProtectedRoute>

      <main className="min-h-screen bg-gray-100">

        {/* NAVBAR */}
        <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center shadow">

          <div>

            <h1 className="text-2xl font-bold">
              Lecturer Portal
            </h1>

            <p className="text-sm text-blue-100">
              Student Results Management
            </p>

          </div>

          <nav className="flex gap-4 items-center">

            <Link
              href="/lecturer/dashboard"
              className="hover:bg-blue-600 px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>

            <Link
              href="/lecturer/add-result"
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Add Result
            </Link>

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

          </nav>

        </header>

        {/* CONTENT */}
        <section className="p-8 flex justify-center">

          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">

            <h2 className="text-2xl font-bold mb-2">
              Add Student Result
            </h2>

            <p className="text-gray-500 mb-6">
              Fill in marks and save results
            </p>

            {message && (

              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                {message}
              </div>
            )}

            {error && (

              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="student_id"
                placeholder="Student ID"
                value={
                  form.student_id
                }
                onChange={
                  handleChange
                }
                className="border rounded-xl p-3"
              />

              <input
                name="unit_id"
                placeholder="Unit ID"
                value={
                  form.unit_id
                }
                onChange={
                  handleChange
                }
                className="border rounded-xl p-3"
              />

              <input
                name="cat_marks"
                placeholder="CAT Marks"
                value={
                  form.cat_marks
                }
                onChange={
                  handleChange
                }
                className="border rounded-xl p-3"
              />

              <input
                name="exam_marks"
                placeholder="Exam Marks"
                value={
                  form.exam_marks
                }
                onChange={
                  handleChange
                }
                className="border rounded-xl p-3"
              />

              <input
                name="grade"
                placeholder="Grade"
                value={
                  form.grade
                }
                onChange={
                  handleChange
                }
                className="border rounded-xl p-3 md:col-span-2"
              />

            </div>

            <button
              onClick={
                submit
              }
              disabled={
                loading
              }
              className="
                bg-blue-700
                hover:bg-blue-800
                text-white
                mt-6
                w-full
                p-3
                rounded-xl
                font-semibold
              "
            >
              {loading
                ? "Saving..."
                : "Save Result"}
            </button>

          </div>

        </section>

      </main>

    </ProtectedRoute>
  );
}