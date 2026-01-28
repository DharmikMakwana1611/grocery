import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { TbBrandInstagram } from "react-icons/tb";

function Footer() {
  return (
    <div className="bg-[#33B44A33] mt-[60px] py-[55px]">
      <div className="max-w-[1320px] mx-auto flex gap-[80px]">
        <div className="w-[312px]">
          <img src="/logo 1.png" alt="Logo" />
          <p className="font-poppins text-[15px] mt-[18px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            animi quas eveniet velit.
          </p>

          <div className="flex mt-[23px] gap-3">
            <TiSocialFacebook
              size={34}
              className="border-2 border-black rounded-full p-1"
            />
            <TbBrandInstagram
              size={34}
              className="border-2 border-black rounded-full p-1"
            />
            <BiLogoTwitter
              size={34}
              className="border-2 border-black rounded-full p-1"
            />
            <LiaLinkedinIn
              size={34}
              className="border-2 border-black rounded-full p-1"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-poppins text-[20px] font-bold mb-2">Company</p>
          <a href="/" className="text-[15px] font-poppins">
            About Us
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Contact Us
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Blog
          </a>
          <a href="/" className="text-[15px] font-poppins">
            FAQ
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-poppins text-[20px] w-[123px] font-bold mb-2">
            My Account
          </p>
          <a href="/" className="text-[15px] font-poppins">
            Login
          </a>
          <a href="/" className="text-[15px] font-poppins">
            My Account
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Orders
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Checkout
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Wishlist
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-poppins text-[20px] font-bold mb-2">Information</p>
          <a href="/" className="text-[15px] font-poppins">
            Shipping Policy
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Return Policy
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Terms & Condition
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Payment Methods
          </a>
          <a href="/" className="text-[15px] font-poppins">
            Order Tracking
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-poppins text-[20px] font-bold mb-2">News Letter</p>
          <p className="font-poppins text-[15px]">
            Subscribe to our weekly Newsletter and
            <br />
            receive updates via email.
          </p>
          <div className="mt-[15px] flex">
            <input
              type="text"
              placeholder="Enter Your Email Here..."
              className="font-poppins text-[15px] w-[330px] h-[54px] pl-[15px] rounded-full z-0"
            />
            <button className="font-poppins w-[111px] h-[54px] bg-[#33B44A] text-white rounded-full z-10 -ml-16">
              Subscribe
            </button>
            
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-white mt-[25.5px]" />
      <div className="max-w-[1320px] mx-auto mt-[20.5px]  flex items-center justify-between">
        <p className="font-poppins text-[15px] leading-none">
          All Rights Reserved @ Company 2023. Design & Develop By
          <span className="text-[#33B44A]"> Vicasoft LLP.</span>
        </p>

        <div className="flex items-center gap-3">
          <p className="font-poppins text-[15px] leading-none">We Accept</p>
          <img
            src="/payment-4 1.png"
            alt="Payment Methods"
            className="h-[42px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
