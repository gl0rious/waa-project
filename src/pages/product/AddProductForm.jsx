import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Grid, TextField} from "@mui/material";
import {addProduct} from "../../store/slices/productSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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
    const [formErrors, setFormErrors] = useState({
        productNumber: "",
        name: "",
        price: "",
        description: "",
        numberInStock: "",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let errors = {...formErrors};
        switch (name) {
            case "productNumber":
                errors.productNumber = value.trim().length > 0 ? "" : "Product number is required";
                break;
            case "name":
                errors.name = value.trim().length > 0 ? "" : "Name is required";
                break;
            case "price":
                errors.price = /^\d+(\.\d{1,2})?$/.test(value) ? "" : "Invalid price format";
                break;
            case "description":
                errors.description = value.trim().length > 0 ? "" : "Description is required";
                break;
            case "numberInStock":
                errors.numberInStock = /^\d+$/.test(value) ? "" : "Invalid number in stock";
                break;
            default:
                break;
        }

        setFormErrors(errors);
        setProduct({...product, [name]: value});
    };

    const handleAddProduct = () => {
        if (Object.values(formErrors).every((error) => error === "")) {
            dispatch(addProduct(product))
            navigate("/products");
        }
    };
    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setProduct({...product, image: imageFile});

        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setProduct({...product, imageUrl});
        }
    };
    return (
        <Container maxWidth="sm" style={{textAlign: "center", marginTop: "50px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="productNumber"
                        label="Product Number"
                        value={product.productNumber}
                        onChange={handleInputChange}
                        helperText={formErrors.productNumber}
                        fullWidth
                        required

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="name"
                        label="Name"
                        value={product.name}
                        onChange={handleInputChange}
                        helperText={formErrors.name}
                        fullWidth
                        required

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="price"
                        label="Price"
                        value={product.price}
                        onChange={handleInputChange}
                        helperText={formErrors.price}
                        fullWidth
                        required

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="description"
                        label="Description"
                        value={product.description}
                        onChange={handleInputChange}
                        helperText={formErrors.description}
                        fullWidth
                        multiline
                        rows={4}
                        required

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="numberInStock"
                        label="Number in Stock"
                        value={product.numberInStock}
                        onChange={handleInputChange}
                        helperText={formErrors.numberInStock}
                        fullWidth
                        required

                    />
                </Grid>
                <Grid item xs={12}>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        style={{display: "none"}}
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
                                style={{width: "200px", height: "auto"}}
                            />
                        </div>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleAddProduct}>
                        Add Product
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProductForm;
