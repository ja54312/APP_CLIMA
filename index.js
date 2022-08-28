//LIBRERIAS
import React from "react";
import ReactDOM from "react-dom";

//COMPONENTES
import Header from "./src/REACT/components/HEADER/header";
import Ubicacion from "./src/REACT/components/UBICACION/ubicacion";
import Body from "./src/REACT/components/BODY/body";
import Footer from "./src/REACT/components/FOOTER/footer";

export default function App(){
    return(
      <>
          <Header/>
          <Ubicacion/>
          <Body/>
          <Footer/>
      </>
    )
  }
  
  const entryPointMalta = document.getElementById("root");
  ReactDOM.render(<App/>, entryPointMalta);