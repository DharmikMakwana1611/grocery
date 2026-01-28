import { React, useState, useEffect } from "react";
import axios from "axios";
import Card1 from "./Card1";

function Deal() {
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/deal`)
      .then((res) => {
        setDeal(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[1324px] mx-auto mt-[80px]">
      <h1 className="font-poppins font-bold text-[36px] mb-6">
        Deal Of The Day
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {deal.map((item) => (
          <Card1
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

export default Deal;
