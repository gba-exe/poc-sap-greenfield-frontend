"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Role() {
  const router = useRouter();

  const [roleName, setRoleName] = useState("");
  const [keyUser, setKeyUser] = useState("");

  const validate = (roleName: string) => {
    if (roleName.length > 30) {
      return "Role name must less than 3 characters long";
    }

    if (roleName.slice(0, 1) != "Z") {
      return "Role name must start with Z";
    }

    if (!roleName.slice(1, 2).match("^[ST]$")) {
      return "Role name must have S or T after Z";
    }

    if (!roleName.slice(2, 3).match("^[BCDFHIJKLMPQSVWXY]$")) {
      return "Role name must have B, C, D, F, H, J, K, L, M, P, Q, S, V, W, X, Y after ZS or ZT";
    }

    if (
      !roleName
        .slice(3, 5)
        .match("^(BC|CO|PP|FI|HR|IM|PS|MM|QM|SD|PL|SM|CM|TM|PM|CC)$")
    ) {
      return "Role name must have BC, CO, PP, FI, HR, IM, PS, MM, QM, SD, PL, SM, CM, TM, PM, CC after ZS or ZT";
    }

    if (!roleName.slice(5, 7).match("^(DI|MA|CR|AT|AF|AU)$")) {
      return "Role name must have DI, MA, CR, AT, AF, AU after ZS or ZT";
    }

    if (roleName.slice(7, 8) != ":") {
      return "Role name must have a colon after ZS or ZT";
    }

    if (roleName.slice(8).length < 2) {
      return "Role name must have at least 2 characters after colon";
    }
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const input = document.querySelector("input") as HTMLInputElement;
    const error = validate(roleName);
    input.setCustomValidity(error || "");
    input.reportValidity();

    if (!error) {
      const roleName = input.value;

      router.push("/roles/role-transactions?roleName=" + roleName);
    }
  };

  return (
    <>
      <div className="flex justify-between py-40 px-40">
        <button
          className="box-border bg-white border-black border-2 text-black font-bold rounded-md p-2 min-w-16"
          onClick={() => router.back()}
        >
          {"<"}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <form
          className="flex flex-col items-start justify-center gap-4 w-fit"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-2xl font-bold">Enter Role Name: </label>
          <input
            type="text"
            className="border border-black rounded-md p-2"
            placeholder="Transaction"
            value={roleName.toUpperCase()}
            onChange={(e) => {
              e.target.setCustomValidity("");
              setRoleName(e.target.value);
            }}
            required
          />
          <label className="text-2xl font-bold">Enter Key User: </label>
          <input
            type="text"
            className="border border-black rounded-md p-2"
            placeholder="Key User"
            value={keyUser}
            onChange={(e) => {
              e.target.setCustomValidity("");
              setKeyUser(e.target.value);
            }}
            required
          />
          <div className="flex flex-row items-start justify-start gap-2 w-full">
            <button
              type="submit"
              className="box-border bg-black border-black border-2 text-white font-bold rounded-md p-2 min-w-fit w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
