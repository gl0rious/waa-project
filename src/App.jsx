import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/products-page/ProductPage";
import ShoppingCartPage from "./components/shopping-cart/ShoppingCartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
