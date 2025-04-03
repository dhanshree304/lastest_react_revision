import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";

import Login from "./Pages/Login";
import AddBook from "./Pages/AddBook";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import SingleBook from "./Pages/SingleBook";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/single-book/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
