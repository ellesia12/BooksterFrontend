import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import Profile from "./Profile";
import { Redirect, Link, NavLink, useHistory } from "react-router-dom";
import BookShelf from "./BookShelf";
import Cookies from "js-cookie"
import NavBar from  "./NavBar"

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "black"
        },
        "& label":{
            color: "5CDB95",
            fontFamily:"'Oswald', sans-serif"
        },
        "&:hover fieldSet":{
            borderColor: "5CDB95"
        },
        "&.Mui-focused fieldSet":{
            borderColor: "5CDB95"
        }
    }
})(TextField);


const useStyles = makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        margin: "1rem",
        color: "black",
        borderColor: "white",
        borderRadius: "18px",
        fontFamily:"'Oswald', sans-serif",
        backgroundColor: '#fcf3cf',
       
    },
    header: {
        textAlign: "center",
        marginBottom:"40px",
        fontFamily: "'Abril Fatface', cursive",
        color:"#fcf3cf",
        fontSize: '4rem'
    },
    word: {
        fontFamily:"'Oswald', sans-serif",
        textAlign: 'center',
        fontSize: '1.6rem',
    }
}))




const LogIn = ({props}) =>{



    // const [auth, setAuth] = useState('');
    const classes = useStyles();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [updatedUserInfo, setUpdatedUserInfo] = useState([]);

    const [userInfo, setUserInfo] = useState(null)
    // const [loggedIn, setLoggedIn] = useState(false)


    


    const handleLogin = (e) =>{
        e.preventDefault();
        
    const postOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ loginData })
    }
        let token

        fetch('http://localhost:3000/login', postOptions)
        .then(
            (response) => {
                token = response.headers.get('x-secret-token')
              if (response.ok) return response.json();
              throw new Error("Network Error while fetching quote");
            },
            (networkError) => {
              console.log(networkError.message);
            }
          )
          .then((data) => {
            //   console.log(data)
            Cookies.set('Bookster', token);
            setUserInfo(data[0])
            let myCookie = Cookies.get('Bookster');
            console.log(myCookie)
            // history.push('/search')
            
          })
          .catch((e) => console.log(e.message));
            /* .then((result)=> setUserInfo(result.rows[0]))
            .catch(error=>console.log(error)) */
            // .then(result=> console.log(result.rows[0]))
            
        }




useEffect(()=> {
    if (userInfo){
    const postOptions = {
        method: 'POST',
        headers: {'Authorization': `Bearer ${Cookies.get('Bookster')}`},
        
    }
    
    fetch('http://localhost:3000/login/me', postOptions)
    .then(res=> res.json())
    //what do we do from here?? i want to make an updated state with the info
    // then push the person to their profile page
    .then(data=>setUpdatedUserInfo(data))
    
    }
    

},[userInfo])
    
    

    const handleChange = (e) =>{
        setLoginData({...loginData, [e.target.name]: e.target.value })
    }
// need to add ONSUBMIT function 

    return (
        <>
        <NavBar />
            <Box component="div" style={{background:"#718680", height:"100vh"}}>
                <Grid container justify="center">
                    <Box component="form"  className={classes.form}>
                        <Typography variant="h3" className={classes.header}>
                            Log In Below
                        </Typography>
                        <InputField 
                            label="Email"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                        />
                        <br />
                        <InputField 
                            label="Password"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            type="password"
                        />
                        
                        <Button type="submit" onClick={handleLogin}  variant="contained" fullWidth={true} className={classes.button} >
                            Log In
                        </Button>
                        {userInfo ? 
                        <>
                        <Typography className={classes.word}>Successful login! Review your profile below {userInfo.first_name}, or go to your Bookshelf </Typography> 
                        <Link to="/bookshelf" style={{textDecoration: 'none'}}>
                        <Button   variant="contained" fullWidth={true} className={classes.button} >
                                Go to your bookshelf
                            </Button>
                        </Link>
                        <Link to="/search" style={{textDecoration: 'none'}}>
                        <Button   variant="contained" fullWidth={true} className={classes.button} >
                                Search for a book
                            </Button>
                        </Link>
                        <Profile userInfo={userInfo}/>
                        </>
                        :<> 
                        <Typography className={classes.word}>You are not logged in! log in or register for an account</Typography>
                            <Link to="/register" style={{textDecoration: 'none'}}>
                            <Button   variant="contained" fullWidth={true} className={classes.button} >
                                Register for Bookster Here!
                            </Button>
                            </Link>
                           </> }    
                        
                        
                      
                    </Box>         
                </Grid>
           </Box>
        </>
    );
}




export default LogIn;

