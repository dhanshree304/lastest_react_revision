import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const About = () => {
  const Images = [
    { id: 1, src: "pop1.jpg", name: "Kirti Mehara,Event Manager" },
    { id: 2, src: "pop2.jpg", name: "Paras Charan,Event-Coordinator" },
    { id: 3, src: "pop3.jpg", name: "Shloka Arora,Event Manager" },
    { id: 4, src: "pop4.jpg", name: "Amol Jain,Event-Coordinator" },
    { id: 5, src: "pop5.jpg", name: "Hinaya Sen,Event Manager" },
    { id: 6, src: "pop6.jpg", name: "Aakruti chopra,Event Manager" },
    { id: 7, src: "pop7.jpg", name: "Virat Bhagnani,Event-Coordinator" },
    { id: 8, src: "pop8.jpg", name: "Rahul Bhosle,Event-Coordinator" },
    { id: 11, src: "pop11.jpg", name: "Pritm Khare,Event-Coordinator" },
  ];

  return (
    <div>
      <div className="font-bold ">
        <h4 className="text-2xl ml-[100px]  text-yellow-600 mt-[60px]  ">
          Get In Touch
        </h4>
        <h2 className="text-xl ml-[100px]  text-yellow-600  ">
          SERIOUSLY – WE CAN’T WAIT TO MEET YOU
        </h2>
      </div>
      <div className="flex justify-around ">
        <div className=" w-[500px] h-[500px] overflow-hidden mt-[20px]">
          <motion.img
            src="contactimg2.jpg"
            alt="Animated"
            className="rounded-2xl shadow-lg w-[400px] h-full object-cover"
            initial={{ x: -200, opacity: 0 }} // Start from the left
            animate={{ x: 0, opacity: 1 }} // Move to normal position
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
          />
        </div>
        <div className="w-[40%] mt-[80px]">
          <h1 className="text-2xl font-bold animate-bounce">
            25+ Years of experience
          </h1>

          <h1 className="text-2xl font-bold  mt-10">
            Name : Dhananjay Upadhye{" "}
          </h1>
          <h3 className="text-2xl font-bold mt-10">Phone : [+123 456 7890]</h3>
          <h3 className="text-2xl font-bold mt-10">Email : [owner@email.com]</h3>
          <h3 className="text-2xl font-bold mt-10">
            Website : [www.companywebsite.com]
          </h3>

          <h1 className="flex gap-[60px] text-4xl font-bold mt-10">
            <FaInstagramSquare />
            <FaFacebookSquare />
          </h1>
        </div>
      </div>

      <div className="w-[50%] m-auto mt-[40px]">
        <p>
          About Us Adornment was created with the notion that all events should
          be unique and thoughtful. Our team has worked in the Portland area for
          over 15 years in weddings and special events. We’ve done everything
          from an orchard country wedding of 20 people, to managing high-touch
          corporate galas and multi-day events. Our foundation of events is
          built on providing a full-service and freshly creative team to our
          special clients. Truth – we love what we do, and take pride in
          creating experiences for our clients!
        </p>
      </div>
      <div>
        <h2 className="font-bold  mt-[50px] text-2xl ml-[100px]  text-yellow-600">
          The Team
        </h2>
        <div className="grid grid-cols-3">
          {Images.map((img) => (
            <div
              key={img.id}
              className="relative group w-[400px] h-[400px] mt-[40px] ml-[60px]"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Name Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-semibold text-pretty ">
                  {img.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
