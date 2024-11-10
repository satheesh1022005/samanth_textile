<<<<<<< HEAD
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
=======
import Nav from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './pages/Carousel';
import Footer from './pages/Footer';
import About from './pages/About';
import Customer from './components/home/Customer';
function App() {
  return (
    <>
      <Nav/>
      <Carousel/>
      <About/>
      <Customer/>
      <Footer/>
>>>>>>> ee8d32c5fd09ab13e7a0a6a44bf71f39656284bb
    </>
  );
}

export default App;
