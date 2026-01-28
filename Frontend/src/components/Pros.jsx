import React from "react";
import { MdSupportAgent, MdVerified } from "react-icons/md";
import { RiSecurePaymentLine, RiDiscountPercentLine } from "react-icons/ri";

function Pros() {
  return (
    <>
      <div className="w-full h-[119.49px] flex mt-[62.51px] border-t-2 border-dashed border-[#3A3A3A]">
        <div className="max-w-[1320px] flex mx-auto gap-6">
        <div className="h-[60px] flex items-center mt-[59.5px]">

          <MdSupportAgent className="h-[60px] w-[60px] text-[#33B44A] bg-[#33B44A33] rounded-[8px] p-2" />

          <div className="ml-[18px] flex flex-col">
            <p className="font-poppins font-semibold text-[18px]">
              24 Customer Support
            </p>
            <p className="text-[16px] text-gray-600">
              We will connect with 24 hours
            </p>
          </div>
        </div>
        <div className="h-[60px] flex items-center mt-[59.5px]">

          <RiSecurePaymentLine className="h-[60px] w-[60px] text-[#33B44A] bg-[#33B44A33] rounded-[8px] p-2" />

          <div className="ml-[18px] flex flex-col">
            <p className="font-poppins font-semibold text-[18px]">
              Secure Payment
            </p>
            <p className="text-[16px] text-gray-600">
              We will connect with 24 hours
            </p>
          </div>
        </div>
        <div className="h-[60px] flex items-center mt-[59.5px]">

          <RiDiscountPercentLine className="h-[60px] w-[60px] text-[#33B44A] bg-[#33B44A33] rounded-[8px] p-2" />

          <div className="ml-[18px] flex flex-col">
            <p className="font-poppins font-semibold text-[18px]">
              Best Price & Offers
            </p>
            <p className="text-[16px] text-gray-600">
              We will connect with 24 hours
            </p>
          </div>
        </div>
        <div className="h-[60px] flex items-center mt-[59.5px]">

          <MdVerified className="h-[60px] w-[60px] text-[#33B44A] bg-[#33B44A33] rounded-[8px] p-2" />

          <div className="ml-[18px] flex flex-col">
            <p className="font-poppins font-semibold text-[18px]">
              Genuine Products Store
            </p>
            <p className="text-[16px] text-gray-600">
              We will connect with 24 hours
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Pros;
