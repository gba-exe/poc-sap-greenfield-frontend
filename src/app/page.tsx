"use client";
import { useRouter } from "next/navigation";

export default function Transactions() {
  const router = useRouter();

  const transactions = () => {
    router.push("/transactions")
  }

  const roles = () => {
    router.push("/roles/role-name")
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold pb-10">Welcome to POC SAP Greenfield!</h1>
        <h2 className="text-4xl pb-10">Choose an option:</h2>
        <button
          className="bg-black text-white font-bold rounded-md px-4 py-2 w-fit"
          onClick={transactions}
        >
          Add Transactions
        </button>
        <br/>
        <button
          className="bg-black text-white font-bold rounded-md px-4 py-2 w-fit"
          onClick={roles}
        >
          Add Single Roles
        </button>
      </div>
    </>
  );
}
