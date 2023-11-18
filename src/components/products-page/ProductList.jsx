import { Container, Link } from "@mui/material";
import FabButton from "../FabButton";
import AddIcon from "@mui/icons-material/Add";
import GridLayout from "../GridLayout";
import ProductCard from "./ProductCard";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const handleFabClick = () => {
  alert("FAB button clicked!");
};

const ProductList = () => {
  const products = useSelector((state) => state.products);
  return (
    <Container maxWidth="lg">
      <h1>Products</h1>
      <GridLayout ItemComponent={ProductCard} items={products} />
      <Link component={RouterLink} to="/addproduct" underline="none">
        <FabButton label="Add Product" Icon={AddIcon} />
      </Link>
    </Container>
  );
};

export default ProductList;
