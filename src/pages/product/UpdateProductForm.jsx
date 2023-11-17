import React, {useState, useEffect} from 'react';
import {Button, Grid, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {updateProduct} from "../../store/Actions.js";
import {useNavigate} from "react-router-dom";

const UpdateProductForm = ({productData}) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({...productData});
    const navigate = useNavigate();
    useEffect(() => {
        setProduct({...productData});
    }, [productData]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };
    const showListProducts = () => {
        navigate("/products");
    }
    const handleUpdateProduct = () => {
        dispatch(updateProduct(product));
        showListProducts();
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
                <Button variant="contained" onClick={handleUpdateProduct}>
                    Update Product
                </Button>
            </Grid>
        </Grid>
    );
};

export default UpdateProductForm;
