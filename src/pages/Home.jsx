import Hero from "../Container/Hero";
import Tag from "../components/Tags";
import Navbar from "../Container/Navbar";
import About from "../Container/About";
import Service from "../Container/Services";
import Fanctionality from "../Container/Functionality";
import Testimonial from "../Container/Testimonial";
import Footer from "../Container/Footer";

export default function App(){
  return(

    <>
      <Navbar/>
      <Hero/>
      <Tag/>
      <About/>
      <Service/>
      <Fanctionality/>
      <Testimonial/>
      <Tag/>
      <Footer/>
      
    </>
    
  );
}
