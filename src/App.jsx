import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroArea from "./Components/HeroArea/HeroArea";
import Products from "./Components/Products/Products";
import CartProvider from "./Providers/CartProvider";
import DataProvider from "./Providers/DataProvider";
import FilterAndSortProvider from "./Providers/FilterAndSortProvider";
import SearchProvider from "./Providers/SearchProvider";

export default function App() {
  return (
    <DataProvider>
      <Header />
      <HeroArea />
      <FilterAndSortProvider>
        <CartProvider>
          <SearchProvider>
            <Products />
          </SearchProvider>
        </CartProvider>
      </FilterAndSortProvider>
      <Footer />
      <ToastContainer />
    </DataProvider>
  );
}
