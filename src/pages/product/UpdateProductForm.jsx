import React, { useState, useEffect } from "react";
import {Button, Container, Grid, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {updateProduct} from "../../store/slices/productSlice.js";

const UpdateProductForm = ({ productData }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ ...productData });
  const navigate = useNavigate();
  useEffect(() => {
    setProduct({ ...productData });
  }, [productData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const showListProducts = () => {
    navigate("/products");
  };
  const handleUpdateProduct = () => {
    dispatch(updateProduct(product));
    showListProducts();
    setProduct({
      productNumber: "",
      name: "",
      price: "",
      description: "",
      numberInStock: "",
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
      <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '50px'}}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                      Update Product
                  </Typography>
              </Grid>
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
                      style={{display: 'none'}}
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
                              style={{width: '200px', height: 'auto', marginTop: '10px'}}
                          />
                      </div>
                  )}
              </Grid>
              <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={handleUpdateProduct}>
                      Update Product
                  </Button>
              </Grid>
          </Grid>

      </Container>
  );
};

export default UpdateProductForm;
