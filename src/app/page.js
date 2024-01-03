import Counter from "@/Components/Counter/Counter";
import React from "react";
// import error from "./error";
import Link from "next/link";

const page = () => {
  // throw new error;
  return (
    <div>
      <p className="text-4xl font-bold">hello world</p>
      <Counter />
      <div className="mt-5 space-x-3">
        <Link href={"/about"}>
          <bttton className="p-2 bg-orange-200">About</bttton>
        </Link>
        <Link href={"/news"}>
          <bttton className="p-2 bg-orange-200">News</bttton>
        </Link>
        <Link href={"/contact"}>
          <bttton className="p-2 bg-orange-200"> Contact</bttton>
        </Link>
      </div>
    </div>
  );
};

export default page;
