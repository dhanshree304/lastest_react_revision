import { Button } from "@/components/ui/button";
import { GetWikiImage } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCard({ activity }) {
  const [place, setPlace] = useState();

  const GetPlacePhoto = async () => {
    const res = await GetWikiImage(activity?.placeName);
    setPlace(res);
  };

  useEffect(() => {
    if (activity) {
      GetPlacePhoto();
    }
  }, [activity]);

  return (
    <div className="my-5 col-span-1 border p-2 rounded-sm">
      <p className="text-orange-500 mb-2 flex flex-col items-start">
        {activity.bestTimeToVisit}
      </p>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          activity.placeName
        }
        target="_blank"
      >
        <div className=" border w-ull flex  justify-evenly gap-10 p-7 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
          <div>
            <img
              onError={() => setPlace("/aeroplane.webp")}
              src={place ? place : "/aeroplane.webp"}
              className="size-52"
            />
          </div>
          <div className="w-[60%] ">
            <h4 className="font-bold">{activity.placeName}</h4>
            <p className="text-gray-500">{activity.placeDetails}</p>
            <p className="font-bold">🕰️{activity.travelTime}</p>
            <Button className="size-7">
              <FaMapLocationDot />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

const PlacesToVisit = (props) => {
  const { trip } = props;

  return (
    <div>
      <h2 className="font-bold text-2xl my-5 flex flex-col items-start">
        Places to Visit
      </h2>

      {trip &&
        Object.keys(trip)?.length > 0 &&
        Object.keys(trip?.tripData?.itinerary)
          ?.reverse()
          ?.map((key) => (
            <div key={key}>
              <p className="font-bold text-xl flex flex-col items-start">
                {key}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                {trip?.tripData?.itinerary[key]?.activities?.map(
                  (activity, ind) => (
                    <PlaceCard key={ind} activity={activity} />
                  )
                )}
              </div>
            </div>
          ))}
    </div>
  );
};

export default PlacesToVisit;
