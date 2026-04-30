"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold tracking-tight mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>

        <p className="text-gray-400 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="px-5 py-2.5 rounded-xl btn font-medium hover:opacity-90 transition"
          >
            Go Back
          </button>

          {/* Home Button */}
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2.5 rounded-xl btn hover:border-white transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
