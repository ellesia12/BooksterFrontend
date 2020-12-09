import React from "react";
import { makeStyles } from "@material-ui/core/styles"

import {  Typography, Box} from "@material-ui/core";
import NavBar from "./NavBar";
import { Avatar } from '@material-ui/core';
import cris from '../Images/cris.jpg';
import elle from '../Images/elle.jpg';
import imo from '../Images/imo.jpg';

const useStyles = makeStyles(theme=>({
  
    header: {
        marginBottom:"30px",
        fontSize: "4rem",
        fontFamily: "'Abril Fatface', cursive",
        fontWeight:'bold',
        textAlign: 'center',
       
       
    },
    root: {
        backgroundColor: '#fcf3cf',
        height: '85vh'
    },
    text: {              
        lineHeight: "40px",
        height: "50px",
        paddingTop: '30px',
        fontFamily: "'PT Sans', sans-serif"
    },
    position: {
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    titlePosition: {
        margin: "30px",
        padding: "5px",
        backgroundColor: '#fcf3cf'
    },
    co :{
        backgroundColor: '#fcf3cf'
    },
    pics: {
        width: '200px',
        height: '200px',
        margin: '40px',
    },
    picsbox: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fcf3cf',
        alignContent:'flex-end'
    },
    namebox: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fcf3cf',
        alignContent:'flex-end'
       
    },
    name: {
        fontSize: '2rem',
        marginLeft: '70px',
        marginRight: '40px',
        marginTop: '40px',
        fontFamily:"'Oswald', sans-serif",
    }
}))
const AboutUs = () => {

    const classes = useStyles();
    
    return(
        <>
<Box>
    <div className={classes.root}>
       <Box className={classes.co}>
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
     
</div>
      <Box className={classes.namebox}>
            <Typography className={classes.name}>Imogen Drews</Typography>
            <Typography className={classes.name}>Ellesia Janto</Typography>
            <Typography className={classes.name}>Cris Granemann</Typography>
      </Box>
      <Box className={classes.picsbox}>
            <Avatar alt="imo" src={imo} className={classes.pics} ></Avatar>
            <Avatar alt="elle" src={elle} className={classes.pics}></Avatar>
            <Avatar alt="cris" src={cris} className={classes.pics} ></Avatar>
        </Box>  
</Box>
        </>
    );
}
    
    export default AboutUs;