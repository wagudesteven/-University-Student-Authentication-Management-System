"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LecturerRegisterPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const register = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const payload = {
        username,
        password,
      };

      console.log(
        "Sending to Django:",
        payload
      );

      const response =
        await api.post(
          "/api/lecturer/register/",
          payload
        );

      console.log(
        "Django response:",
        response.data
      );

      setSuccess(
        "Lecturer registered successfully ✅"
      );

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (err: any) {
      console.error(
        "FULL REGISTER ERROR:",
        err
      );

      if (err.response) {
        console.error(
          "Backend returned:",
          err.response.data
        );

        setError(
          err.response.data?.error ||
          "Registration failed"
        );
      } else {
        setError(
          err.message ||
          "Server not reachable"
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6">
          Lecturer Register
        </h1>

        {success && (
          <p className="text-green-600 mb-3">
            {success}
          </p>
        )}

        {error && (
          <p className="text-red-600 mb-3">
            {error}
          </p>
        )}

        <input
          className="border p-3 w-full mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <input
          className="border p-3 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={register}
          disabled={loading}
          className="bg-blue-700 text-white w-full p-3 rounded"
        >
          {loading
            ? "Registering..."
            : "Register"}
        </button>

      </div>
    </main>
  );
}