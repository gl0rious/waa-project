import {Container, Link} from "@mui/material";
import FabButton from "../FabButton";
import AddIcon from "@mui/icons-material/Add";
import GridLayout from "../GridLayout";
import ProductCard from "./ProductCard";
import {Link as RouterLink} from "react-router-dom";
import {useSelector} from "react-redux";

const productData = [
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
    {id: 1, title: "Product 1", description: "Description for Product 1"},
    {id: 2, title: "Product 2", description: "Description for Product 2"},
];
const handleFabClick = () => {
    alert("FAB button clicked!");
};

const ProductPage = () => {
    console.log(productData);
    const products = useSelector((state) => state.products);
    console.log(products)
    return (
        <Container maxWidth="lg">
            <h1>Products</h1>
            <GridLayout ItemComponent={ProductCard} items={products}/>
            <Link component={RouterLink} to="/addproduct" underline="none">
                <FabButton label="Add Product" Icon={AddIcon}/>
            </Link>
        </Container>
    );
};

export default ProductPage;
