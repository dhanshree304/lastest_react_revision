import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

const Hotels = (props) => {
  const { trip } = props;
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5 flex flex-col items-start">
        Hotels Recommendations
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-evenly mt-7">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <div key={index}>
            <HotelCardItem hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
