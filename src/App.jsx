import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/products-page/ProductList.jsx";
import ShoppingCartPage from "./components/shopping-cart/ShoppingCartPage";
import AddProductForm from "./pages/product/AddProductForm.jsx";
import ProductDetail from "./components/products-page/ProductDetail.jsx";
import Checkout from "./pages/checkout-page/Checkout.jsx";
import OrderTable from "./pages/OrderTable.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import LoginPage from "./LoginPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProductForm />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/products/:productId/edit"
            element={<UpdateProductForm />}
          />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
