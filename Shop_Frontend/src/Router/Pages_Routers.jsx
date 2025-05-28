import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import Shop from '../Pages/Shop';
import Layout from '../Components/layout/Layout';
import Contact from '../Pages/Contact';
import Cards_Details from '../Components/Sections/Cards_Details';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

function Pages_Routers() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Cards_Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default Pages_Routers;
