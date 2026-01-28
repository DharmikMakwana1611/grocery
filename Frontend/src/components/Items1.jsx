import React from "react";
import Card1 from "./Card1";

function Items1() {
    

  return (
    <div className="max-w-[1322px] mt-[80px] mx-auto">
      <p className="font-bold text-[36px] mb-6">Popular Items</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products1.map(item => (
          <Card1
            key={item.id}
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

export default Items1;
