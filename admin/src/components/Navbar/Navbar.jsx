import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../Context/AdminContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { token, setToken, showLogin, setShowLogin } = useContext(AdminContext);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken("");
    navigate("/add");
    setShowLogin(true);
    toast.success("You are Logged Out.");
  };

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className="logo" src={assets.logo} alt="" />
      </div>
      <div>
        {!token ? (
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        ) : (
          <button type="button" onClick={handleLogout} className="user-button">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
