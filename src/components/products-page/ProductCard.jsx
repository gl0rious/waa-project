// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import AddBox from "@mui/icons-material/AddBox";
import InfoIcon from "@mui/icons-material/Info";
import {Link} from "react-router-dom"
import {Edit} from "@mui/icons-material";
import {Container, Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const ProductCard = ({id, name, description, price, imageUrl}) => {
    const [asAdmin, setAsAdmin] = useState(false);
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia sx={{height: 140}} image={imageUrl} title={name}/>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {price}$
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "space-between"}}>

                {asAdmin == false ? (
                    <Grid>
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                            startIcon={<AddBox fontSize="small"/>}
                        >
                            Add to cart
                        </Button>
                        <Link to={`/products/${id}`}>
                            <Button
                                component={Button}
                                size="small"
                                color="primary"
                                variant="outlined"
                                endIcon={<InfoIcon fontSize="small"/>}
                            >
                                Details
                            </Button>
                        </Link>
                    </Grid>

                ) : <Container maxWidth="sm" style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Link to="/updateproduct">
                        <Button color="primary">
                            <Edit/>
                        </Button>
                    </Link>
                    <Button color="error">
                        <DeleteIcon/>
                    </Button>
                </Container>}

            </CardActions>
        </Card>
    );
};

export default ProductCard;
