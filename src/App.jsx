import { useState } from "react";
import "./App.scss";
import NavBar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
