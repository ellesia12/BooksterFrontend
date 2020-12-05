import React from "react";
import { Box } from "@material-ui/core";
import Introduction from "../components/Introduction";
import HowItWorks from "../components/HowItWorks";
import { makeStyles } from '@material-ui/core/styles';



// import components
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const useStyles = makeStyles(theme => ({
   
    root: {
        minHeight: '100vh',
        backgroundColor: '#718680',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    
    }))

const HomePage = () => {

const classes = useStyles();
    return(
        <div className={classes.root}>
            <NavBar />
            <Introduction />
            <HowItWorks />
            <Footer />
        </div>

    )
}

export default HomePage;