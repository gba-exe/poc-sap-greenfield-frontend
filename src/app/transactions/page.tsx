"use client";
import { useRouter } from "next/navigation";

export default function Transactions() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/roles/role-name");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold pb-10">POC SAP Greenfield</h1>
        <form className="flex flex-col items-start justify-center gap-4 w-fit">
          <label className="text-2xl font-bold">Enter Transaction Name: </label>
          <input
            type="text"
            className="border border-black rounded-md p-2 w-full"
            placeholder="Transaction"
            required
          />
          <label className="text-2xl font-bold">
            Enter Transaction Description:{" "}
          </label>
          <input
            type="text"
            className="border border-black rounded-md p-2 w-full"
            placeholder="Description"
            required
          />
          <label className="text-2xl font-bold">
            Enter The Functional Owner:
          </label>
          <input
            type="text"
            className="border border-black rounded-md p-2 w-full"
            placeholder="Functional Owner"
            required
          />
          <label className="text-2xl font-bold">Enter The Key Owner: </label>
          <input
            type="text"
            className="border border-black rounded-md p-2 w-full"
            placeholder="Key Owner"
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
