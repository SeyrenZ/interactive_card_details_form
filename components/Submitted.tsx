import { CompleteLogo } from "@/public";
import React from "react";

const Submitted = () => {
  return (
    <div className="w-[400px] flex flex-col justify-center items-center gap-y-10">
      <CompleteLogo />
      <div className="flex flex-col items-center gap-y-5">
        <div className="text-3xl font-bold text-[#21092f] uppercase">
          Thank you!
        </div>
        <div className="text-lg font-bold text-[#8e8593]">
          We've added your card details
        </div>
      </div>
      <button
        className="w-full h-14 rounded-lg bg-[#21092f] text-white font-medium tracking-wider"
        type="submit"
      >
        Continue
      </button>
    </div>
  );
};

export default Submitted;
