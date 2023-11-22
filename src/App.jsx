import "./App.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProductList from "./components/products-page/ProductList.jsx";
import AddProductForm from "./pages/product/AddProductForm.jsx";
import ProductDetail from "./components/products-page/ProductDetail.jsx";
import Checkout from "./pages/checkout-page/Checkout.jsx";
import OrderTable from "./pages/OrderTable.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import LoginPage from "./LoginPage.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {useState} from "react";

function App() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar onShow={setShowSideBar}/>
                <div className="content"
                     style={{marginLeft: !showSideBar ? "80px" : "0"}}
                >
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                        <Route path="/products/add" element={<AddProductForm/>}/>
                        <Route path="/products/:productId" element={<ProductDetail/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/orders" element={<OrderTable showSideBar={showSideBar}/>}/>
                        <Route path="/updateproduct" element={<UpdateProductForm/>}/>
                        <Route path="/shop" element={<ShoppingCart showSideBar={showSideBar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
