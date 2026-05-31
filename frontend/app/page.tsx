"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {
    data: session,
    status,
  } = useSession();

  const router =
    useRouter();

  useEffect(() => {
    if (
      status === "loading"
    ) return;

    // not logged in
    if (!session) {
      router.replace(
        "/login"
      );
      return;
    }

    const role =
      (session as any)
        ?.role;

    // lecturer
    if (
      role ===
      "lecturer"
    ) {
      router.replace(
        "/lecturer/dashboard"
      );
    }

    // student
    else {
      router.replace(
        "/student/dashboard"
      );
    }
  }, [
    session,
    status,
    router,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>
        Loading...
      </p>
    </div>
  );
}