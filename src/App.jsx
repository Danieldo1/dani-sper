import { useState, useEffect } from "react"
import { HashLoader } from "react-spinners"
import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Works, Tech, StarsCanvas} from "./components"


const App=()=> {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 3000); 
    };

    simulateAsyncOperation(); 
  }, []);

  return (
    <div>
      {isLoading ? (
         <HashLoader
         color="#8336d6"
         isLoading
         cssOverride={{ display: "block", margin: "0 auto",alignItems: "center", justifyContent: "center",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
         size={139}
         speedMultiplier={2}
       />
        ) : (
          <BrowserRouter>
          <div className="relative z-0 bg-primary" >
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero/>
            </div>
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            {/* <Feedbacks/> */}
            <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
            </div>
          </div>
          </BrowserRouter>
        )
      }
    
    </div>
    
    
    )
  }

  

export default App
