import Nav from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./pages/Carousel";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Do from "./pages/Do";
function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Do />
      <Footer />
    </>
  );
}

export default App;
