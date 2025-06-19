import './App.css';
import './index.css';
import Header from "./components/Header/Header";
import Services from "./screens/Services/Services";
import PopularCategories from "./screens/PopularCategories/PopularCategories";
import PopularProducts from "./screens/PopularProducts/PopularProducts";
import Offers from "./screens/Offers/Offers";
import Footer from "./components/Footer/Footer";
import Pricing from "./screens/Pricing/Pricing";
import TimelineSection from "./screens/Timeline/TimeLine";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <Offers />
      <PopularCategories />
      <PopularProducts />
      <TimelineSection />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;