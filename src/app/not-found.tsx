"use client"
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-w-screen min-h-screen">
      <h1 className="text-6xl font-bold">Not Found</h1>
      <h2 className="text-4xl pb-8">Could not find requested resource</h2>
      <button
        className="box-border bg-black border-black border-2 text-white font-bold rounded-md p-2 min-w-fit w-64"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
}
