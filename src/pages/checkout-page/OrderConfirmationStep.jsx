import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Button, Container } from "@mui/material";

const OrderConfirmationStep = ({ personalInfo, paymentInfo, onConfirm }) => {
    return (
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h6">Order Confirmation</Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Paper>
                        <Typography variant="body1">Customer Information:</Typography>
                        <Typography variant="body2">
                            {JSON.stringify(personalInfo)}
                        </Typography>
                        <Typography variant="body1">Payment Information:</Typography>
                        <Typography variant="body2">
                            {JSON.stringify(paymentInfo)}
                        </Typography>
                        <Typography variant="body1">Order Summary:</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={onConfirm}>
                        Confirm Order
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderConfirmationStep;
