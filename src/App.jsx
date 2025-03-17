import { useState } from "react";
import "./App.scss";
import NavBar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import CryptoMarquee from "./pages/CryptoMarquee";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CryptoMarquee />
      <Footer />
    </>
  );
}

export default App;
