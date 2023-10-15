import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./pages/Home";
import {
  HamburgerActionContext,
  MobileMenuContext,
  NavigationContext,
} from "./context/context";
import { NAVIGATIONS } from "./utils/static";
import { MobileMenu } from "./layouts/MobileMenu";
import { useState, useEffect } from "react";

function App() {
  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Function to update screenWidth
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);

      // Check if the screen width is greater than 768 pixels and close the mobile menu
      if (window.innerWidth > 768) {
        setIsMobileMenuOut(false);
      }
    };

    // Add an event listener for the resize event
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  console.log(screenWidth);
  
  
  
  const handleOpenMobileMenu = () => {
    setIsMobileMenuOut(prev => !prev)
  }

  return (
    <Router>
      <NavigationContext.Provider value={NAVIGATIONS}>
        <MobileMenuContext.Provider value={isMobileMenuOut}>
          <HamburgerActionContext.Provider value={handleOpenMobileMenu}>
            <Header />
          </HamburgerActionContext.Provider>
          <MobileMenu />
        </MobileMenuContext.Provider>
      </NavigationContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
