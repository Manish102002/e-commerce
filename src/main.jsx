import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./Hero.jsx";
import { MyProvider } from "./Components/Context/MyProvider.jsx";
// import MyProvider from "./Components/Context/MyProvider.js";
// import MyProvider from "./Components/Context/MyProvider.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <Hero />
    </MyProvider>
  </React.StrictMode>
);
