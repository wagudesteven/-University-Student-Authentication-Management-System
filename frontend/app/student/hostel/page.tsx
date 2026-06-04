"use client";

import {
  useState,
} from "react";

import 
 api
 from "@/lib/api";

import ProtectedRoute
  from "@/components/ProtectedRoute";

export default function HostelPage() {
  const [hostel,
    setHostel] =
    useState("");

  const apply =
    async () => {
      try {
        await api.post(
          "/api/student/hostel/",
          {
            hostel_name:
              hostel,
          }
        );

        alert(
          "Application sent"
        );
      } catch {
        alert(
          "Failed"
        );
      }
    };

  return (
    <ProtectedRoute>
      <main
        className="
          p-8
          flex
          justify-center
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            shadow
            p-8
            w-full
            max-w-xl
          "
        >
          <h1
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Hostel Application
          </h1>

          <input
            placeholder="Hostel name"
            value={
              hostel
            }
            onChange={(
              e
            ) =>
              setHostel(
                e.target
                  .value
              )
            }
          />

          <button
            onClick={
              apply
            }
            className="
              bg-blue-700
              text-white
              mt-6
              w-full
              p-3
              rounded-xl
            "
          >
            Apply
          </button>
        </div>
      </main>
    </ProtectedRoute>
  );
}