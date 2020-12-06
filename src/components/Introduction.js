import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import bookshelf from "../Images/idealbookshelf.jpg";
import image from '../Images/pngegg.png';


const useStyles = makeStyles(theme=>({
    
    position: {
        display: 'flex',
        paddingBottom:"130px",
        paddingTop: '70px',
        alignContent: 'center',
        justifyContent: 'center'
    },
   
    buttonPosition: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        

    },

    button: {
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 'bold',
        paddingTop: '20px'
    },
    text: {
        textAlign: 'center',
        fontFamily: "'PT Sans', sans-serif",
        color: 'black',
        
        },
    header: {
        textAlign: 'center',
        fontFamily: "'Abril Fatface', cursive",
        fontWeight: 'bold',
        color: '#fcf3cf',
        paddingBottom: '20px'

    },
    textAndButton: {
        marginTop: '100px',
        width: '600px',
        color: '#fcf3cf'
    },
    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#fcf3cf'
    },
    quoteBox: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '150px'
    },
    image: {
       marginRight: '100px'

    }
}))


const Introduction = () => {

const classes = useStyles();

return(
<Box>
<Box className={classes.position}>
  
<Box className={classes.textAndButton}>
   
    
    <Box>
        <Typography variant="h2" className={classes.header}>Bookster.</Typography>
        <Typography variant="h5" className={classes.text}>
        Create your own book club today and connect 
        <br />
        with friends and make new ones from anywhere in the world!
        </Typography>
    </Box>
   
 
    <Box className={classes.buttonPosition}>
        <NavLink to='/register'>
            <Button className={classes.button} >
            Sign up!
            </Button>
        </NavLink>
     </Box>
</Box>
</Box>
<Box className={classes.quoteBox}>
<Typography variant="h6" className={classes.quote}>"I couldn't be happier with my experience with Bookster. The process is so simple, you just register, sign up and Bookster saves all your favorite books! You can even organize your bookshelf and chat with others regarding different genres." <br/> - Barak Obama</Typography>
</Box>
</Box>
)
}

export default Introduction;