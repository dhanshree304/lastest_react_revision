import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black w-full h-[350px] flex justify-evenly mt-[20px]">
        <div>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Rla-ifG2Q2Qs0V-Vaf8EYQHaFj&pid=Api&P=0&h=220    "
            className="h-[200px]   "
          />
          <h2 className="text-yellow-700 text-3xl ml-[40px]">
            Sudarshan <br />
            Decorations
          </h2>
        </div>
        <div className="flex-col justify-center mt-[80px] gap-[40px]">
          <p className="text-yellow-700 text-xl ">
            <span className="text-3xl mb-[40px]">Get In Touch</span> <br /> 2574
            NW Thurman Street Portland, <br />s OR 97210
            adornmentevents@gmail.com
          </p>
          <div className="flex justify-center gap-[40px] mt-[40px]">
            <FaInstagramSquare className="text-white text-3xl" />
            <FaFacebookSquare className="text-white text-3xl" />
            <FaWhatsapp className="text-white text-3xl" />
          </div>
        </div>
        <div className="flex justify-center gap-[40px]  mt-[80px]">
          <div>
            <img src="/eng3jpg.jpg" className="w-[150px] h-[150px]"/>
          </div>
          <div>
            <img src="/eng8jpg.jpg" className="w-[150px] h-[150px]"/>
          </div>
          <div>
            <img src="/eng5.jpg" alt="" className="w-[150px] h-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
