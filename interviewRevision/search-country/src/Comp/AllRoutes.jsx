
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SinglePost from "./SinglePost";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-post/:id" element={<SinglePost/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
