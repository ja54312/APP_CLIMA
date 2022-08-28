import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/REACT/components/HEADER/header";
import Footer from "./src/REACT/components/FOOTER/footer";

export default function App(){
    return(
      <>
          <Header/>
          <Footer/>
      </>
    )
  }
  
  const entryPointMalta = document.getElementById("root");
  ReactDOM.render(<App/>, entryPointMalta);