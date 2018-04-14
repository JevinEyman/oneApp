import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => (
  <div>
    <Navbar />
    <div className="row">
      <Header />
      <Body>
        
      </Body>
    </div>
    <Footer />
  </div>
);

export default App;
