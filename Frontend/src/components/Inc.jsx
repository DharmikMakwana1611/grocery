import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Inc({ className = "" }) {
  const [count, setCount] = useState(1);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(1, prev - 1));
  return (
    <>
      <div className="flex items-center mt-2">
        <div className={`flex items-center shadow-md rounded-[8px] w-[97px] ${className}`}>
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
    </>
  );
}

export default Inc;
