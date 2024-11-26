import Nav from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./pages/Carousel";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Do from "./pages/Do";
import Customer from "./components/home/Customer";

import Machine from "./pages/Machine";
import GlobalReach from "./pages/GlobalReach";
function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Do />
      <Customer />
      <GlobalReach />
      <Machine />
      <Footer />
    </>
  );
}

export default App;
