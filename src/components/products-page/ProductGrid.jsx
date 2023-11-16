import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            title={product.title}
            description={product.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
