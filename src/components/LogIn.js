import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import Profile from "./Profile";
import { Redirect, Link, NavLink, useHistory } from "react-router-dom";
import BookShelf from "./BookShelf";
import Cookies from "js-cookie"

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "#DB5CA2"
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
        marginTop: "1rem",
        color: "#C38D9E",
        borderColor: "white",
        borderRadius: "18px",
        fontFamily:"'Oswald', sans-serif"
    },
    header: {
        textAlign: "center",
        textTransform:"uppercase",
        marginBottom:"30px",
        fontFamily: "font1"
    },
    word: {
        fontFamily:"'Oswald', sans-serif"
    }
}))




const LogIn = ({props}) =>{

    const classes = useStyles();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [userInfo, setUserInfo] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)





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
              console.log(data)
            Cookies.set('Bookster', token);
            setUserInfo(data[0])
            
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
    .then(data=>console.log(data))
    }
    

},[userInfo])



    const handleChange = (e) =>{
        setLoginData({...loginData, [e.target.name]: e.target.value })
    }
// need to add ONSUBMIT function 

    return (
        <>
            <Box component="div" style={{background:"#C38D9E", height:"100vh"}}>
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
                        />
                        
                        <Button type="submit" onClick={handleLogin}  variant="contained" fullWidth={true} className={classes.button} >
                            Log In
                        </Button>
                        {userInfo ? <Typography className={classes.word}>Successful login!  Go to your profile {userInfo.first_name} </Typography> 
                        : <Typography className={classes.word}>you are not logged in! log in or register for an account</Typography>}    
                        
                        <Button   variant="contained" fullWidth={true} className={classes.button} >
                            Register for Bookster Here!
                        </Button>
                       
                    </Box>         
                </Grid>
           </Box>
        </>
    );
}




export default LogIn;

