import './App.css';
import './index.css'; // Добавьте эту строку
import Header from './components/Header/Header.jsx';
import PopularCategories from './screens/PopularCategories/PopularCategories.jsx';
import PopularProducts from './screens/PopularProducts/PopularProducts.jsx';
import Footer from './components/Footer/Footer.jsx';




function App() {
  return (
    <div>
      <Header />
      <PopularCategories />
      <PopularProducts /> 
      <Footer/>
    </div>
  );
}

export default App;

