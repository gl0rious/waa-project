import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid, TextField, Button, Container } from "@mui/material";

const PaymentInfoStep = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        cardNumber: "",
        expirationDate: "",
        validationCode: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6">Payment Information</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Card Number"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Expiration Date"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Validation Code"
                            name="validationCode"
                            value={formData.validationCode}
                            onChange={handleInputChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default PaymentInfoStep;
