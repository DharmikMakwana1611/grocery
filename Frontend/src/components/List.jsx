import { React, useState } from "react";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";

function List({ name, price, rating, reviews, inStock, image, description }) {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(1, prev - 1));
  return (
    <>
      <div className="flex bg-[#F4F2F2] items-center border w-[984px] h-[243px]">
        <div className="relative flex bg-white items-center justify-center h-full w-[338px]">
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
            src={image}
            alt={name}
            className="max-h-full mt-2 max-w-full object-contain"
          />
        </div>

        <div className=" h-full w-full">
          <div className="flex-1">
            <p className="font-poppins font-semibold ml-[25px] mt-[25px]">
              {name}
            </p>
            <p className="h-[63px] w-[595px] ml-[26px] font-jost text-[14px] mt-[10px]">
              {description}
            </p>
            <div className="flex items-center ml-[26px]">
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
            </div>
            <div className="flex items-center mt-[12px] ml-[26px]">
              <p className="font-jost font-bold text-[14px]">${price} / KG</p>

              {inStock && (
                <p className="text-[12px] text-[#30B44A] ml-[15px]">In Stock</p>
              )}
            </div>

            <div className="flex mt-[13px] items-center ml-[26px]">
              <div className="flex items-center shadow-md rounded-[8px] w-[97px]">
                <button
                  onClick={decrease}
                  className="px-2 py-1 text-lg font-bold"
                >
                  −
                </button>
                <span className="px-4">{count}</span>
                <button
                  onClick={increase}
                  className="px-2 py-1 text-lg font-bold"
                >
                  +
                </button>
              </div>

              <button className="ml-[15px] h-[35px] w-[78px] flex items-center gap-2 px-3 py-2 text-[14px] border-2 border-[#33B44A] text-[#33B44A] rounded-[8px] shadow-md hover:bg-[#33B44A] hover:text-white">
                <FaShoppingCart size={20} />
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
