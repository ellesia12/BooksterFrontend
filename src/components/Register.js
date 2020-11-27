import React, { useState, useEffect } from "react";
import '../App.css';
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

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
        marginBottom:"30px",
        fontFamily: "'Oswald', sans-serif",
    },
    text: {
        fontFamily: "'Oswald', sans-serif",
        
    }
}))








const Register = () =>{
    const classes = useStyles();
    const [registerData, setRegisterData] = useState({
        first_name: '',
        surname: '',
        email: '',
        password: '',
        bio: '',
        fav_book: ''
    });

const postOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ registerData })
}

//or use registerData.field 




const handleRegister = (e) =>{
    e.preventDefault();
    console.log(registerData)
    fetch('http://localhost:3000/register', postOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        
}

const handleChange = (e) =>{
    setRegisterData({...registerData, [e.target.name]: e.target.value })
    
}

// need to add ONSUBMIT function 
//add link to log in page

    return (
        <>
            <Box component="div" style={{background:"#C38D9E", height:"100vh"}} className={classes.text}>
                <Grid container justify="center">
                    <Box component="form"  className={classes.form}>
                        <Typography variant="h3" className={classes.header}>
                            Register for Bookster
                        </Typography>
                        <InputField 
                            label="First Name"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="first_name"
                            className={classes.text}
                            value={registerData.first_name}
                            onChange={handleChange}
                        />
                        <br />
                        <InputField 
                            label="Surname"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="surname"
                            value={registerData.surname}
                            onChange={handleChange}
                        />
                         <br />
                        <InputField 
                            label="Email"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                            value={registerData.email}
                            onChange={handleChange}
                        />
                         <br />
                        <InputField 
                            label="Password"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="password"
                            value={registerData.password}
                            onChange={handleChange}
                            type="password"
                        />
                         <br />
                       {/*  <InputField 
                            label="Picture"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                        />
                        <br /> */}
                        <InputField 
                            label="Short Bio About You"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="bio"
                            value={registerData.bio}
                            onChange={handleChange}
                        />
                        <br />
                        <InputField 
                            label="What are your favorite books?"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="fav_book"
                            value={registerData.fav_book}
                            onChange={handleChange}
                        />
                        <br />
                        <Button type="submit" onClick={handleRegister} variant="contained" fullWidth={true} className={classes.button} >
                            Register
                        </Button>
                        <Typography alignContent="center">
                            Already a user? Sign in <a href="/login">here</a>
                        </Typography>
                    </Box>
                </Grid>
           </Box>
        </>
    );
}




export default Register;

