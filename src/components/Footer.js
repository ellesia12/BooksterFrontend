import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { BottomNavigation, BottomNavigationAction, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: `#b2837a`
    },

    
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
    
      <BottomNavigationAction label="search: instagram" value="Instagram" icon={<InstagramIcon color="#fcd392"/> } />
      
    <Link href="https://github.com/ellesia12/BooksterFrontend" >
      <BottomNavigationAction label="username: imodrews" value="github" icon={<GitHubIcon color="#fcd392"/>} />
    </Link>
    </BottomNavigation>
</>

    )}

export default Footer;