import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  console.log(useParams());
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === productId)
  );
  return (
    <Container maxWidth="lg">
      <h1>Product Detail</h1>
      <h2>{product.title}</h2>
    </Container>
  );
};

export default ProductDetail;
