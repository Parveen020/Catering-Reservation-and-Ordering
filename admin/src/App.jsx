import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import { AdminContext } from "./Context/AdminContext";

const App = () => {
<<<<<<< HEAD
  const { token, setToken, showLogin, setShowLogin } = useContext(AdminContext);
  useEffect(() => {
    if (token) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, [token]);

=======
  const url = 'https://homeit-mern-backend.onrender.com';
>>>>>>> bcfb05f52eb452747b713ae1f7e180141dddef13
  return (
    <>
      {showLogin ? <LoginPopUp setShowlogin={setShowLogin} /> : <></>}
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
