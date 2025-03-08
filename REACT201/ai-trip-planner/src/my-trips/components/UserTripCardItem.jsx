import { Button } from "@/components/ui/button";
import { GetWikiImage } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function UserTripCardItem({ trip, deleteAiTrip, loading = false }) {
  const [place, setPlace] = useState();
console.log(loading)
  const GetPlacePhoto = async () => {
    const res = await GetWikiImage(trip?.userSelection?.location);
    setPlace(res);
  };

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  return (
    <div className="col-span-1 border p-2 rounded-md hover:scale-105 transistion-all ">
      <div className=" w-full ">
        <div>
          <Link to={"/view-trip/" + trip?.id}>
            <img
              onError={() => setPlace("/aeroplane.webp")}
              src={place ? place : "/aeroplane.webp"}
              className="object-cover rounded-xl h-[200px] w-96"
            />
          </Link>
          <div className="flex items-center w-full justify-between">
            <div>
              <h2 className="font-medium text-lg text-left">
                {trip?.userSelection?.location}
              </h2>
              <h2 className="text-sm text-gray-500 text-left">
                {trip?.userSelection?.noOfDays} Days trip with,
                {trip?.userSelection?.budget} Budget
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                deleteAiTrip(trip.id);
              }}
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
              ) : (
                <TbTrash className="text-red-600" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTripCardItem;
