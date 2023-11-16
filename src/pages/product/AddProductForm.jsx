import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material';
import {addProduct} from "../../store/Actions.js";

const AddProductForm = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products); // Get products from the Redux store

    const [product, setProduct] = useState({
        productNumber: '',
        name: '',
        price: '',
        description: '',
        numberInStock: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleAddProduct = () => {

        const existingProduct = products.find(
            (prod) => prod.productNumber === product.productNumber
        );

        if (existingProduct) {
            alert('Product already exists in stock!');
            return;
        }

        dispatch(addProduct(product));
        setProduct({
            productNumber: '',
            name: '',
            price: '',
            description: '',
            numberInStock: '',
        });
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
                <Button variant="contained" onClick={handleAddProduct}>
                    Add Product
                </Button>
            </Grid>
        </Grid>
    );
};

export default AddProductForm;
