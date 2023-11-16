import ProductGrid from "./ProductGrid";
import { Container } from "@mui/material";
import AddProduct from "./AddProduct";
import FabButton from "./AddProduct";
import AddIcon from "@mui/icons-material/Add";

const productData = [
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
  { id: 1, title: "Product 1", description: "Description for Product 1" },
  { id: 2, title: "Product 2", description: "Description for Product 2" },
];
const handleFabClick = () => {
  // Add your logic for FAB button click here
  alert("FAB button clicked!");
};

const ProductPage = () => {
  return (
    <Container maxWidth="lg">
      <h1>Products</h1>
      <ProductGrid products={productData} />
      <FabButton label="Add Product" Icon={AddIcon} onClick={handleFabClick} />
    </Container>
  );
};

export default ProductPage;
