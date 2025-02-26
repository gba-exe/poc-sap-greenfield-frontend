"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoleTransactions() {
  const [inputs, setInputs] = useState<number[]>([]);
  const [transactions, setTransactions] = useState<string[]>([]);

  useEffect(() => {
    addInput();

    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/transactions/code");
        const data = await response.json();

        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };

    fetchTransactions();
  }, []);

  const router = useRouter();

  const roleName = useSearchParams().get("roleName").toUpperCase();

  const saveAndReturn = () => {
    router.push("/");
  };

  const createBusinessRole = () => {
    router.push("/business-role");
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    func: () => void,
  ) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      return;
    }

    func();
  };

  const addInput = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    setInputs((prev) => [...prev, Math.random()]);
  };

  const removeInput = (id: number) => {
    if (inputs.length === 1) return;

    setInputs((prev) => prev.filter((input) => input !== id));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold pb-10">POC SAP Greenfield</h1>
        <form
          className="flex flex-col items-start justify-center gap-4 w-fit"
          onSubmit={(e) => {
            const nativeEvent = e.nativeEvent as SubmitEvent;
            const submitter = nativeEvent.submitter as HTMLButtonElement;
            const action = submitter?.name;

            if (action === "save-and-return") {
              handleSubmit(e, saveAndReturn);
            } else if (action === "create-business-role") {
              handleSubmit(e, createBusinessRole);
            }
          }}
        >
          <label className="text-2xl font-bold">Enter Transactions for role {roleName}: </label>
          {inputs.map((id) => (
            <div
              key={id}
              className="flex flex-row items-start justify-start gap-2 w-full"
            >
              <select
                key={id}
                className="border border-black rounded-md p-2 min-w-64 w-full"
                required
              >
                <option value="">-- Select a transaction --</option>
                {transactions.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button
                className="bg-black text-white font-bold rounded-md px-4 py-2"
                onClick={addInput}
              >
                +
              </button>
              <button
                className="bg-black text-white font-bold rounded-md px-4 py-2"
                onClick={() => removeInput(id)}
              >
                -
              </button>
            </div>
          ))}
          <div className="flex flex-row items-center justify-center gap-2 w-full">
            <button
              type="submit"
              name="save-and-return"
              className="box-border bg-white border-black border-2 text-black font-bold rounded-md p-2 min-w-fit w-full"
            >
              Save and Return
            </button>
            <button
              type="submit"
              name="create-business-role"
              className="box-border bg-black border-black border-2 text-white font-bold rounded-md p-2 min-w-fit w-full"
            >
              Create Business Role
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
