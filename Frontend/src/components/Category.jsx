import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const category = [
  "/Group 15.png",
  "/Group 16.png",
  "/Group 17.png",
  "/Group 18.png",
  "/Group 19.png",
  "/Group 20.png",
  "/Group 24.png",
  "/Group 25.png",
];

const VISIBLE = 6;

function Category() {
  const [index, setIndex] = useState(0);

  const prevCat = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextCat = () => {
    if (index < category.length - VISIBLE) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className="flex items-center mb-6">
        <h1 className="mx-auto font-bold text-[36px] b-[30px]">
          Shop By Category
        </h1>

        <button
          onClick={prevCat}
          className={`ml-auto ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={index === 0}
        >
          <GrPrevious size={28} />
        </button>

        <button
          onClick={nextCat}
          className={`ml-5 mr-[300px] ${
            index >= category.length - VISIBLE
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={index >= category.length - VISIBLE}
        >
          <GrNext size={28} />
        </button>
      </div>

      <div className=" max-w-[1320px] mt-[69.37px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / VISIBLE)}%)`,
          }}
        >
          {category.map((img, i) => (
            <div key={i} className="w-1/6 px-2 flex-shrink-0">
              <button>
                <img
                  src={img}
                  alt="Category"
                  className="w-full h-[193px] object-contain"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
