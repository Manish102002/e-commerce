// MyProvider.jsx
import React, { createContext, useState } from 'react';

// Step 1: Create the Context
const MyContext = createContext();

// Step 2: Set up the Provider
const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyContext.Provider value={{ data, setData, cartCount, setCartCount, cartItems, setCartItems }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext }; // Export both the context and the provider
