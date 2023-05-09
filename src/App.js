import "./styles/style.scss";
import "./styles/style.css";
import Header from "./components/header/Header";
import Category from "./components/category/category";
import NewArrivals from "./components/products/NewArrivals";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default App;
