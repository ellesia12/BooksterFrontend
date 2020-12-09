import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import home from '../Images/home.png'


const useStyles = makeStyles(theme=>({
    
    position: {
        display: 'flex',
        paddingBottom:"100px",
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
        textDecoration: 'none',
        fontSize: '2.5rem',
        marginTop: '-40px',
        marginBottom: '20px',
        color: '#b2837a'
    },
    navLink: {
        textDecoration: 'none'
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
        paddingBottom: '20px',
        fontSize: '7rem',
       letterSpacing: '4px'

    },
    textAndButton: {
        marginTop: '70px',
        width: '600px',
        color: '#fcf3cf',
    },
    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#fcf3cf',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontFamily: "'PT Sans', sans-serif",
    },
    quoteBox: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '150px',
        alignText:'center',
        display: 'flex',
        flexDirection: 'column'
    },
    arrow: {
        color: '#fcf3cf',
        fontSize: '5rem',
        marginTop: '20px'
    },
    buttonBox: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDisplay: 'column'
    },
    fix: {
        display:'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: '150px'
    },
    image: {
       marginRight: '100px'

    },
    pic: {
        width: '625px',
        paddingRight: '50px',
        marginTop:'20px'
    },
    headingandtext: {
        marginTop: '40px'
    },
    signandquote: {
        display: 'flex',
        flexDirection: 'column'
    },
    pink: {
        color: '#b2837a'
    }
}))


const Introduction = () => {

const classes = useStyles();
const [checked, setChecked] =useState(false)
useEffect(()=>{
    setChecked(true)
}, [])
return(

<Box className={classes.position} id="header">

<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} 
collapsedHeight={50}>
<Box className={classes.fix}>
<img className={classes.pic} src={home} alt="ppicture" />
<Box className={classes.textAndButton}> 
    <Box className={classes.headingandtext}>
        <Typography variant="h2" className={classes.header}>Bookster<span className={classes.pink}>.</span></Typography>
        <Typography variant="h5" className={classes.text}>
        Create your own book club today and connect 
        <br />
        with friends and make new ones from anywhere in the world!
        </Typography> 
    </Box>
   
</Box>
</Box>
 
<Box className={classes.signandquote} >
<Box className={classes.buttonPosition}>
        <NavLink to='/register' className={classes.navLink}>
            <Button className={classes.button} >
            Sign up
            </Button>
        </NavLink>
     </Box>


<Box className={classes.quoteBox}>
<Typography variant="h6" className={classes.quote}>"I couldn't be happier with my experience with Bookster. The process is so simple, you just register, sign up and Bookster saves all your favorite books! You can even organize your bookshelf and chat with others regarding different genres." <br/> - Barak Obama</Typography>
<IconButton>
    <ExpandMoreIcon color="white" className={classes.arrow}/>
</IconButton>
</Box>
</Box>
</Collapse>
</Box>



)
};

export default Introduction;