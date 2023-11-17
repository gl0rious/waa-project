import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductPage from "./components/products-page/ProductPage";
import ShoppingCartPage from "./components/shopping-cart/ShoppingCartPage";
import AddProductForm from "./pages/product/AddProductForm.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import Checkout from "./pages/checkout-page/Checkout.jsx";
import OrderTable from "./pages/OrderTable.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
                    <Route path="/addproduct" element={<AddProductForm/>}/>
                    <Route path="/updateproduct" element={<UpdateProductForm/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/orders" element={<OrderTable/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
