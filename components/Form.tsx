import React from "react";
import { InputForm } from ".";

const Form = () => {
  return (
    <div className="w-[1440px] h-[800px] sm:w-full sm:h-[100vh] lg:bg-mainBg md:bg-mainBg sm:bg-mainBgMobile bg-contain bg-white bg-no-repeat rounded-2xl sm:rounded-none shadow-xl flex justify-center items-center">
      <InputForm />
    </div>
  );
};

export default Form;
