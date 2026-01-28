import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const slides = [
  "/Slide1.png",
  "/Slide2.png",
  "/Slide3.png",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-[620px] flex justify-center items-center">
      <div className="relative w-[1320px] flex items-center justify-center">
        {/* LEFT BUTTON */}
        {slides.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          >
            <GrFormPrevious size={32} />
          </button>
        )}

        <img
          className="w-[1000px] mx-auto"
          src={slides[current]}
          alt="slider"
        />

        {/* RIGHT BUTTON */}
        {slides.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          >
            <GrFormNext size={32} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Slider;
