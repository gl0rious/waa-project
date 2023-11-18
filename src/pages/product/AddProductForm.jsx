import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Grid, TextField } from "@mui/material";
import { addProduct } from "../../store/slices/productSlice";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productNumber: "",
    name: "",
    price: "",
    description: "",
    numberInStock: "",
  });
  const showListProducts = () => {
    navigate("/products");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    const existingProduct = products.find(
      (prod) => prod.productNumber === product.productNumber
    );

    if (existingProduct) {
      alert("Product already exists in stock!");
      return;
    }

    dispatch(addProduct(product));
    showListProducts();
    setProduct({
      productNumber: "",
      name: "",
      price: "",
      description: "",
      numberInStock: "",
      image: null,
      imageUrl: "",
    });
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProduct({ ...product, image: imageFile });

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setProduct({ ...product, imageUrl });
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Grid item xs={12}>
        <TextField
          name="productNumber"
          label="Product Number"
          value={product.productNumber}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Name"
          value={product.name}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="price"
          label="Price"
          value={product.price}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="description"
          label="Description"
          value={product.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="numberInStock"
          label="Number in Stock"
          value={product.numberInStock}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <input
          accept="image/*"
          id="contained-button-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        {product.imageUrl && (
          <div>
            <img
              src={product.imageUrl}
              alt="Uploaded"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Grid>
    </Container>
  );
};

export default AddProductForm;
