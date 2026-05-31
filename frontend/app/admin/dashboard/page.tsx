"use client";

export default function AdminDashboard() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        p-8
        bg-slate-100
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          shadow-lg
          p-10
          text-center
          max-w-xl
          w-full
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            mb-4
            text-slate-800
          "
        >
          Admin Access
        </h1>

        <p
          className="
            mb-8
            text-slate-600
          "
        >
          Admin users manage
          students, lecturers,
          academic units and
          results using the
          Django admin panel.
        </p>

        <a
          href="http://127.0.0.1:8000/admin/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-blue-700
            hover:bg-blue-800
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Open Django Admin
        </a>
      </div>
    </main>
  );
}