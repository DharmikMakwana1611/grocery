import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Inc from "./Inc";

function Card({
  name,
  price,
  rating,
  reviews,
  inStock,
  image,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="border-2 rounded-[10px] h-[350px] w-[312px]">
      <div className="w-full h-[213px] relative overflow-hidden bg-[#F9F9F9] rounded-t-[10px] flex items-center justify-center">
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
          alt={name}
          className="max-h-full max-w-full object-contain mt-2"
        />
      </div>

      <div className="bg-[#F4F2F2] px-[14px] h-[135px] pt-[18px] border-b-2 rounded-b-[10px]">
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

          <p className="text-[12px] ml-1">
            ({reviews} Reviews)
          </p>

          {inStock && (
            <p className="text-[10px] text-[#30B44A] ml-auto">
              In Stock
            </p>
          )}
        </div>

        <Inc />
      </div>
    </div>
  );
}

export default Card;
