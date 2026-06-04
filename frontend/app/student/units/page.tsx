"use client";

import {
  useEffect,
  useState,
} from "react";

import 
  api
from "@/lib/api";

import ProtectedRoute
  from "@/components/ProtectedRoute";

type Unit = {
  code: string;
  name: string;
};

export default function UnitsPage() {
  const [units,
    setUnits] =
    useState<Unit[]>([]);

  useEffect(() => {
    api
      .get(
        "/api/student/units/"
      )
      .then((res) =>
        setUnits(
          res.data
        )
      );
  }, []);

  return (
    <ProtectedRoute>
      <main className="p-8">

        <h1
          className="
            text-3xl
            font-bold
            mb-8
          "
        >
          Registered Units
        </h1>

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          {units.map(
            (
              unit,
              index
            ) => (
              <div
                key={
                  index
                }
                className="
                  bg-white
                  p-6
                  rounded-2xl
                  shadow
                "
              >
                <h2
                  className="
                    font-bold
                  "
                >
                  {
                    unit.code
                  }
                </h2>

                <p>
                  {
                    unit.name
                  }
                </p>
              </div>
            )
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}