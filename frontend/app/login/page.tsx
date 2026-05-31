"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router =
    useRouter();

  const [username,
    setUsername] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [role,
    setRole] =
    useState("student");

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState("");

  const login =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      setError("");
      setLoading(true);

      const res =
        await signIn(
          "credentials",
          {
            username,
            password,
            redirect:
              false,
          }
        );

      setLoading(false);

      if (
        !res
      ) {
        setError(
          "No response"
        );
        return;
      }

      if (
        res.error
      ) {
        setError(
          "Invalid username or password"
        );
        return;
      }

      if (
        role ===
        "lecturer"
      ) {
        router.push(
          "/lecturer/dashboard"
        );
      } else {
        router.push(
          "/student/dashboard"
        );
      }
    };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Student Portal
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login as Student or Lecturer
        </p>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </p>
        )}

        <div className="flex gap-3 mb-4">

          <button
            type="button"
            onClick={() =>
              setRole(
                "student"
              )
            }
            className={`flex-1 p-3 rounded-xl ${
              role ===
              "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() =>
              setRole(
                "lecturer"
              )
            }
            className={`flex-1 p-3 rounded-xl ${
              role ===
              "lecturer"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            Lecturer
          </button>

        </div>

        <form
          onSubmit={
            login
          }
        >

          <input
            className="w-full border p-3 rounded-xl mb-4"
            placeholder="Username"
            value={
              username
            }
            onChange={(
              e
            ) =>
              setUsername(
                e.target
                  .value
              )
            }
          />

          <input
            type="password"
            className="w-full border p-3 rounded-xl mb-4"
            placeholder="Password"
            value={
              password
            }
            onChange={(
              e
            ) =>
              setPassword(
                e.target
                  .value
              )
            }
          />

          <button
            disabled={
              loading
            }
            className="w-full bg-blue-700 text-white p-3 rounded-xl font-semibold"
          >
            {loading
              ? "Logging in..."
              : `Login as ${role}`}
          </button>

        </form>

        <div className="mt-6 text-center">

          <p className="text-gray-500 mb-3">
            Lecturer without account?
          </p>

          <button
            onClick={() =>
              router.push(
                "/lecturer/register"
              )
            }
            className="w-full border border-blue-700 text-blue-700 p-3 rounded-xl font-semibold"
          >
            Register Lecturer Account
          </button>

        </div>

      </div>
    </main>
  );
}