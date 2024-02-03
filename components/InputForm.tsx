"use client";
import { CardLogo, CompleteLogo } from "@/public";
import React, { useState } from "react";
import "./cardForm.css";

const InputForm = () => {
  // useState area
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cardUserName, setCardUserName] = useState("");
  const [dateMonth, setDateMonth] = useState("");
  const [dateYear, setDateYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [MonthYearErrorMessage, setMonthYearErrorMessage] = useState("");
  const [NameErrorMessage, setNameErrorMessage] = useState("");
  const [NumberErrorMessage, setNumberErrorMessage] = useState("");
  const [CvcErrorMessage, setCvcErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // handle submit
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (
      !dateMonth ||
      !dateYear ||
      !cardCvc ||
      !cardUserName ||
      !creditCardNumber
    ) {
      if (!dateMonth && !dateYear) {
        document.getElementById("dateMonth")?.classList.add("border-red-500");
        document.getElementById("dateYear")?.classList.add("border-red-500");
        setMonthYearErrorMessage("Can't be blank");
      } else {
        document
          .getElementById("dateMonth")
          ?.classList.remove("border-red-500");
        document.getElementById("dateYear")?.classList.remove("border-red-500");
        setMonthYearErrorMessage("");
      }

      if (!cardCvc) {
        document.getElementById("cardCvc")?.classList.add("border-red-500");
        setCvcErrorMessage("CVC Can't be blank");
      } else {
        document.getElementById("cardCvc")?.classList.remove("border-red-500");
        setCvcErrorMessage("");
      }

      if (!cardUserName) {
        document
          .getElementById("cardHolderName")
          ?.classList.add("border-red-500");
        setNameErrorMessage("Cardholder name can't be blank");
      } else {
        document
          .getElementById("cardHolderName")
          ?.classList.remove("border-red-500");
        setNameErrorMessage("");
      }

      if (!creditCardNumber) {
        document.getElementById("cardNumber")?.classList.add("border-red-500");
        setNumberErrorMessage("Card number can't be blank");
      } else {
        document
          .getElementById("cardNumber")
          ?.classList.remove("border-red-500");
        setNumberErrorMessage("");
      }

      if (creditCardNumber.length !== 19) {
        document.getElementById("cardNumber")?.classList.add("border-red-500");
        setNumberErrorMessage(
          "Please enter a valid 19-digit credit card number."
        );
      } else {
        document
          .getElementById("cardNumber")
          ?.classList.remove("border-red-500");
        setNumberErrorMessage("");
      }
    } else {
      setFormSubmitted(true);
    }
  };
  // function
  //  ==================================================================== //
  const formatCardUserName = (e: any) => {
    const value = e.target.value;
    // Allow only non-numeric characters
    const nonNumericValue = value.replace(/\d/g, "");
    setCardUserName(nonNumericValue);
  };

  const formatCreditCardNumber = (e: any) => {
    const formattedValue = e.target.value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{4})/g, "$1 ") // Insert space after every 4 digits
      .trim();

    setCreditCardNumber(formattedValue);
  };

  const handleMMChange = (e: any) => {
    const value = e.target.value;
    // Allow only numeric input and limit to 2 characters
    const numericValue = value.replace(/\D/g, "").substring(0, 2);
    setDateMonth(numericValue);
  };

  const handleYYChange = (e: any) => {
    const value = e.target.value;
    // Allow only numeric input and limit to 2 characters
    const numericValue = value.replace(/\D/g, "").substring(0, 2);
    setDateYear(numericValue);
  };

  const handleCvcChange = (e: any) => {
    const value = e.target.value;
    // Allow only numeric input and limit to 2 characters
    const numericValue = value.replace(/\D/g, "").substring(0, 3);
    setCardCvc(numericValue);
  };
  // ========================================================================= //
  return (
    <>
      <div className="flex sm:flex-col sm:justify-center items-center gap-x-32 sm:gap-y-5">
        {/* card */}
        <div className="flex flex-col gap-y-12">
          {/* card details front */}
          <div className="w-[447px] h-[245px] p-8 py-7 bg-cardFront bg-no-repeat flex flex-col justify-between sm:hidden">
            <CardLogo />
            <div className="flex flex-col gap-y-5">
              <div className="tracking-widest text-[29px] font-medium text-white">
                {!creditCardNumber ? "0000 0000 0000 0000" : creditCardNumber}
              </div>
              <div className="flex justify-between">
                <div className="tracking-widest text-sm  text-white">
                  {!cardUserName ? "Jane Applessed" : cardUserName}
                </div>
                <div className="tracking-widest text-sm  text-white">
                  {!dateMonth ? "00" : dateMonth}/{!dateYear ? "00" : dateYear}
                </div>
              </div>
            </div>
          </div>
          {/* card details back */}
          <div className=" w-[447px] h-[245px] ml-24 sm:ml-10 sm:w-[330px] sm:h-[196px] sm:rounded-lg bg-cardBack bg-no-repeat sm:bg-cover flex flex-col items-end justify-center">
            <div className="mr-14 mb-1 text-md sm:text-sm sm:mr-8 text-white font-medium tracking-widest">
              {!cardCvc ? "000" : cardCvc}
            </div>
          </div>
          {/* card details front mobile */}
          <div className="w-[447px] h-[245px] sm:w-[330px] sm:h-[196px] sm:mt-[-133px] p-8 py-7 sm:p-5 sm:py-6 rounded-lg bg-cardFront bg-no-repeat flex flex-col justify-between lg:hidden md:hidden">
            <CardLogo />
            <div className="flex flex-col gap-y-5">
              <div className="tracking-widest text-[29px] sm:text-lg font-medium text-white">
                {!creditCardNumber ? "0000 0000 0000 0000" : creditCardNumber}
              </div>
              <div className="flex justify-between">
                <div className="tracking-widest text-sm sm:text-xs  text-white">
                  {!cardUserName ? "Jane Applessed" : cardUserName}
                </div>
                <div className="tracking-widest text-sm sm:text-xs  text-white">
                  {!dateMonth ? "00" : dateMonth}/{!dateYear ? "00" : dateYear}
                </div>
              </div>
            </div>
          </div>
        </div>
        {!formSubmitted ? (
          <form
            onSubmit={handleOnSubmit}
            className="w-[400px] sm:w-full sm:p-7 flex flex-col gap-y-12 sm:gap-y-8"
          >
            {/* div 1 */}
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <label className=" tracking-widest text-sm font-semibold text-[#21092f]">
                  CARDHOLDER NAME
                </label>
                <input
                  id="cardHolderName"
                  type="text"
                  value={cardUserName}
                  onChange={formatCardUserName}
                  maxLength={21}
                  className="w-full h-12 p-4 border-2 rounded-lg border-[#dedddf] focus:outline-none focus:border-[#600594] font-normal text-lg "
                  placeholder="e.g. Jane Applessed"
                  autoComplete="off"
                />
                {NameErrorMessage && (
                  <div className="text-red-500 text-sm sm:text-xs">
                    {NameErrorMessage}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-y-2">
                <label className=" tracking-widest text-sm font-semibold text-[#21092f]">
                  CARD NUMBER
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  value={creditCardNumber}
                  onChange={formatCreditCardNumber}
                  maxLength={19}
                  className="w-full h-12 p-4 border-2 rounded-lg border-[#dedddf] focus:outline-none focus:border-[#600594] font-normal text-lg "
                  placeholder="e.g. 1234 5678 9123 0000"
                  autoComplete="off"
                />
                {NumberErrorMessage && (
                  <div className="text-red-500 text-sm sm:text-xs">
                    {NumberErrorMessage}
                  </div>
                )}
              </div>
              {/* div 2 */}
              <div className="w-auto flex items-center justify-center gap-x-5">
                <div className="flex flex-col gap-y-2">
                  <label className=" tracking-widest text-sm font-semibold text-[#21092f]">
                    {`EXP.DATE (MM/YY)`}
                  </label>
                  <div className="flex gap-x-2">
                    <input
                      id="dateMonth"
                      type="text"
                      value={dateMonth}
                      onChange={handleMMChange}
                      className="w-[85px] h-12 p-4 border-2 rounded-lg border-[#dedddf] focus:outline-none focus:border-[#600594] font-normal text-lg "
                      placeholder="MM"
                      maxLength={2}
                      autoComplete="off"
                    />
                    {/* to remove error message on chrome */}
                    <input className="hidden" disabled />
                    <input className="hidden" disabled />
                    {/* ================================= */}
                    <input
                      id="dateYear"
                      type="text"
                      value={dateYear}
                      onChange={handleYYChange}
                      className="w-[85px] h-12 p-4 border-2 rounded-lg border-[#dedddf] focus:outline-none focus:border-[#600594] font-normal text-lg "
                      placeholder="YY"
                      maxLength={2}
                      autoComplete="off"
                    />
                  </div>
                  {MonthYearErrorMessage && (
                    <div className="text-red-500 text-sm sm:text-xs">
                      {MonthYearErrorMessage}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className=" tracking-widest font-bold text-[#21092f]">
                    cvc
                  </label>
                  <input
                    id="cardCvc"
                    type="text"
                    value={cardCvc}
                    onChange={handleCvcChange}
                    className="w-full h-12 p-4 border-2 rounded-lg border-[#dedddf] focus:outline-none focus:border-[#600594] font-normal text-lg "
                    placeholder="e.g. 123"
                    maxLength={3}
                    autoComplete="off"
                  />
                  {CvcErrorMessage && (
                    <div className="text-red-500 text-sm sm:text-xs">
                      {CvcErrorMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* submit button */}
            <button
              className="w-full h-14 rounded-lg bg-[#21092f] text-white font-medium tracking-wider"
              type="submit"
            >
              Confirm
            </button>
          </form>
        ) : (
          //   thankyou message
          <div className="w-[400px] sm:w-[450px] sm:p-7 flex flex-col justify-center items-center gap-y-10 ">
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
              className="w-[350px] h-14 rounded-lg bg-[#21092f] text-white font-medium tracking-wider"
              type="submit"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InputForm;
