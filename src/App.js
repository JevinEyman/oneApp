import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Youtube from "./components/Youtube";

const App = () => (
  <div>
    <Navbar />
    <div className="row">
      <Header />
      <Body />
      <Youtube />
    </div>
    <Footer />
  </div>
);

export default App;
