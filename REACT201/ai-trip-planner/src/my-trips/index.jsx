import { db } from "@/service/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

import { toast } from "sonner";

const MyTrips = () => {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  const [loading,setLoading] =useState({id:"",state:false})




  const deleteAiTrip = async (tripId) => {
    setLoading({id:tripId,status:true})
    try {
      await deleteDoc(doc(db, "AITrips", tripId));
      toast.success("Trip deleted successfully");
      GetUserTrips();
        setLoading({ id: "", status: false });
    } catch (error) {
      toast.error("Error deleting trip:", error);
        setLoading({ id: "", status: false });
    }
  };

  useEffect(() => {
    GetUserTrips();
  }, []);
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      setUserTrips((preVal) => [...preVal, doc.data()]);
    });
  };

  return (
    <div className="sm:px-10 mt-4">
      <h2 className="font-bold text-2xl flex flex-col items-start">My Trips</h2>

      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        {userTrips.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem
                trip={trip}
                key={index}
                loading={trip.id === loading.id && loading.state}
                deleteAiTrip={deleteAiTrip}
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className=" h-[300px] w-[250px] bg-slate-200 animate-pusle rounded-xl mt-[20px]"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default MyTrips;
