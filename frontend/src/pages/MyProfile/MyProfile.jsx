import React, { useState, useEffect, useContext } from "react";
import "./MyProfile.css";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const MyProfile = () => {
  const { url } = useContext(StoreContext);
  const email = localStorage.getItem("email") || "";
  const [formData, setFormData] = useState({
    name: "",
    email: email,
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(`${url}/api/user/getUser`, {
          email: email,
        });
        console.log(response.data);
        if (response.data) {
          setFormData({
            name: response.data.user.name,
            email: response.data.user.email,
            password: "",
          });
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.put(`${url}/api/user/updateUser/${email}`, {
        name: formData.name,
        email: formData.email,
        ...(formData.password && { password: formData.password }),
      });

      if (response.data.success) {
        alert("Profile updated successfully!");
        setFormData((prev) => ({
          ...prev,
          password: "",
        }));
      } else {
        setError(response.data.message || "Update failed. Please try again.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-update-container">
      <div className="update-profile-page">
        <h2 className="update-profile-title">Your Information</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="update-profile-form" onSubmit={handleSubmit}>
          <div className="update-profile-group">
            <label htmlFor="name" className="update-profile-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="update-profile-input"
            />
          </div>
          <div className="update-profile-group">
            <label htmlFor="email" className="update-profile-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              disabled
              className="update-profile-input"
            />
          </div>
          <div className="update-profile-group">
            <label htmlFor="password" className="update-profile-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="update-profile-input"
            />
          </div>
          <button type="submit" className="update-profile-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
