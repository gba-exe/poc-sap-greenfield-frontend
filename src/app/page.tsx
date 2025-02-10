"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      return;
    }

    router.push("/transactions");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold pb-10">POC SAP Greenfield</h1>
        <form
          className="flex flex-col items-start justify-center gap-4 w-fit"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl font-bold">Enter Role Name: </label>
          <input
            type="text"
            className="border border-black rounded-md p-2"
            placeholder="Transaction"
            pattern="(?i)(ZS:.*)"
            required
          />
          <button
            type="submit"
            className="bg-black text-white font-bold rounded-md px-4 py-2 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
