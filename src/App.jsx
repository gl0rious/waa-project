import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/products-page/ProductList.jsx";
import AddProductForm from "./pages/product/AddProductForm.jsx";
import ProductDetail from "./components/products-page/ProductDetail.jsx";
import Checkout from "./pages/checkout-page/Checkout.jsx";
import OrderTable from "./pages/OrderTable.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import LoginPage from "./LoginPage.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/products" element={<ProductList/>}/>
                    <Route path="/products/add" element={<AddProductForm/>}/>
                    <Route path="/products/:productId" element={<ProductDetail/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/orders" element={<OrderTable/>}/>
                    <Route path="/updateproduct" element={<UpdateProductForm/>}/>
                    <Route path="/shop" element={<ShoppingCart/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
