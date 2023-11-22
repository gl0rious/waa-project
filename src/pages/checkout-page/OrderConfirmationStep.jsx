import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {
    Grid,
    Paper,
    Button,
    Container,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import {motion} from "framer-motion";
import {addOrder} from "../../store/slices/orderSlice.js";
import {useDispatch} from "react-redux";

const OrderConfirmationStep = ({personalInfo, paymentInfo, onConfirm,items}) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const dispatch = useDispatch();
    const [orderData,setOrderData] = useState({});
    const transformItemsForBackend = (items) => {
        return items.map((item) => {
            return {
                quantity: item.quantityInCart,
                name: item.name,
                price: parseFloat(item.price), // Assuming 'price' is received as a string
            };
        });
    };
    const transformedItems = transformItemsForBackend(items);

    const handleConfirmOrder = async () => {
        try {
            await dispatch(addOrder({
                customerName: personalInfo.name,
                email: personalInfo.email,
                phone: personalInfo.phone,
                street: personalInfo.street,
                city: personalInfo.city,
                zip: personalInfo.zip,
                creditCardType: "VISA",
                creditCardNumber: paymentInfo.cardNumber,
                creditCardExpiry: paymentInfo.expirationDate,
                validationCode: paymentInfo.validationCode,
                status: "PENDING",
                items: transformedItems
            }));

            setShowConfirmation(true);
            setTimeout(() => {
                setShowConfirmation(false);
            }, 2000);
        } catch (error) {
            console.error("Error adding order:", error);
            // Handle error state or show error message
        }
    };
    return (
        <Container maxWidth="sm"
                   style={{textAlign: "center", marginTop: "50px", backgroundColor: "#f0f0f0", padding: "20px"}}>
            <Typography variant="h6">Order Confirmation</Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Paper style={{backgroundColor: "#e0e0e0", padding: "20px"}}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align={"center"} variant={"head"}>User Information</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="body1">Name:</Typography>
                                            <Typography variant="body2">{personalInfo.name}</Typography>
                                            <Typography variant="body1">Email:</Typography>
                                            <Typography variant="body2">{personalInfo.email}</Typography>
                                            <Typography variant="body1">Phone:</Typography>
                                            <Typography variant="body2">{personalInfo.phone}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1">City:</Typography>
                                            <Typography variant="body2">{personalInfo.city}</Typography>
                                            <Typography variant="body1">Stree:</Typography>
                                            <Typography variant="body2">{personalInfo.street}</Typography>
                                            <Typography variant="body1">ZIP:</Typography>
                                            <Typography variant="body2">{personalInfo.zip}</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{backgroundColor: "#d0d0d0", padding: "20px"}}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Payment Information</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="body1">Card Number:</Typography>
                                            <Typography variant="body2">{paymentInfo.cardNumber}</Typography>
                                            <Typography variant="body1">Expiry Date:</Typography>
                                            <Typography variant="body2">{paymentInfo.expirationDate}</Typography>
                                            <Typography variant="body1">Validation Code:</Typography>
                                            <Typography variant="body2">{paymentInfo.validationCode}</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Button variant="contained" color="primary" onClick={handleConfirmOrder}>
                            Confirm Order
                        </Button>
                    </motion.div>
                    {showConfirmation && (
                        <div style={{
                            marginTop: '10px',
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '5px'
                        }}>
                            <Typography variant="body1">Your order has been added...</Typography>
                        </div>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderConfirmationStep;
