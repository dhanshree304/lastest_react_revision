
import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import { CreateBook } from "../Pages/CreateBook";
import { Login } from "../Pages/Login";
import { Edit } from "../Pages/Edit";
import { SinglePage } from "../Pages/SingleBook";
import { RequireAuth } from "./RequireAuth";
import { Signup } from "../Pages/Signup";


const AllRoutes =()=>{
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book/create"
          element={
            <RequireAuth>
              <CreateBook />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/edit/:id"
          element={
            <RequireAuth>
              <Edit />
            </RequireAuth>
          }
        />
        <Route
          path="/book/:id"
          element={
            <RequireAuth>
              <SinglePage />
            </RequireAuth>
          }
        />
      </Routes>
    );
}

export {AllRoutes}