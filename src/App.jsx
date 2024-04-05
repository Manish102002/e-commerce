import React from "react";
import BackgroundSlider from "./Components/Home.jsx/BackgroundSlider";
import Shop from "./Components/Shopping/Shop";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
// import { MyProvider } from "./Components/Context/MyProvider";
import AddtoCart from "./Components/CartBox/AddtoCart";
import { Link } from "react-router-dom";
// import MyProvider from "./Components/Context/MyProvider";

const App = () => {
  return (
    <Link to="/">
     
        <BackgroundSlider />
        <Shop />
        <Email />
        <Footer />
        {/* <AddtoCart /> */}

    </Link>
  );
};

export default App;
