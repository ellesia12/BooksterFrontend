import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import Profile from "./Profile";
import { Redirect, Link, NavLink } from "react-router-dom";
import BookShelf from "./BookShelf";


const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "#DB5CA2"
        },
        "& label":{
            color: "5CDB95"
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
        borderRadius: "18px"
    },
    header: {
        textAlign: "center",
        textTransform:"uppercase",
        marginBottom:"30px"
    }
}))




const LogIn = () =>{
    const classes = useStyles();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [userInfo, setUserInfo] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)


    const postOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ loginData })
    }




    const handleLogin = (e) =>{
        e.preventDefault();
        // console.log(loginData)
        fetch('http://localhost:3000/login', postOptions)
            .then(response => response.json())
            // .then(data => console.log(data))
            .then((result, error)=>{
                if(error === 'undefined') {
                  console.log('bad')
                
                } else{
                    setUserInfo(result)
                    console.log(userInfo)
                    setLoggedIn(true)

                }
            })  
            /* .then((result)=> setUserInfo(result.rows[0]))
            .catch(error=>console.log(error)) */
            // .then(result=> console.log(result.rows[0]))
            
        }



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
                        {userInfo ? <Typography>Successful login!  Go to your profile {userInfo.first_name} </Typography> 
                        : <Typography>you are not logged in! log in or register for an account</Typography>}    
                        
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

