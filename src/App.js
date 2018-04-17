import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default class App extends React.Component {

	render(){
		return(
			
		  <div>
		    <Navbar />
		    <div className="row">
		      <Body />
		    </div>
		    <Footer />
		  </div>
	  )
	}
}


