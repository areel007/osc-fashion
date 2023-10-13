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
import { useState } from "react";

function App() {
  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false);

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
