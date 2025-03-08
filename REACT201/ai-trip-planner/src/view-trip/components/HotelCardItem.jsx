// import { PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useState } from 'react'
import { GetWikiImage } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCardItem = ({ hotel }) => {
  const [place, setPlace] = useState();

  useEffect(() => {
    if (hotel) {
      GetPlacePhoto();
    }
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const res = await GetWikiImage(hotel?.hotelName);
    setPlace(res);
  };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="md:mr-5 xl:mr-10 hover:scale-110 transition-all cursor-pointer">
        <img
          onError={() => setPlace("/aeroplane.webp")}
          src={place || "/aeroplane.webp"}
          className="rounded-xl w-[300px] h-[150px]"
        />
        <div className="my-3">
          <h2 className="font-medium mt-7">{hotel.hotelName}</h2>
          <h2 className="text-xs text-gray-500 mt-3">
            📍{hotel?.hotelAddress}
          </h2>
          <h2 className="text-sm mt-3">💰{hotel?.price} $</h2>
          <h2 className="text-sm mt-3">⭐{hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;
