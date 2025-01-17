import React, { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import { StoreContext } from "./Context/StoreContext";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyProfile from "./pages/MyProfile/MyProfile";

const App = () => {
  const { token, setToken } = useContext(StoreContext);
  const [showlogin, setShowlogin] = useState(!token);
  useEffect(() => {
    if (token) {
      setShowlogin(false);
    }
  }, [token]);
  return (
    <>
      {showlogin ? <LoginPopUp setShowlogin={setShowlogin} /> : <></>}
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
