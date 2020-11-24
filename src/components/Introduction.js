import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        display: 'flex',
        justifyContent: 'center',

    },
    text: {

    }
})

const Introduction = () => {

const classes = useStyles();

    return(
    <div>
        <Typography>
        Create your own book club today and connect with friends and make new ones from anywhere in the world!
        </Typography>

        <Button className={classes.button}>
        Sign up!
        </Button>

    </div>

    )
}

export default Introduction;