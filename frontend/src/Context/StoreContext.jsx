import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
<<<<<<< HEAD
  const [cartItem, setCartItem] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
=======
    const [cartItem, setCartItem] = useState({});
    const url = "https://homeit-mern-backend.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);
>>>>>>> bcfb05f52eb452747b713ae1f7e180141dddef13

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  };

  const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cartItem");
    return cart ? JSON.parse(cart) : {};
  };

  const addtoCart = async (itemId) => {
    const newCart = { ...cartItem };
    newCart[itemId] = (newCart[itemId] || 0) + 1;
    setCartItem(newCart);
    saveCartToLocalStorage(newCart);

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    const newCart = { ...cartItem };
    if (newCart[itemId] > 1) {
      newCart[itemId] -= 1;
    } else {
      delete newCart[itemId];
    }
    setCartItem(newCart);
    saveCartToLocalStorage(newCart);

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.get(url + "/api/cart/get", {
        headers: { token },
      });
      if (response.data.success) {
        const fetchedCart = response.data.cartData || {};
        setCartItem(fetchedCart);
        saveCartToLocalStorage(fetchedCart); // Store fetched cart in localStorage
      } else {
        console.error("Failed to load cart data:", response.data.message);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  const resetCart = () => setCartItem({});

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      const storedCart = loadCartFromLocalStorage();
      // setCartItem(storedCart); // Load from local storage first in case no token is available

      if (localStorage.getItem("token")) {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        await loadCartData(storedToken); // Load from backend if token is available
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addtoCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    resetCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
