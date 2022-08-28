import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/REACT/components/HEADER/header";

export default function App(){
    return(
      <>
          <Header/>
      </>
    )
  }
  
  const entryPointMalta = document.getElementById("root");
  ReactDOM.render(<App/>, entryPointMalta);