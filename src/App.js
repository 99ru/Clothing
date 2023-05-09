import './styles/style.scss';
import './styles/style.css';
import Header from './components/header/Header';
import Category from './components/category/category';
import NewArrivals from './components/products/NewArrivals';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Category />
      </main>
     

     
      <NewArrivals />
  
  

      
    </div>
  );
}

export default App;
