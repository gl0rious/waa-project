import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import AddBox from "@mui/icons-material/AddBox";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../store/slices/productSlice";
import { addCartItem } from "../../store/slices/cartItemSlice.js";

const ProductCard = (x) => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAdToCart = () => {
    const newItem = {
      id: x.id,
      name: x.name,
      price: x.price,
      quantityInCart: 1,
      imageUrl: x.imageUrl,
    };
    dispatch(addCartItem(newItem));
  };

  const OnDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(removeProduct(x.id));
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={x.imageUrl || "http://via.placeholder.com/640x360"}
        title={x.name}
      />
      <CardContent sx={{ flex: "1 1 auto", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h6" component="div">
          {x.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {x.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {x.price}$
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        {userInfo.role === "user" ? (
          <>
            <Link to={`/shop`}>
              <Button
                variant="contained"
                color="success"
                size="small"
                startIcon={<AddBox fontSize="small" />}
                onClick={handleAdToCart}
              >
                Add to cart
              </Button>
            </Link>

            <Link to={`/products/${x.id}`}>
              <Button
                component={Button}
                size="small"
                color="primary"
                variant="outlined"
                endIcon={<InfoIcon fontSize="small" />}
              >
                Details
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/products/${x.id}/edit`}>
              <Button
                variant="contained"
                color="success"
                size="small"
                startIcon={<Edit fontSize="small" />}
              >
                Edit
              </Button>
            </Link>
            <Button
              size="small"
              color="error"
              variant="contained"
              endIcon={<DeleteIcon fontSize="small" />}
              onClick={OnDeleteProduct}
            >
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
