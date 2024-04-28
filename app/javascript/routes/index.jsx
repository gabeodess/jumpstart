import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Checkout from "../components/Checkout";
import Layout from "../components/Layout";

export default (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
);
