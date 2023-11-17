import Grid from "@mui/material/Grid";

const GridLayout = ({ ItemComponent, items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.productNumber} item xs={12} sm={6} md={4} lg={3}>
          <ItemComponent {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridLayout;
