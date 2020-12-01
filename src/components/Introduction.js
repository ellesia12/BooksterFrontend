import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import bookshelf from "../Images/idealbookshelf.jpg";

const useStyles = makeStyles({
    
    position: {
        display: 'flex',
        paddingBottom:"70px"
    },
   
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

    },
    textAndButton: {
        marginTop: '100px',
        width: '600px'
    }
})


const Introduction = () => {

const classes = useStyles();

return(
<div className={classes.position}>

       
<Box className={classes.textAndButton}>
        <Typography variant="h2" className={classes.text}>Bookster.</Typography>
        <Typography className={classes.text}>
        Create your own book club today and connect 
        <br />
        with friends and make new ones from anywhere in the world!
        </Typography>
 
    <Box className={classes.buttonPosition}>
        <NavLink to='/register'>
            <Button className={classes.button} >
            Sign up!
            </Button>
        </NavLink>
     </Box>
</Box>
 <img 
            src={bookshelf}
            width="500px"
        />

</div>

)
}

export default Introduction;