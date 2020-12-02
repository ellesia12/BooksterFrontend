import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {   AssignmentInd, Home, Apps, ContactMail, SettingsInputAntenna } from "@material-ui/icons";
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import "../App.css";
// import a nice picture for the avatar






const useStyles = makeStyles(theme =>({
    nav:{
        backgroundColor: "#c3909b",
        height: "65px",
    },
    backButton: {
        backgroundColor: "BE0D73"
    },
    arrow: {
        color: "white"
    },
    menuSliderContainer: {
        width: 250,
        height: "40rem",
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    lsText: {
        color: "#DB5CA2",
        fontFamily: "font1",
    },
    lsIcon: {
        color: "#DB5CA2",
        
    },
    avatar2: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    words:{
        fontFamily: "'Oswald', sans-serif",
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Log In",
        listPath: "/login"
    },
    {
        listIcon: <Apps/>,
        listText: "Register",
        listPath: "/register"
        
    },
    {
        listIcon: <BookIcon/>,
        listText:"My Book Shelf",
        listPath:"/bookshelf"
    },
    {
        listIcon: <FavoriteBorderIcon/>,
        listText:"All About the Employees",
        listPath:"/about"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact Us",
        listPath: "/contact"
    },
   
    
];




const NavBar = () =>{
const [slide, setSlide] =useState({
    left: false
});

const toggleSlider = (slider, open) => () => {
    setSlide({...slide, [slider]: open})
}



const classes = useStyles();


const slideList = slider => (
    <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
            {/* <Avatar className={classes.avatar2} src={newpic} alt="picture of ellesia" variant="rounded"/> */}
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.lsIcon}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.lsText} primary={lsItem.listText}/>
                       
                    </ListItem>
            ))}   
            </List>
        </Box>
)

    return(
    <>
        
        <Box component="nav">
            <AppBar position="relative" className={classes.nav}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)} className={classes.backButton}>
                        <MenuIcon className={classes.arrow}/>
                    </IconButton>
                    <Typography color="white"  variant="h5" fontFamily="'Oswald', sans-serif" className={classes.words}>
                        Menu
                    </Typography>
                    <Drawer open={slide.left} anchor="right" onClose={toggleSlider("left", false)}>
                        {slideList("left")}
                        {/* <Footer/> */}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
};



export default NavBar;