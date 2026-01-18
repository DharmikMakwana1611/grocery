import { React, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const images = [
  "/Property 1=slide1.png",
  "/Property 1=slide2.png",
  "/property 1=slide3.png",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  
  return (
    <>
      <div className="w-full h-[620px] flex justify-center items-center">
        <div className="relative ml-[300px] w-[1320px]">
          <button className="absolute top-[46%] ml-4" onClick={prevSlide}>
            <GrFormPrevious size={28} />
          </button>
          <img
            className="w-[1000px]"
            src={images[current]}
            alt="slide-photo-1"
            srcset=""
          />
          <button
            className="absolute ml-[955px] top-[46%] mr-4"
            onClick={nextSlide}
          >
            <GrFormNext size={28} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
