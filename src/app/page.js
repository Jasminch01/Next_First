import Counter from "@/Components/Counter/Counter";
import React from "react";
import error from "./error";

const page = () => {
  // throw new error;
  return (
    <div>
      <p className="text-4xl font-bold">hello world</p>
      <Counter />
    </div>
  );
};

export default page;
