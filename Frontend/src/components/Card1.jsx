import { React, useState } from "react";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";

function Card1({ name, price, rating, reviews, inStock, image }) {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(1, prev - 1));
  return (
    <>
      <div className="w-[424px] h-[410px] border-2 rounded-[10px]">
        <div className="w-full h-[213px] relative overflow-hidden rounded-t-[10px] bg-[#F9F9F9] flex items-center justify-center">
          {liked ? (
            <FaHeart
              onClick={() => setLiked(false)}
              className="absolute top-3 right-3 z-20 text-red-500 bg-gray-50 shadow-md rounded-full p-2 cursor-pointer"
              size={30}
            />
          ) : (
            <FaRegHeart
              onClick={() => setLiked(true)}
              className="absolute top-3 right-3 z-20 bg-gray-50 shadow-md text-gray-600 rounded-full p-2 cursor-pointer"
              size={30}
            />
          )}
          <img
            src={`http://localhost:5000/uploads/${image}`}
            alt=""
            className="max-h-full max-w-full object-contain mt-3"
          />
        </div>

        <div className="flex w-full bg-[#D4DED6] h-[57px] items-center gap-[20px] justify-center">
          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-[14px]">05</p>
            <p className="text-[12px] font-poppins">Days</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-[14px]">11</p>
            <p className="text-[12px] font-poppins">Hours</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-[14px]">55</p>
            <p className="text-[12px] font-poppins">Minutes</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-[14px]">55</p>
            <p className="text-[12px] font-poppins">Seconds</p>
          </div>
        </div>

        <div className="bg-[#F4F2F2] px-[14px] h-[137px] pt-[18px] rounded-b-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[17px] font-bold">{name}</p>
          <p className="text-[13px] font-bold">${price} / KG</p>
        </div>

        <div className="flex items-center mt-1">
          <div className="relative inline-block leading-none">
            <div className="text-gray-300 text-xl">★★★★★</div>
            <div
              className="absolute top-0 left-0 overflow-hidden text-green-600 text-xl"
              style={{ width: `${(rating / 5) * 100}%` }}
            >
              ★★★★★
            </div>
          </div>

          <p className="text-[12px] ml-1">({reviews} Reviews)</p>
          {inStock && (
            <p className="text-[10px] text-[#30B44A] ml-auto -mt-5">In Stock</p>
          )}
        </div>

        <div className="flex items-center mt-2">
          <div className="flex items-center shadow-md rounded-[8px] w-[97px]">
            <button onClick={decrease} className="px-2 py-1 text-lg font-bold">
              −
            </button>
            <span className="px-4">{count}</span>
            <button onClick={increase} className="px-2 py-1 text-lg font-bold">
              +
            </button>
          </div>

          <button className="ml-auto flex items-center gap-2 px-3 py-2 text-[14px] border-2 border-[#33B44A] text-[#33B44A] rounded-[8px] shadow-md hover:bg-[#33B44A] hover:text-white">
            <FaShoppingCart size={20} />
            Cart
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card1;
