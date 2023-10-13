import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./pages/Home";
import { NavigationContext } from "./context/context";
import { NAVIGATIONS } from "./utils/static";

function App() {
  return (
    <Router>
      <NavigationContext.Provider value={NAVIGATIONS}>
        <Header />
      </NavigationContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
