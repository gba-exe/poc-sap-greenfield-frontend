"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Transactions() {
  type FormState = {
    transaction: string;
    description: string;
    functional: string;
    keyUser: string;
  }[];

  const router = useRouter();

  const [data, setData] = useState<FormState>([]);
  const [formValues, setFormValues] = useState({
    transaction: "",
    description: "",
    functional: "",
    keyUser: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "transaction") {
      setFormValues((prev) => ({
        ...prev,
        [name]: value.toUpperCase(),
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    setData((prevData) => [...prevData, formValues]);

    setFormValues({
      transaction: "",
      description: "",
      functional: "",
      keyUser: "",
    });
  };

  const handleSave = () => {
    const postData = async () => {
      try {
        const response = await fetch("http://localhost:5000/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error saving data: ", error);
      }
    };

    postData();
  };

  return (
    <>
      <div className="flex justify-between py-40 px-40">
        <button
          className="box-border bg-white border-black border-2 text-black font-bold rounded-md p-2 min-w-32"
          onClick={() => router.back()}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-black border-black border-2 text-white font-bold rounded-md px-4 py-2 min-w-32"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-2 px-40 gap-4">
        <form
          className="flex flex-row items-end gap-4 w-fit"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <label className="text-2xl font-bold">Transaction Name:</label>
            <input
              type="text"
              className="border border-black rounded-md p-2 w-full"
              placeholder="Transaction"
              onChange={handleChange}
              name="transaction"
              value={formValues.transaction}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <label className="text-2xl font-bold">Description:</label>
            <input
              type="text"
              className="border border-black rounded-md p-2 w-full"
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={formValues.description}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <label className="text-2xl font-bold">Functional Owner:</label>
            <input
              type="text"
              className="border border-black rounded-md p-2 w-full"
              placeholder="Functional Owner"
              onChange={handleChange}
              name="functional"
              value={formValues.functional}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-fit">
            <label className="text-2xl font-bold">Key User: </label>
            <input
              type="text"
              className="border border-black rounded-md p-2 w-full"
              placeholder="Key User"
              onChange={handleChange}
              name="keyUser"
              value={formValues.keyUser}
              required
            />
          </div>
          <button
            type="submit"
            className="box-border bg-white border-black border-2 text-black font-bold rounded-md p-2 min-w-32"
          >
            Submit
          </button>
        </form>
        <table className="w-full rounded-md overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3">Transaction</th>
              <th className="p-3">Description</th>
              <th className="p-3">Functional</th>
              <th className="p-3">Key User</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr key={index}>
                <td className="p-3 border border-gray-800">
                  {value.transaction}
                </td>
                <td className="p-3 border border-gray-800">
                  {value.description}
                </td>
                <td className="p-3 border border-gray-800">
                  {value.functional}
                </td>
                <td className="p-3 border border-gray-800">{value.keyUser}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="p-0 bg-black max-h-1">
            <tr>
              <td colSpan={4}></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
