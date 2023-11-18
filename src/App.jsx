import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductPage from "./components/products-page/ProductList.jsx";
import ShoppingCartPage from "./components/shopping-cart/ShoppingCartPage";
import AddProductForm from "./pages/product/AddProductForm.jsx";
import ProductDetail from "./components/products-page/ProductDetail.jsx";
import Checkout from "./pages/checkout-page/Checkout.jsx";
import OrderTable from "./pages/OrderTable.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import ShoppingCartApp from "./pages/ShoppingCart.jsx";
import ShoppingCartItems from "./pages/ShoppingCart.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
                    <Route path="/addproduct" element={<AddProductForm/>}/>
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
