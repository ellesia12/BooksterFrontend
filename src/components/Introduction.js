import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    buttonPosition: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        

    },

    button: {
        fontFamily: "'Oswald', sans-serif",
    },
    text: {
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",

    }
})

const Introduction = () => {

const classes = useStyles();

    return(
    <div>
        <Typography className={classes.text}>
        Create your own book club today and connect with friends and make new ones from anywhere in the world!
        </Typography>
 
    <Box className={classes.buttonPosition}>
        <NavLink to='/register'>
            <Button className={classes.button} >
            Sign up!
            </Button>
        </NavLink>
     </Box>

    </div>

    )
}

export default Introduction;