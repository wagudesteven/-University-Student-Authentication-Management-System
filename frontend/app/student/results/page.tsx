"use client";

import {
  useEffect,
  useState,
} from "react";

import ProtectedRoute
  from "@/components/ProtectedRoute";

import api 
  from "@/lib/api";

type Result = {
  unit_name: string;
  cat_marks: number;
  exam_marks: number;
  grade: string;
};

export default function ResultsPage() {
  const [results,
    setResults] =
    useState<Result[]>([]);

  useEffect(() => {
    api
      .get(
        "http://127.0.0.1:8000/api/student/results/"
      )
      .then((res) =>
        setResults(
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
          Results
        </h1>

        <div
          className="
            bg-white
            rounded-2xl
            shadow
            p-6
          "
        >
          <table
            className="
              w-full
            "
          >
            <thead>
              <tr>
                <th>
                  Unit
                </th>
                <th>
                  CAT
                </th>
                <th>
                  Exam
                </th>
                <th>
                  Grade
                </th>
              </tr>
            </thead>

            <tbody>
              {results.map(
                (
                  item,
                  index
                ) => (
                  <tr
                    key={
                      index
                    }
                  >
                    <td>
                      {
                        item.unit_name
                      }
                    </td>

                    <td>
                      {
                        item.cat_marks
                      }
                    </td>

                    <td>
                      {
                        item.exam_marks
                      }
                    </td>

                    <td>
                      {
                        item.grade
                      }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </main>
    </ProtectedRoute>
  );
}