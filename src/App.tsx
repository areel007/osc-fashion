import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigation,
} from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./pages/Home";
import {
  // CloseMobileMenuContext,
  // HamburgerActionContext,
  HandleToggleFavoriteContext,
  IsFavoriteContext,
  // MobileMenuContext,
  // NavigationContext,
  ProductsContext,
} from "./context/context";
import { NavigationProvider } from "./context/navigationContext";
import { MobileMenuProvider } from "./context/mobileMenuContext";
// import { NAVIGATIONS } from "./utils/static";
import { MobileMenu } from "./layouts/MobileMenu";
import { useState, useEffect } from "react";
import { PRODUCTS } from "./utils/static";
import { NotFound } from "./pages/404";
import { PartnersProvider } from "./context/partnersContext";
import { Footer } from "./layouts/Footer";

function App() {
  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isFavorite, setIsFavorite] = useState(false);

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

  // const handleOpenMobileMenu = () => {
  //   setIsMobileMenuOut((prev) => !prev);
  // };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOut(false);
  // };

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <NavigationProvider>
      <MobileMenuProvider>
        <Router>
          <Header />
          <MobileMenu />

          <Routes>
            <Route
              path="/"
              element={
                <IsFavoriteContext.Provider value={isFavorite}>
                  <HandleToggleFavoriteContext.Provider value={handleFavorite}>
                    <ProductsContext.Provider value={PRODUCTS}>
                      <PartnersProvider>
                        <Home />
                      </PartnersProvider>
                    </ProductsContext.Provider>
                  </HandleToggleFavoriteContext.Provider>
                </IsFavoriteContext.Provider>
              }
            />

            {/* No match */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </MobileMenuProvider>
    </NavigationProvider>
  );
}

export default App;
