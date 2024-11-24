import Nav from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./pages/Carousel";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Do from "./pages/Do";
import Customer from "./components/home/Customer";
import Machine from "./pages/Machine";

function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Do />
      
      <Customer/>
      <Machine />
      <Footer />
      
    </>
  );
}

export default App;
