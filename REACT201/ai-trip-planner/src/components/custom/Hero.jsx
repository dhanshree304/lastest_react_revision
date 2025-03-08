import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const images=["home1.jpg","home2.jpg","home3.jpg","home4.jpg"];

const Hero = () => {


  return (          
    
    <div className="flex flex-col items-center  gap-9 ">
      <h1 className="font-extrabold text-[30px] text-center mt-2">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Iterneraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Paragraphs are the building blocks of papers.group of at least five
        sentences, a paragraph is half a page long
      </p>
      <Link to={`/create-trip`}>
        <Button>Get Started, its Free</Button>
      </Link>

      <div className="pb-[20px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-center gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-[300px] h-[200px] object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
//sm:ipad lg:laptop no :mobile

export default Hero;
    