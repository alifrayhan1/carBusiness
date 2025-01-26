import { useState } from "react";

function Hero() {
  const carouselData = [
    {
      heading1: "Meet your new car",
      heading2: "Honda Civic Type R",
      source: "/headerImage.png",
    },
    {
      heading1: "Meet your new car",
      heading2: "Honda Civic Type D",
      source: "/headerImage.png",
    },
    {
      heading1: "Meet your new car",
      heading2: "Honda Civic Type G",
      source: "/headerImage.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handelTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handelTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX- endX > 50) {
      handleNext();
    }else if (startX-endX>-50){
      handlePrev();
    }
  }

  return (
    <section>
      <div className="h-screen">
        <div key={carouselData[currentIndex].heading2} className="flex flex-col justify-center items-center space-y-5 h-full"
        onTouchStart={handelTouchStart}
        onTouchEnd={handelTouchEnd}
        >
          <h6 className="text-gray-500 text-xs">
            {carouselData[currentIndex].heading1}
          </h6>
          <h1 className="text-4xl">{carouselData[currentIndex].heading2}</h1>
          <div className="flex gap-4 items-center">
            <button className="text-sm bg-gray-200 text-gray-500 px-3 py-2 rounded-md">
              More Details
            </button>
            <button className="text-sm px-3 py-2 bg-violet-500 text-white rounded-md">
              Test Drive
            </button>
          </div>
          <img
            src={carouselData[currentIndex].source}
            alt={carouselData[currentIndex].heading2}
          />
        </div>
        <div className="flex justify-center items-center gap-10 pb-10">
          <button className="bg-gray-300 h-6 w-6 rounded-sm" onClick={handlePrev}>&#8592;</button>
          <button className="bg-gray-300 h-6 w-6 rounded-sm" onClick={handleNext}>&#8594;</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
