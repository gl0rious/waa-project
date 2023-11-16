import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const UpdateProductForm = ({ productData, updateProduct }) => {
    const [product, setProduct] = useState({ ...productData });

    useEffect(() => {
        // Update form data if productData changes (for initial values)
        setProduct({ ...productData });
    }, [productData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleUpdateProduct = () => {
        updateProduct(product);
    };

    return (
        <Grid container spacing={3}>
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
                <Button variant="contained" onClick={handleUpdateProduct}>
                    Update Product
                </Button>
            </Grid>
        </Grid>
    );
};

export default UpdateProductForm;
