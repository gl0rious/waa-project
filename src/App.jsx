import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/products-page/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
