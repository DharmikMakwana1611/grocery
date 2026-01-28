import { React, useState } from "react";
import Card from "./Card";
import { PiGridFourFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa6";
import List from "./List";

function Shop(name, price, rating, reviews, inStock, image) {
  const [view, setView] = useState("grid"); // "grid" | "list"


  const product2 = [
    {
      id: 2,
      name: "Tomato",
      price: 20,
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 85,
      inStock: true,
      image: "/pngfind 1.png",
    },
    {
      id: 3,
      name: "Milk Bottle",
      price: 12,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/Group 43.png",
    },
    {
      id: 4,
      name: "Mountain Dew PCK",
      price: 250,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/pngfind 2.png",
    },
    {
      id: 6,
      name: "Jimari Chass Masala",
      price: 62,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/jimri 1.png",
    },
    {
      id: 7,
      name: "Jim Jams",
      price: 54,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/jim-jam 1.png",
    },
    {
      id: 8,
      name: "Inida Gate Rice",
      price: 250,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/rice 1.png",
    },
    {
      id: 2,
      name: "Tomato",
      price: 20,
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 85,
      inStock: true,
      image: "/pngfind 1.png",
    },
    {
      id: 3,
      name: "Milk Bottle",
      price: 12,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/Group 43.png",
    },
    {
      id: 4,
      name: "Mountain Dew PCK",
      price: 250,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/pngfind 2.png",
    },
    {
      id: 6,
      name: "Jimari Chass Masala",
      price: 62,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/jimri 1.png",
    },
    {
      id: 7,
      name: "Jim Jams",
      price: 54,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/jim-jam 1.png",
    },
    {
      id: 8,
      name: "Inida Gate Rice",
      price: 250,
      rating: 3.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore, labore quasi, qui enim cum quo rerum quaerat natus minus harum magni est. Totam, sequi ducimus at soluta dolorum ad.",
      reviews: 60,
      inStock: true,
      image: "/rice 1.png",
    },
  ];

  const categories = [
    { name: "Vegetables", count: 25 },
    { name: "Fruits", count: 15 },
    { name: "Coffee & Tea", count: 5 },
    { name: "Cleaning & Ess.", count: 15 },
    { name: "Beverage", count: 8 },
    { name: "Bakery Products", count: 75 },
  ];

  const Discounts = [
    { name: "Discout 28%", count: 25 },
    { name: "Discount 20%", count: 15 },
    { name: "Discount 30%", count: 5 },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex gap-6">
        <div className="w-[309px] mt-[60px] shrink-0">
          <div className="flex items-center">
            <p className="font-poppins font-bold text-[18px]">Filter</p>
            <p className="font-poppins text-[#33B44A] ml-auto cursor-pointer">
              Clear All
            </p>
          </div>

          <hr className="border-b-2 border-gray-300 mt-3" />

          <div className="flex items-center mt-[20px]">
            <p className="font-poppins text-[16px] font-bold">
              Product Category
            </p>
            <p className="font-poppins text-lg ml-auto cursor-pointer font-bold">
              +
            </p>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center font-poppins text-[14px] cursor-pointer"
              >
                <span>{item.name}</span>
                <span className="ml-auto text-gray-500">({item.count})</span>
              </div>
            ))}
          </div>

          <hr className="border-b-2 border-gray-300 mt-3" />

          <div className="flex items-center mt-[20px]">
            <p className="font-poppins text-[16px] font-bold">
              Product Compaings
            </p>
            <p className="font-poppins text-lg ml-auto cursor-pointer font-bold">
              +
            </p>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {Discounts.map((item, index) => (
              <div
                key={index}
                className="flex items-center font-poppins text-[14px] cursor-pointer"
              >
                <span>{item.name}</span>
                <span className="ml-auto text-gray-500">({item.count})</span>
              </div>
            ))}
          </div>

          <hr className="border-b-2 border-gray-300 mt-3" />

          <div className="flex items-center mt-[20px]">
            <p className="font-poppins text-[16px] font-bold">
              Filter By Price
            </p>
            <p className="font-poppins text-lg ml-auto cursor-pointer font-bold">
              +
            </p>
          </div>

          <div className="flex items-center mt-[56px]">
            <p className="font-poppins text-[14px]">Price: $15 - $50</p>
            <button className="h-[34px] w-[72px] rounded-lg border-2 border-[#3A3A3A] ml-auto">
              Filter
            </button>
          </div>

          <hr className="border-b-2 border-gray-300 mt-[34px]" />

          <img className="mt-[37px]" src="/add-banner1 1.png" alt="" />
        </div>

        <div className="ml-[27px] flex-1 mt-[50px]">
          <div className="flex items-center mb-6">
            <p>Showing 16 of 110 Results</p>

            <PiGridFourFill
              onClick={() => setView("grid")}
              className={`ml-auto w-[40px] h-[40px] p-2 border-2 rounded-lg cursor-pointer border-[#3A3A3A]
    ${view === "grid" ? "bg-[#3A3A3A] text-white" : "text-[#3A3A3A]"}`}
              size={25}
            />

            <FaListUl
              onClick={() => setView("list")}
              className={`w-[40px] ml-[15px] h-[40px] border-[#3A3A3A] p-2 border-2 rounded-lg cursor-pointer
    ${view === "list" ? "bg-[#3A3A3A] text-white" : "text-[#3A3A3A]"}`}
              size={25}
            />

            <p className="ml-[20px]">Sorting:</p>

            <select className="border-2 rounded-lg px-3 py-2 h-[41px] w-[200px] ml-[19px]">
              <option value="default">Default</option>
            </select>
          </div>

          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
              {product2.map((item) => (
                <Card
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
          ) : (
            <div className="flex flex-col gap-4">
              {product2.map((item) => (
                <List 
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.reviews}
                  inStock={item.inStock}
                  image={item.image}
                />
              ))}
            </div>
          )}

          <div className="flex justify-center items-center gap-2 mt-[60px]">
            <button className="px-3 py-2 border rounded-[12px] bg-[#EDEDED]">
              Prev
            </button>
            <button className="w-[36px] h-[36px] border rounded-full bg-[#33B44A] text-white">
              1
            </button>
            <button className="w-[36px] h-[36px] bg-[#EDEDED] border rounded-full">
              2
            </button>
            <button className="w-[36px] h-[36px] bg-[#EDEDED] border rounded-full">
              3
            </button>
            <button className="w-[36px] h-[36px] bg-[#EDEDED] border rounded-full">
              4
            </button>
            <button className="px-3 py-2 border rounded-[12px] bg-[#33B44A] text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
