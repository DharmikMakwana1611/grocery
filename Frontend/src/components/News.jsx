import { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/news`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="max-w-[1320px] mx-auto mt-[80px]">
      <p className="font-jost font-bold text-[36px] mb-[50px]">
        Our Latest News & Blog
      </p>

      <div className="flex gap-[24px]">
        {data.slice(0, 3).map((item) => (
          <div key={item._id}>
            {/* ✅ FIXED IMAGE URL */}
            <img
              className="h-[250px] w-[424px] object-cover"
              src={`${process.env.REACT_APP_API_URL}/uploads/${item.image}`}
              alt={item.title}
            />

            <p className="font-poppins font-semibold text-[20px] mt-[25px]">
              {item.title}
            </p>

            <p className="font-poppins text-[16px] mt-1">
              By{" "}
              <span className="text-[#33B44A]">
                {item.author}
              </span>
            </p>

            <p className="w-[425px] mt-[15px] font-poppins text-[15px]">
              {item.description}
            </p>

            <button className="bg-[#EF3F23] mt-[14px] w-[112px] h-[44px] font-jost font-semibold rounded-[5px] text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
