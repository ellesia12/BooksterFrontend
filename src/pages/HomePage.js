import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Introduction from "../components/Introduction";
import HowItWorks from "../components/HowItWorks";
import { makeStyles } from '@material-ui/core/styles';



// import components
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import useWindowPosition from "../hook/windowPosition";


const useStyles = makeStyles(theme => ({
   
    root: {
        minHeight: '100vh',
        backgroundColor: '#718680',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    
    }))

const HomePage = ({id}) => {

const classes = useStyles();
const checked = useWindowPosition('header');

    return(
        <div className={classes.root}>
            <NavBar />
            <Introduction />
            
            <HowItWorks checked={checked} />
            
            <Footer />
        </div>

    )
}

export default HomePage;