import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./pages/Home";
import { NavigationProvider } from "./context/navigationContext";
import { MobileMenuProvider } from "./context/mobileMenuContext";
import { MobileMenu } from "./layouts/MobileMenu";
import { NotFound } from "./pages/404";
import { PartnersProvider } from "./context/partnersContext";
import { Footer } from "./layouts/Footer";
import { FavoriteContextProvider } from "./context/favoriteContext";
import { ProductContextProvider } from "./context/productsContext";
import { SearchBoxContextProvider } from "./context/searchContext";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <NavigationProvider>
      <MobileMenuProvider>
        <PartnersProvider>
          <FavoriteContextProvider>
            <ProductContextProvider>
              <SearchBoxContextProvider>
                <Router>
                  <Header />
                  <MobileMenu />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home />
                      }
                    />

                    {/* About us */}
                    <Route path="/about" element={<AboutUs />} />

                    {/* No match */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </Router>
              </SearchBoxContextProvider>
            </ProductContextProvider>
          </FavoriteContextProvider>
        </PartnersProvider>
      </MobileMenuProvider>
    </NavigationProvider>
  );
}

export default App;
