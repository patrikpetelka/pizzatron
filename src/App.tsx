import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import OrderCompleted from "./modules/Order/OrderCompleted";
import OrderModal from "./modules/Order/OrderModal";
import OrderConfiguration from "./modules/Order/OrderConfiguration";
import Profile from "./modules/User/Profile";
import SignUp from "./modules/User/SignUp";
import SignIn from "./modules/User/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-config" element={<OrderConfiguration />} />
          <Route path="/order-details" element={<OrderModal />} />
          <Route path="/order-completed" element={<OrderCompleted />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
