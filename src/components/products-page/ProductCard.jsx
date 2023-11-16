import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import AddBox from "@mui/icons-material/AddBox";
import InfoIcon from "@mui/icons-material/Info";

const ProductCard = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/public/images/contemplative-reptile.jpg"
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<AddBox fontSize="small" />}
        >
          Add to cart
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          endIcon={<InfoIcon fontSize="small" />}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;