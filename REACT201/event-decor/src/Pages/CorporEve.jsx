import { motion } from "framer-motion";

const diwali = ["diwali4.jpg", "diwali1.jpg", "diwali2.jpg"];
const navratri = ["navratri2.png", "navratri4.webp", "navratri1.jpg"];
const ganpati = ["gan1.jpg", "maingan2.jpg", "mainGan.jpg"];

const CorporEve = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="w-[40%]">
          <p>
            Planning an event, whether it’s saying “I do” under a starlit sky or
            hosting a corporate gala that’s the talk of the town, should be
            exciting, not stressful. That’s where we come in! We believe in
            creating experiences that reflect your style and spirit, and we’re
            here to make that happen with a sprinkle of fun and a whole lot of
            passion. Got a vision of your perfect wedding? Dreaming of an
            corporate event that stands out? Let’s make it a reality! Reach out
            to us and let’s chat about your ideas, themes, and what makes your
            heart tick when it comes to celebrations. We’re more than just
            planners; we’re creators of joy, architects of experience, and we’re
            here to guide you every step of the way.
          </p>
        </div>
        <div>
          <motion.img
            src="cor1.jpg"
            alt="Animated"
            className="rounded-2xl shadow-lg object-cover w-[400px] h-[350px]"
            initial={{ x: -200, opacity: 0 }} // Start from the left
            animate={{ x: 0, opacity: 1 }} // Move to normal position
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
          />
        </div>
      </div>

      <div className="flex justify-evenly mt-10">
        <div>
          <motion.img
            src="w1.jpg"
            alt="Animated"
            className="rounded-2xl shadow-lg object-cover w-[400px] h-[350px]"
            initial={{ x: -200, opacity: 0 }} // Start from the left
            animate={{ x: 0, opacity: 1 }} // Move to normal position
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
          />
        </div>
        <div className="w-[40%]">
          <p>
            Planning an event, whether it’s saying “I do” under a starlit sky or
            hosting a corporate gala that’s the talk of the town, should be
            exciting, not stressful. That’s where we come in! We believe in
            creating experiences that reflect your style and spirit, and we’re
            here to make that happen with a sprinkle of fun and a whole lot of
            passion. Got a vision of your perfect wedding? Dreaming of an
            corporate event that stands out? Let’s make it a reality! Reach out
            to us and let’s chat about your ideas, themes, and what makes your
            heart tick when it comes to celebrations. We’re more than just
            planners; we’re creators of joy, architects of experience, and we’re
            here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-[40px] ">
        <h1 className="text-2xl font-bold ml-[30px]  mt-[60px] mb-[50px] ">
          FESTIVALS
        </h1>

        <div className="mt-[20px]">
          <h2 className="text-2xl font-bold ml-[100px]  text-yellow-600 mt-[60px] mb-[50px]">
            Diwali
          </h2>
          <div className="m-auto mt-6 ml-14 flex justify-around ">
            {diwali.map((img, index) => (
              <div key={index} className="w-[50%]  ">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 w-[400px] h-[350px] "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[40px]">
          <h2 className="text-2xl font-bold ml-[100px]  text-yellow-600 mt-[60px] mb-[50px] ">
            Navratri
          </h2>
          <div className="m-auto mt-6 ml-14 flex justify-around ">
            {navratri.map((img, index) => (
              <div key={index} className="w-[50%]  ">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 w-[400px] h-[350px] "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[20px]">
          <h2 className="text-2xl font-bold ml-[100px]  text-yellow-600 mt-[60px] mb-[50px]">
            Ganpati
          </h2>
          <div className="m-auto mt-6 ml-14 flex justify-around ">
            {ganpati.map((img, index) => (
              <div key={index} className="w-[50%]  ">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-110 w-[400px] h-[350px] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporEve;
