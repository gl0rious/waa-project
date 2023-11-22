import React, {useState} from "react";
import {Link} from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Slide from "@mui/material/Slide";
import {useSelector} from "react-redux";
import {Login} from "@mui/icons-material";

const drawerWidth = 240;

const styles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",

    },
    darkGreyBackground: {
        backgroundColor: 'darkgrey',
    },
    drawerClose: {
        transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        overflowX: "hidden",
        width: 55,
    },
    sidebarHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "8px",
        height: "64px",
    },
    listItem: {
        "&:hover": {
            backgroundColor: "#1976d2",
            color: "#fff",
        },
    },
};

function Sidebar({onShow}) {
    const userInfo = useSelector((state) => state.user);
    console.log(userInfo.role)
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        onShow(showSidebar)
    };
    return (
        <div>
            <IconButton onClick={toggleSidebar}>
                {showSidebar ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
            <Slide direction="right" in={showSidebar} mountOnEnter unmountOnExit>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={showSidebar}
                    className={`${styles.drawer} ${!showSidebar && styles.drawerClose}`}
                    classes={{
                        paper: `${styles.drawer} ${showSidebar ? styles.drawerClose : styles.darkGreyBackground}`,
                    }}
                >
                    <div style={styles.sidebarHeader}>
                        <IconButton onClick={toggleSidebar}>
                            {showSidebar ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <List>
                        <ListItem button component={Link} to="/" style={styles.listItem}>
                            <Login/>
                            <ListItemText primary="Login"/>
                        </ListItem>
                        <ListItem button component={Link} to="/products" style={styles.listItem}>
                            <FastfoodIcon/>
                            <ListItemText primary="Products"/>
                        </ListItem>
                        {
                            userInfo.role == "employee" &&
                            <ListItem button component={Link} to="/products/add" style={styles.listItem}>
                                <AddBoxIcon/>
                                <ListItemText primary="Add Product"/>
                            </ListItem>
                        }

                        {
                            userInfo.role == "employee" &&
                            <ListItem button component={Link} to="/orders">
                                <StorefrontIcon/>
                                <ListItemText primary="Orders"/>
                            </ListItem>
                        }
                        {
                            userInfo.role == "user" &&
                            <ListItem button component={Link} to="/shop">
                                <ShoppingCartIcon/>
                                <ListItemText primary="Shopping Cart"/>
                            </ListItem>
                        }

                    </List>
                </Drawer>
            </Slide>
        </div>
    );
}

export default Sidebar;
