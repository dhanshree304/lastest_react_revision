// import axios from "axios";
// import { useEffect } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { ComboBox } from "@/components/ui/combo-box";
import { FcGoogle } from "react-icons/fc";
import {
  AI_PROMPT,
  SelectionBudgetOptions,
  SelectTravelOptions,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [placesOptions, setPlacesOptions] = useState([]);
  //all the req info to create a trip is saved in one place
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    if (name == "noOfDays" && value > 5) {
      toast.error("Please enter Trip Days less than 5");
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {}, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast.error("Please fill all details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace(`{totalDays}`, formData?.noOfDays)
      .replace(`{location}`, formData?.location)
      .replace(`{traveler}`, formData?.traveler)
      .replace(`{budget}`, formData?.budget);
    //console.log(FINAL_PROMPT)

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log("__", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    // Add a new document in collection "cities"
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: `Application/json`,
          },
        }
      )
      .then((r) => {
        localStorage.setItem(`user`, JSON.stringify(r.data));
        onGenerateTrip();
      });
  };

  const getPlaces = async (search) => {
    const root = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${search}&key=AlzaSyA0Uta0-HzpVCmZTOx07HddZhPRcYdtoAd`;

    const res = await axios.get(root);
    setPlacesOptions(res.data.predictions ?? []);
    console.log(res);
  };
  useEffect(() => {
    if (searchValue) {
      getPlaces(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl mb-[10px]">
        Tell us your travel preferences
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itineray based on your preferences🌴🏚️🍻
      </p>
      <div className="mt-20">
        <div>
          <h2 className="font-bold text-lg mb-[10px]">
            What is<span className="text-orange-500"> destination </span>of your
            choice?
          </h2>
          <ComboBox
            value={place?.description} //place={in prediction}
            options={placesOptions.map((plc) => ({
              label: plc.description,
              value: plc.description,
            }))}
            onSearchValueChange={(val) => setSearchValue(val)}
            onValueChange={(val) => {
              const temp = placesOptions.find((plc) => plc.description === val);
              setPlace(temp);
              handleInputChange("location", val);
            }}
            placeholder={"search places"}
            searchValue={searchValue}
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <h2 className="font-bold text-lg mb-[10px]">
          How many<span className="text-orange-500"> days </span> are you
          planning a trip?
        </h2>
        <div>
          <input
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            type="text"
            placeholder="Ex.3"
            className="h-9 border w-[500px] outline-none"
          />
        </div>
      </div>

      <div className="mt-[30px]">
        <h2 className="font-bold text-lg mb-[5px]">
          What is Your <span className="text-orange-500">Budget</span>?
        </h2>
        <h4 className="font-bold text-sm mb-[10px]">
          The Budget is allocated for activities and dining purposes
        </h4>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 m-auto gap-[20px] w-[60%]">
          {SelectionBudgetOptions.map((item, index) => {
            return (
              <div
                onClick={() => handleInputChange("budget", item.title)}
                key={index}
                className={`border col-span-1 p-4 cursor-pointer mt-[10px] rounded-lg hover:shadow-lg h-[150px]   ${
                  formData?.budget === item.title && "shadow-xl border-black"
                }`}
              >
                <h2 className="text-2xl mb-5">{item.iconImage}</h2>
                <h2 className="font-bold">{item.title}</h2>
                <h3>{item.desc}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h2 className="font-bold text-lg mb-[5px]">
          Who do you plan on travel with on your next adventure?
        </h2>

        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[15px] mt-5 m-auto w-[80%]">
          {SelectTravelOptions.map((item, index) => {
            return (
              <div
                onClick={() => handleInputChange("traveler", item.title)}
                key={index}
                className={`border p-4 cursor-pointer mt-[10px] rounded-lg hover:shadow-lg h-auto ${
                  formData?.traveler === item.title && "shadow-xl border-black"
                }`}
              >
                <h2 className="text-2xl mb-5">{item.iconImage}</h2>
                <h2 className="font-bold">{item.title}</h2>
                <h3 className="font-bold ">{item.desc}</h3>
                <h3 className="mt-[20px]">{item.people}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button disabled={loading} onClick={onGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign in to the app with google authenticationcsecurly</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" /> Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
//
export default CreateTrip;
