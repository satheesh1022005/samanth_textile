import Nav from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./pages/Carousel";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Do from "./pages/Do";
import Customer from "./components/home/Customer";
function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Customer />
      <Do />
      <Footer />
    </>
  );
}

export default App;
