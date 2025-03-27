import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Add from './Add';
import Edit from './Edit';
import Home from './Home';
import SingleItem from './SingleItem';
import Signup from './Signup';
import Login from './Login';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/edit/:id" element={<Edit />} />
        <Route path="/product/add" element={<Add />} />
        <Route path="/product/:id" element={<SingleItem />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AllRoutes