import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/item`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="max-w-[1322px] mt-[80px] mx-auto">
      <p className="font-bold text-[36px] mb-6">Popular Items</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Card
            key={item._id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            inStock={item.inStock}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
