import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { BottomNavigation, BottomNavigationAction, Link, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#718680',
        height: '150px',

    },
    box:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'start',
        justifyContent: 'center'
    },
    color:{
        color:'#fcf3cf'
    }
    
}));

const Footer = () => {

    const classes = useStyles();
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };
    


    return(
<>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >   
    
        <BottomNavigationAction className={classes.color} label="search: instagram" value="Instagram" icon={<InstagramIcon color="#fcf3cf"/> } />
      
        {/* <Link href="https://github.com/ellesia12/BooksterFrontend" > */}
            <BottomNavigationAction className={classes.color} label="username: imodrews" value="github" icon={<GitHubIcon color="#fcf3cf"/>} />
        {/* </Link> */}
    </BottomNavigation>
</>

    )}

export default Footer;