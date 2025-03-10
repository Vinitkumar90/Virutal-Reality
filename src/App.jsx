import Feature from "./components/Feature"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonial from "./components/Testimonial"
import Workflow from "./components/Workflow"


function App() {
 

  return (
    <>
     
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
           <HeroSection/>
           <Feature/>
           <Workflow/>
           <Price/>
           <Testimonial/>
           <Footer/>
      </div>
     
   
     
    </>
  )
}

export default App
