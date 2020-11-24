import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   
    text: {
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",


    }
}))

const HowItWorks = () => {

const classes = useStyles();

    return(
        <Box>
            <Typography className={classes.text} color="secondary"> How we work </Typography>
        </Box>

    )
}

export default HowItWorks;