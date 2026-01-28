import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { RiReplyLine } from "react-icons/ri";

function Reviews({ rating }) {
  return (
    <>
      <div className="flex items-start gap-4">
        <img className="w-[84px] h-[84px]" src="/Rectangle 54.png" alt="User" />

        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="font-poppins font-bold text-[16px]">Sara Waston</p>
              <span className="text-[#9E9E9E]">•</span>
              <p className="font-poppins text-[14px] text-[#9E9E9E]">
                10 Sep 2022
              </p>
            </div>

            <button className="flex justify-center rounded-[10px] border-[#3A3A3A] items-center w-[92px] h-[32px] border-2 gap-1 ml-[898px] text-[14px] text-[#3A3A3A]">
              <RiReplyLine />
              Reply
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative inline-block leading-none">
              <div className="text-gray-300 text-lg">★★★★★</div>
              <div
                className="absolute top-0 left-0 overflow-hidden text-green-600 text-lg"
                style={{ width: `${(3.5 / 5) * 100}%` }}
              >
                ★★★★★
              </div>
            </div>

            <p className="text-[14px] text-[#9E9E9E]">(3.5)</p>
          </div>
          <div className="flex mt-[5px]">
            <FaRegHeart />
            <AiOutlineLike size={18} className="ml-3" />
          </div>
        </div>
      </div>
      <div className="mt-[25px] font-poppins text-[14px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro
          nihil velit, veniam nostrum ab possimus iusto nemo illo! Eius aperiam
          officiis eligendi sint est ipsa nostrum recusandae ratione voluptatum.
        </p>
      </div>

      <hr className="mt-[24px] border-2 border-[#D4DED6]" />

      <div className="flex items-start gap-4 mt-[24px]">
        <img className="w-[84px] h-[84px]" src="/Rectangle 52.png" alt="User" />

        <div className="flex flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="font-poppins font-bold text-[16px]">Sara Waston</p>
              <span className="text-[#9E9E9E]">•</span>
              <p className="font-poppins text-[14px] text-[#9E9E9E]">
                10 Sep 2022
              </p>
            </div>

            <button className="flex justify-center rounded-[10px] border-[#3A3A3A] items-center w-[92px] h-[32px] border-2 gap-1 ml-[898px] text-[14px] text-[#3A3A3A]">
              <RiReplyLine />
              Reply
            </button>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="relative inline-block leading-none">
              <div className="text-gray-300 text-lg">★★★★★</div>
              <div
                className="absolute top-0 left-0 overflow-hidden text-green-600 text-lg"
                style={{ width: `${(3.5 / 5) * 100}%` }}
              >
                ★★★★★
              </div>
            </div>

            <p className="text-[14px] text-[#9E9E9E]">(3.5)</p>
          </div>
          <div className="flex mt-[5px]">
            <FaRegHeart />
            <AiOutlineLike size={18} className="ml-3" />
          </div>
        </div>
      </div>
      <div className="mt-[25px] font-poppins text-[14px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro
          nihil velit, veniam nostrum ab possimus iusto nemo illo! Eius aperiam
          officiis eligendi sint est ipsa nostrum recusandae ratione voluptatum.
        </p>
      </div>

      <hr className="mt-[24px] border-2 border-[#D4DED6]" />
    </>
  );
}

export default Reviews;
