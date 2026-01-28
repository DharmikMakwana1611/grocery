import { useState, useEffect } from "react";
import axios from "axios";
import { GrNext, GrPrevious } from "react-icons/gr";

const VISIBLE = 6;

function Category() {
  const [category, setCategory] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (category.length === 0) return null;

  const prevCat = () => {
    if (index > 0) setIndex(index - 1);
  };

const nextCat = () => {
  if (index < category.length - VISIBLE) {
    setIndex(index + 1);
  }
};

const lastIndex = category.length - VISIBLE;

return (
  <>
    <div className="flex items-center mb-6 max-w-[1320px] mx-auto">
      <h1 className="font-bold text-[36px]">
        Shop By Category
      </h1>

      <button
        onClick={prevCat}
        disabled={index === 0}
        className={`ml-auto ${
          index === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <GrPrevious size={28} />
      </button>

      <button
        onClick={nextCat}
        disabled={index >= lastIndex}
        className={`ml-5 mr-[300px] ${
          index >= lastIndex ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <GrNext size={28} />
      </button>
    </div>

    <div className="max-w-[1320px] mt-[69px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * (100 / VISIBLE)}%)`,
        }}
      >
        {category.map((item, i) => (
          <div key={i} className="w-1/6 px-2 flex-shrink-0">
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.name}
              className="w-full h-[193px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default Category;
