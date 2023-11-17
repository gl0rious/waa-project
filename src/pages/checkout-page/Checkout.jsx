// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import PersonalInfoStep from "./PersonalInfoStep.jsx";
import PaymentInfoStep from "./PaymentInfoStep.jsx";
import OrderConfirmationStep from "./OrderConfirmationStep.jsx";
import {Button, Container, Grid} from "@mui/material";

const Checkout = () => {
    const [step, setStep] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({});
    const [paymentInfo, setPaymentInfo] = useState({});
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };
    const handlePersonalInfoSubmit = (data) => {
        setPersonalInfo(data);
        nextStep();
    };
    const handlePaymentInfoSubmit = (data) => {
        setPaymentInfo(data);
        nextStep();
    };

    const confirmOrder = async () => {
        try {
            setOrderConfirmed(true);
        } catch (error) {
            console.error("Error confirming order:", error);
        }
    };

    return (
        <div>
            {/* Step indicators */}
            <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        background: step >= 1 ? "green" : "gray"
                    }}></div>
                    <span style={{color: step >= 1 ? "green" : "gray", marginLeft: "10px"}}>1</span>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "0 10px"}}>
                    <div style={{
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        background: step >= 2 ? "green" : "gray"
                    }}></div>
                    <span style={{color: step >= 2 ? "green" : "gray", marginLeft: "10px"}}>2</span>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        background: step >= 3 ? "green" : "gray"
                    }}></div>
                    <span style={{color: step >= 3 ? "green" : "gray", marginLeft: "10px"}}>3</span>
                </div>
            </div>
            {step === 1 && (
                <PersonalInfoStep onSubmit={handlePersonalInfoSubmit}/>
            )}
            {step === 2 && (
                <PaymentInfoStep onSubmit={handlePaymentInfoSubmit}/>
            )}
            {step === 3 && (
                <OrderConfirmationStep
                    personalInfo={personalInfo}
                    paymentInfo={paymentInfo}
                    onConfirm={confirmOrder}
                />
            )}
            {orderConfirmed && <p>Order confirmed! Thank you for your purchase.</p>}
            {step !== 3 && (
                <Container maxWidth="sm" style={{
                    textAlign: "center",
                    marginTop: "50px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={prevStep}
                        disabled={step === 1}
                        style={{order: 1}}
                    >
                        Previous
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={nextStep}
                        disabled={step === 3}
                        style={{order: 2}}
                    >
                        Next
                    </Button>
                </Container>
            )}
        </div>
    );
};

export default Checkout;
