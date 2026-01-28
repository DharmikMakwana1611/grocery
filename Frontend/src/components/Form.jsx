import React from "react";

function Form() {
  return (
    <>
      <div>
        <p className="font-poppins text-[36px] font-bold">Leave A Comment</p>
        <p className="text-[14px]">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="flex mt-[40px]">
          <input
            type="text"
            placeholder="Name"
            className="w-[648px] font-poppins h-[46px] p-2 border-2 rounded-[10px] border-[#3A3A3A]"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[648px] font-poppins ml-[24px] h-[46px] p-2 border-2 rounded-[10px] border-[#3A3A3A]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Comment..."
            className="w-[1320px] mt-[24px] h-[135px] p-2 border-2 rounded-[10px] border-[#3A3A3A] font-poppins"
          />
        </div>
        <p className="mt-[25px] font-poppins text-[14px]">Your Rating</p>
        <div className="relative inline-block leading-none mt-[5px]">
          <div className="text-gray-300 text-xl">★★★★★</div>
          <div
            className="absolute top-0 left-0 overflow-hidden text-green-600 text-xl"
            style={{ width: `${(3.5 / 5) * 100}%` }}
          >
            ★★★★★
          </div>
        </div>
      </div>
        <button className="mt-[24px] w-[153px] h-[36px] bg-[#33B44A] rounded-full text-white font-poppins text-[15px]">Post Comment</button>
    </>
  );
}

export default Form;
