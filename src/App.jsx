import AddProductForm from "./pages/product/AddProductForm.jsx";
import UpdateProductForm from "./pages/product/UpdateProductForm.jsx";
import ListProducts from "./pages/product/ListProducts.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ListProducts/>}/>
                    <Route exact path="/addProduct" element={<AddProductForm/>}/>
                    <Route path="/updateProduct" element={<UpdateProductForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
