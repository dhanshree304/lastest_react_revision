import { useEffect, useState } from "react";


const images = ["main55.jpg","mw9.jpg","main44.jpg"];
const Landing = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     }, 1000); // Change background every 3 seconds

     return () => clearInterval(interval);
   }, []);
  return (
    <div>
      <div
        className="w-full h-[500px] bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay */}
        <div className="w-full h-full flex items-center justify-center bg-black/50 text-white text-4xl font-bold">
          For Making Your Every Event Memorable
        </div>
      </div>

      <div className="flex justify-around h-auto mt-[100px]  ">
        <div className=" text-xl  text-gray-600 w-[40%]">
          <p>
            Blue Wings Events | Event & Wedding Planning Let us take over the
            details while you enjoy your event Are you ready to dive into an
            unforgettable experience filled with laughter, seamless execution,
            and lifelong memories? We’re here to ensure you dance the night
            away, stress-free, surrounded by the magic of meticulously planned
            moments. At Blue Wings Events, we pride ourselves on being more than
            just planners; we are your dedicated partners in crafting an event
            that is specific to you. From intimate I-dos in Tacoma to grand
            corporate galas in Bellingham, and every heartfelt celebration in
            between, we cover all of Washington State with our event planning
            services. Let Blue Wings Events take the reins on the details,
            leaving you to enjoy your event. It’s time to get this party
            started!
          </p>
        </div>

        <div className=" w-[30%] bg-blue-200 rounded-lg shadow-lg">
          <video
            className="w-3/4 rounded-lg shadow-lg h-[400px] m-auto"
            controls
          >
            <source src="ganVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex justify-around  mt-20 text-xl border p-20">
        <div>EXPLORE OUR SERVICES</div>
        <div className="grid grid-cols-3 justify-evenly gap-10">
          <div className="border-2 border-black h-10 w-auto px-3 flex items-center justify-center">
            WEEDING
          </div>
          <div className="border-2 border-black h-10 w-auto px-3 flex items-center justify-center">
            CORPORATE EVENTS
          </div>
          <div className="border-2 border-black h-10 w-auto px-3 flex items-center justify-center">
            FESTIVAL DECOR
          </div>
          <div className="border-2 border-black h-10 w-auto px-3 flex items-center justify-center">
            SPORTS AND TOURNAMENTS
          </div>
          <div className="border-2 border-black h-10 w-auto px-3 flex items-center justify-center">
            OTHER
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
