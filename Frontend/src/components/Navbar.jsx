import React from "react";
import {
  FaRegUser,
  FaRegHeart,
  FaSearch,
  FaGift,
  FaAngleDown,
  FaShoppingCart,
} from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiSquaresFourLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="font-poppins">
        <nav className="flex h-[70px] items-center">
          <img className="ml-5" src="/logo 1.png" alt="Logo" />
          <div className="ml-20 bg-gray-200 rounded-xl p-2 flex items-center">
            <input
              className="text-sm bg-transparent outline-none w-[269px]"
              type="text"
              placeholder="Search for Products ..."
            />
            <FaSearch className="ml-9" size={23} />
          </div>
          <div className="flex ml-auto items-center gap-5 mr-5">
            <div className="flex">
            <HiOutlineDevicePhoneMobile size={25} />
            <Link to="tel:1800-000-000">+1 1800-000-000</Link>
            </div>
            <div className="flex">
              <FaGift size={25} />
              <Link to="/" className="ml-3">
                Offers
              </Link>
            </div>
            <div className="relative bg-[#EF3F234D] rounded-full p-2">
              <p className="absolute -top-1 -right-1 bg-[#EF3F23] text-white text-[10px] h-[18px] w-[18px] flex items-center justify-center rounded-full">
                2
              </p>
              <Link to="/"><FaRegHeart size={20} color="black" /></Link>
            </div>
            <Link to="/"><FaRegUser size={28} /></Link>
          </div>
        </nav>
        <hr className="border-b-2 border-gray-300" />
      </div>
      <div>
        <nav className="flex h-[60px] items-center">
            <PiSquaresFourLight className="ml-5 mr-2" size={25} />
          <p className=" text-lg">Select Category</p>
          <div className="h-[60px] ml-4 border-r-2 border-gray-300"></div>
          <div className="flex p-2 items-center">
            <Link to="/" className="p-2">
              Home
            </Link>
            <Link to="/" className="p-2">
              New Product
            </Link>
            <Link to="/product" className="p-2">
              Featured Product
            </Link>
            <Link to="/listing" className="p-2">
              Shop
            </Link>
            <div className="relative group">
              <button className="p-2 flex items-center cursor-pointer">
                Pages <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded w-40 z-50 top-full left-0 border border-gray-200">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  About
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Checkout
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Cart
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  My Account
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Blog
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Contact
                </Link>
              </div>
            </div>
            <Link to="/" className="p-2">
              Contact
            </Link>
          </div>
          <div className="flex ml-auto bg-[#EF3F23] text-white text-m h-[60px] w-[150px] items-center justify-center font-bold">
            <FaShoppingCart className="" size={24} />
            <button className="ml-4">Cart (5)</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
