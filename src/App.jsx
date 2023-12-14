import { useState, useEffect, Suspense } from "react"
import { HashLoader } from "react-spinners"
import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Works, Carousel,Footer,Bubblechat} from "./components"


const App=()=> {
  const [isLoading, setIsLoading] = useState(true);
  const someRequest = ()=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
  useEffect(() => {
    someRequest().then(() => {
      setIsLoading(false);
    });
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
          <div className="relative z-0 dark:bg-primary light: bg-purple-100" >
            <div className="dark:bg-hero-pattern bg-cover bg-no-repeat bg-center  light: bg-light-pattern">
              <Navbar/>
              <Hero/>
            </div>
            <Bubblechat />
            <About/>
            <Works/>
            <Experience/>
            <Carousel />
            <div className="relative z-0">
              <Contact/>
              <Footer />
            </div>
          </div>
          </BrowserRouter>
        )
      }
    
    </div>
    
    
    )
  }

  

export default App
