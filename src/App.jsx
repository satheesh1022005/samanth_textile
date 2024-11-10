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
    </>
  )
}

export default App
