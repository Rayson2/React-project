import "./App.scss";
import NavBar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import CryptoMarquee from "./pages/CryptoMarquee";
import About from "./pages/About";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <CryptoMarquee />
      <About />
      <Footer />
    </>
  );
}

export default App;
