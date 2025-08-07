"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <Image
        src="/images/404-not-found.png"
        alt="Page not found"
        width={300}
        height={300}
        className=""
      />
      <Link href="https://www.flaticon.com/free-icons/404-error" target="_blank" title="404 error icons" className="underline text-sm text-dark-gray italic">
        404 error icons created by Prosymbols Premium - Flaticon
      </Link>
      <h1 className="text-2xl font-bold text-dark-gray mb-2 mt-16">
        Oops! Page Not Found.
      </h1>
      <p className="text-sm text-dark-gray mb-4">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => router.replace("/login")}
        className={`active:scale-95 px-6 py-3 mt-2 text-white text-lg cursor-pointer font-bold bg-primary rounded-lg transition-all`}
      >
        Return Home.
      </button>
    </div>
  );
}