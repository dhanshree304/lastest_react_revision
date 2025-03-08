import { Button } from "@/components/ui/button";
import { GetPlaceDetails, GetWikiImage } from "@/service/GlobalApi";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { getJson } from "serpapi";

const InfoSection = (props) => {
  const { trip } = props;

const [place,setPlace]=useState()

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  console.log(trip)

  const GetPlacePhoto = async () => {

    const res = await GetWikiImage( trip?.userSelection?.location);
    setPlace(res)
  };
  return (
    <div>
      <img
        onError={() => setPlace("/aeroplane.webp")}
        src={place || "/aeroplane.webp"}
        className="h-[300px] w-full object-cover rounded-xl"
      />
      <div className="my-5 flex flex-col items-start">
        <h2 className="font-bold text-2xl">{trip?.userSelection?.location}</h2>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray text-xs md:text-md">
            🗓️{trip?.userSelection?.noOfDays} Days
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray text-xs md:text-md">
            💰{trip?.userSelection?.budget} Budget
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray text-xs md:text-md">
            🥂 No. Of Traveler : {trip?.userSelection?.traveler} Days
          </h2>
        </div>

        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
