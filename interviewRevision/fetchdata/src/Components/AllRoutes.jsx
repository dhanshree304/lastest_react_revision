import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Add from './Add';
import Edit from './Edit';
import Home from './Home';
import SingleItem from './SingleItem';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/product-detail/:id" element={<SingleItem />} />
      </Routes>
    </div>
  );
}

export default AllRoutes