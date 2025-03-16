import { useState } from "react";
import "./App.scss";
import NavBar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
