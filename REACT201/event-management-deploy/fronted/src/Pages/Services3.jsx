import { useEffect, useState } from "react";

const images = ["eng1.jpg", "eng12.jpg", "eng14.jpg"];
const imagess = [
  "eng2jpg.jpg",
  "eng3jpg.jpg",
  "eng12.jpg",
  "eng5.jpg",
  "eng8jpg.jpg",
  "eng6jpg.jpg",
  "eng7.jpg",
  "eng9.jpg",
];

const Services3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="relative w-[100%] flex justify-center items-center h-[500px] bg-black">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className=" w-[700px] h-[400px] object-cover rounded-lg transition-opacity duration-1000 ease-in-out"
        />
      </div>

      <div>
        <div className="flex space-x-4 overflow-x-auto justify-center mt-[20px]">
          {imagess.map((src, index) => (
            <div
              key={index}
              className="w-[170px] h-[170px] flex-shrink-0 bg-white rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-evenly  gap-[70px] mt-[60px]">
        <div>
          <img
            src="/engc2.jpg"
            alt=""
            className="h-[500px] w-[400px] rounded-full"
          />
        </div>
        <div className="w-[40%] bg-gray-300 rounded-full h-auto text-center text-current">
          Planning an event, whether it’s saying “I do” under a starlit sky or
          hosting a corporate gala that’s the talk of the town, should be
          exciting, not stressful. That’s where we come in! We believe in
          creating experiences that reflect your style and spirit, and we’re
          here to make that happen with a sprinkle of fun and a whole lot of
          passion. Got a vision of your perfect wedding? Dreaming of an
          corporate event that stands out? Let’s make it a reality! Reach out to
          us and let’s chat about your ideas, themes, and what makes your heart
          tick when it comes to celebrations. We’re more than just planners;
          we’re creators of joy, architects of experience, and we’re here to
          guide you every step of the way.
        </div>
      </div>
    </div>
  );
};

export default Services3;
