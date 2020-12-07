import React from "react";
import { makeStyles } from "@material-ui/core/styles"

import {  Typography, Box} from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles(theme=>({
  
    header: {
        textTransform:"uppercase",
        marginBottom:"30px",
        fontSize: "10x",
        fontFamily:"'Oswald', sans-serif",
        fontWeight:'bold',
        alignText: 'center'
       
    },
    root: {
        backgroundColor: 'white',
        height: "600px"
    },
    text: {
        fontFamily:"'Oswald', sans-serif",               
        lineHeight: "40px",
        height: "50px",
        padding: "10px",
        margin: "30px"
    },
    position: {
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    titlePosition: {
        margin: "30px",
        padding: "5px"
    }
}))
const AboutUs = () => {

    const classes = useStyles();
    
    return(
       <Box bgcolor="#718680">
       <NavBar></NavBar>    
        <Box className={classes.position} display="flex"  width={800} height={600} bgcolor="#718680">
            <Box className={classes.titlePosition} bgcolor="white">
            <Typography color="black" variant="h2"  className={classes.header}>About Us</Typography>
            </Box>
            <Box className={classes.text}>
            <Typography color="black" variant="h6"  className={classes.text}>
            Bookster invites participants to read books on timely topics, engage in lively discussions, and take part in meaningful and fun debates. This is reading and social engagement at its best.
            We focus in building communities of openness, respect and belonging by creating the conditions for genuine human connection at every level. 
            Why books? Because stories invite us to connect to characters and reflect upon our diverse perspectives. In discussing them, we consider other views and step into each other’s shoes. The narratives unlock perspectives, helping us to make sense of the world we share – individually and together.
            </Typography>
        </Box>
        </Box>
     </Box>
    );
    }
    
    export default AboutUs;