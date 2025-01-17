import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const contextValue = {
    url,
    token,
    setToken,
    showLogin,
    setShowLogin,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
