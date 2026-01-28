import { useEffect, useState } from "react";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/slider")
      .then((res) => setSlides(res.data))
      .catch((err) => console.log(err));
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  if (slides.length === 0) return null;

  return (
    <div className="w-full h-[620px] flex justify-center items-center">
      <div className="relative ml-[300px] w-[1320px]">

        <button className="absolute top-[46%] ml-4" onClick={prevSlide}>
          <GrFormPrevious size={28} />
        </button>

        <img
          className="w-[1000px]"
          src={`http://localhost:5000/uploads/${slides[current].image}`}
          alt="slider"
        />

        <button
          className="absolute ml-[955px] top-[46%]"
          onClick={nextSlide}
        >
          <GrFormNext size={28} />
        </button>

      </div>
    </div>
  );
}

export default Slider;
