import React from "react";
import { Box } from "@material-ui/core";
import Introduction from "../components/Introduction";
import HowItWorks from "../components/HowItWorks";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   
    root: {
        backgroundColor: '#718680',
    }


    }))

const HomePage = () => {

const classes = useStyles();
    return(
        <div className={classes.root}>
            <Introduction />
            <HowItWorks />
        </div>

    )
}

export default HomePage;