import React from "react";
import { Box } from "@material-ui/core";
import Introduction from "../components/Introduction";
import HowItWorks from "../components/HowItWorks";
import { makeStyles } from '@material-ui/core/styles';



// import components
import NavBar from "../components/NavBar"


const useStyles = makeStyles(theme => ({
   
    root: {
        backgroundColor: '#718680',
        height: "600px"
    }


    }))

const HomePage = () => {

const classes = useStyles();
    return(
        <div className={classes.root}>
            <NavBar />
            <Introduction />
            <HowItWorks />
        </div>

    )
}

export default HomePage;