import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box,
    TableBody,
    Table,
    TableContainer, TableCell, TableRow
} from "@mui/material";
import Rating from '@mui/material/Rating';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import CardMedia from "@mui/material/CardMedia";

const ProductDetail = () => {
    const {productId} = useParams();
    const product = useSelector((state) =>
        state.products.find((product) => product.id === productId)
    );

    const [reviews, setReviews] = useState([
        {
            id: 1,
            user: 'Alice',
            rating: 4,
            comment: 'Great product, very useful!',
        },
        {
            id: 2,
            user: 'Bob',
            rating: 5,
            comment: 'Excellent quality and fast shipping.',
        },
        {
            id: 3,
            user: 'Charlie',
            rating: 3,
            comment: 'Good product, but could be improved.',
        },
    ]);


    const [userRating, setUserRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event, newValue) => {
        setUserRating(newValue);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        const newReview = {
            id: reviews.length + 1,
            user: 'New User',
            rating: userRating,
            comment: comment,
        };

        setReviews([...reviews, newReview]);
        setUserRating(0);
        setComment('');
    };
    const cardStyle = {
        minWidth: 275,
        marginBottom: '20px',
        position: 'sticky',
        top: '20px',
    };
    const textStyle = {
        fontSize: 14,
        marginBottom: 12,
    };
    return (
        <Container maxWidth="md">

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TableContainer style={{minWidth: "100%"}}>
                        <div className="row" style={{marginLeft: "0px", marginRight: "0px"}}>
                            <div className="col-sm-6 col-12"
                                 style={{
                                     paddingRight: "1em",
                                     paddingLeft: "0px",
                                     backgroundColor: "rgb(17 72 167 / 4%)"
                                 }}>
                                <Table className="table table-striped">
                                    <TableBody component="tbody">
                                        <TableRow>
                                            <TableCell scope="row" style={{fontSize: "12.8px"}}>
                                                <strong>Product Number</strong>
                                            </TableCell>
                                            <TableCell align="right" style={{
                                                float: "left",
                                                fontSize: "16px",
                                            }}>{product.id}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell scope="row" style={{fontSize: "12.8px"}}>
                                                <strong>Product Name</strong>
                                            </TableCell>
                                            <TableCell align="right" style={{
                                                float: "left",
                                                fontSize: "16px",
                                            }}>{product.title}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell scope="row" style={{fontSize: "12.8px"}}>
                                                <strong>Price</strong>
                                            </TableCell>
                                            <TableCell align="right" style={{
                                                float: "left",
                                                fontSize: "16px",
                                            }}>{product.price}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell scope="row" style={{fontSize: "12.8px"}}>
                                                <strong>Description</strong>
                                            </TableCell>
                                            <TableCell align="right" style={{
                                                float: "left",
                                                fontSize: "16px",
                                            }}>{product.description}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                    </TableContainer>
                </Grid>

                <Grid item xs={6}>
                    <Card >
                        <CardMedia
                            component="img"
                            image={product.imageUrl}
                        />

                    </Card>
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
                Product Reviews:
            </Typography>

            {reviews.map((review) => (
                <Card key={review.id} style={{marginBottom: '10px'}}>
                    <CardContent>
                        <Typography variant="body1">
                            <Rating
                                name="user-rating"
                                value={review.rating}
                                readOnly
                            />
                        </Typography>
                        <Typography variant="body2">
                           {review.comment}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Add Your Review:
                </Typography>
                <Rating
                    name="user-rating"
                    value={userRating}
                    onChange={handleRatingChange}
                />
                <TextField
                    label="Comment"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={comment}
                    onChange={handleCommentChange}
                    style={{marginTop: '10px'}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{marginTop: '10px'}}
                >
                    Submit Review
                </Button>
            </Box>
        </Container>
    );
};

export default ProductDetail;
