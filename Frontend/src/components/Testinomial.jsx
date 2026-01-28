import React from "react";

function Testinomial(rating) {
  return (
    <>
      <div className="flex max-w-[1320px] mx-auto z-10 mt-[80px] items-center">
        <img className="h-[300px] w-[872px]" src={`http://localhost:5000/uploads/banner.png`} alt="" />
        <img
          className="h-[300px] w-[872px] ml-[25px]"
          src={`http://localhost:5000/uploads/add-banner.png`}
          alt=""
        />
      </div>

      <div
        className="-mt-24 mx-auto h-[762px] bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url('/bg 1.png')" }}
      >
        <p className="font-poppins font-bold text-[36px] mt-[183px]">
          What Our Client Say
        </p>

        <div className="flex items-center mt-[60px]">
          <img
            className="h-[80px] w-[80px] z-30 -mr-5"
            src={`http://localhost:5000/uploads/Rectangle18.png`}
            alt=""
          />
          <img
            className="h-[80px] w-[80px] z-40 -mr-5"
            src={`http://localhost:5000/uploads/Rectangle19.png`}
            alt=""
          />
          <img
            className="h-[100px] w-[100px] z-50"
            src={`http://localhost:5000/uploads/Rectangle17.png`}
            alt=""
          />
          <img
            className="h-[80px] w-[80px] z-40 -ml-5"
            src={`http://localhost:5000/uploads/Rectangle18.png`}
            alt=""
          />
          <img
            className="h-[80px] w-[80px] z-30 -ml-5"
            src={`http://localhost:5000/uploads/Rectangle19.png`}
            alt=""
          />
        </div>
        <p className="w-[872px] mt-[60px] text-center text-[16px] font-poppins items-center justify-center">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          similique nulla officiis laboriosam deserunt delectus laborum
          blanditiis dolorem facilis molestiae accusamus, ullam exercitationem
          repudiandae rerum, quidem cum, atque beatae error."
        </p>

        <p className="font-semibold font-poppins mt-[34px]">Mahesh Patel</p>

        <div className="relative inline-block leading-none mt-[11px]">
          <div className="text-white text-xl">★★★★★</div>

          <div
            className="absolute top-0 left-0 overflow-hidden text-green-600 text-xl"
            style={{ width: "70%" }}
          >
            ★★★★★
          </div>
        </div>
      </div>
    </>
  );
}

export default Testinomial;
