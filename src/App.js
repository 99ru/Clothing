import "./styles/style.scss";
import "./styles/style.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MensPage from "./pages/MensPage";
import WomensPage from "./pages/WomensPage";
import { CartProvider } from "./CartContext";

function App() {

  return (
   
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<MensPage />} />
            <Route path="/women" element={<WomensPage />} />
          </Routes>
          <Footer />
        </Router>
        </CartProvider>
    </div>
   
  );
}

export default App;
