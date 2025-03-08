import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Ensure correct import for Button

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const Header = () => {

  const user = JSON.parse(localStorage.getItem("user"));
   const [openDialog, setOpenDialog] = useState(false);

   const login = useGoogleLogin({
     onSuccess: (codeResp) => getUserProfile(codeResp),
     onError: (error) => console.log(error),
   })

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
         setOpenDialog(false)
         window.location.reload()


       })
   };

  useEffect(() => {
   
  }, [user]); // Adding `user` as a dependency
console.log(user)
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-3 static ">
      <img src="/logo.jpg" alt="Logo" className="h-20" />
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trip
              </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  src={
                    user?.picture ||
                    "https://tse1.mm.bing.net/th?id=OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3&pid=Api&P=0&h=220"
                  }
                  className="h-[35px] w-[35px] rounded-full"
                  alt="User"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
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

export default Header;
