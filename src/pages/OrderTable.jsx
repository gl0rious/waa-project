import React, {useState} from 'react';
import {
    Button,
    Collapse,
    Grid,
    IconButton,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from "react-router-dom"

const OrderTable = ({showSideBar}) => {
    const [openRows, setOpenRows] = useState([]);
    const orderss = [
        {
            id: 1,
            orderId: 'ORD123',
            orderDate: '2023-11-17',
            shoppingAddress: '123 Main St, City, Country',
            orderStatus: 'Delivered',
            customerName: 'John Doe',
            unitPrice: '$25',
            totalAmount: '$100',
            products: [
                {id: 101, productName: 'Product A', quantity: 2, price: 50},
                {id: 102, productName: 'Product B', quantity: 1, price: 50},
            ],
        },
        {
            id: 2,
            orderId: 'ORD456',
            orderDate: '2023-11-16',
            shoppingAddress: '456 Elm St, City, Country',
            orderStatus: 'Processing',
            customerName: 'Jane Smith',
            unitPrice: '$30',
            totalAmount: '$90',
            products: [
                {id: 201, productName: 'Product C', quantity: 3, price: 30},
            ],
        },
        {
            id: 3,
            orderId: 'ORD789',
            orderDate: '2023-11-15',
            shoppingAddress: '789 Oak St, City, Country',
            orderStatus: 'Shipped',
            customerName: 'Alice Johnson',
            unitPrice: '$15',
            totalAmount: '$45',
            products: [
                {id: 301, productName: 'Product D', quantity: 1, price: 15},
                {id: 302, productName: 'Product E', quantity: 2, price: 30},
            ],
        },
    ];

    const [orders, setOrders] = useState(orderss);

    const tableCellStyle = {
        fontWeight: 'bold',
    };

    const productRowStyle = {
        backgroundColor: '#f9f9f9',
    };

    const handleRowClick = (orderId) => {
        const isOpen = openRows.includes(orderId);
        if (isOpen) {
            setOpenRows(openRows.filter((id) => id !== orderId));
        } else {
            setOpenRows([...openRows, orderId]);
        }
    };


    return (
        <div style={{ marginLeft: !showSideBar ? '80px' : '0' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell style={tableCellStyle}>Order ID</TableCell>
                        <TableCell style={tableCellStyle}>Order Date</TableCell>
                        <TableCell style={tableCellStyle}>Shopping Address</TableCell>
                        <TableCell style={tableCellStyle}>Order Status</TableCell>
                        <TableCell style={tableCellStyle}>Customer Name</TableCell>
                        <TableCell style={tableCellStyle}>Total Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <React.Fragment key={order.id}>
                            <TableRow>
                                <TableCell>
                                    <IconButton onClick={() => handleRowClick(order.id)}>
                                        {openRows.includes(order.id) ? (
                                            <KeyboardArrowUpIcon/>
                                        ) : (
                                            <KeyboardArrowDownIcon/>
                                        )}
                                    </IconButton>
                                </TableCell>
                                <TableCell>{order.orderId}</TableCell>
                                <TableCell>{order.orderDate}</TableCell>
                                <TableCell>{order.shoppingAddress}</TableCell>
                                <TableCell>{order.orderStatus}</TableCell>
                                <TableCell>{order.customerName}</TableCell>
                                <TableCell>{order.totalAmount}</TableCell>
                            </TableRow>
                            <TableRow style={productRowStyle}>
                                <TableCell colSpan={8}>
                                    <Collapse in={openRows.includes(order.id)} timeout="auto" unmountOnExit>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell/>
                                                    <TableCell/>
                                                    <TableCell style={tableCellStyle}>Product Number</TableCell>
                                                    <TableCell style={tableCellStyle}>Product Name</TableCell>
                                                    <TableCell style={tableCellStyle}>Unit Price</TableCell>
                                                    <TableCell style={tableCellStyle}>Quantity</TableCell>
                                                    <TableCell style={tableCellStyle}>Total Amount</TableCell>
                                                </TableRow>
                                                {order.products.map((product) => (
                                                    <TableRow key={product.id}>
                                                        <TableCell/>
                                                        <TableCell/>
                                                        <TableCell>
                                                            <Link to={`/products/${product.id}`}>{product.id}</Link>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography>{product.productName}</Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant="body2">
                                                                ${product.price}
                                                                <br/>
                                                            </Typography>
                                                        </TableCell>

                                                        <TableCell>
                                                            <Typography variant="body2">
                                                                {product.quantity}
                                                                <br/>
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography variant="body2">
                                                                ${product.quantity * product.price}
                                                                <br/>
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow>
                                                    <TableCell/>
                                                    <TableCell/> <TableCell/>  <TableCell/>
                                                    <Grid container alignItems="center" justifyContent="center">
                                                        <Grid item xs={6} md={4} textAlign="center">
                                                            <Button variant="contained" color="secondary">
                                                                Cancel
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={12} md={4} textAlign="center">
                                                            <Select defaultValue="PLACED">
                                                                <MenuItem value="PLACED">PLACED</MenuItem>
                                                                <MenuItem value="SHIPPED">SHIPPED</MenuItem>
                                                                <MenuItem value="DELIVERED">DELIVERED</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6} md={4} textAlign="center">
                                                            <Button variant="contained" color="primary">
                                                                Confirm
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                    <TableCell/>
                                                    <TableCell/> <TableCell/>  <TableCell/>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>


    );
};

export default OrderTable;