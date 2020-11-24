import React from "react";
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
        marginBottom:"30px"
    }
}))




const LogIn = () =>{
    const classes = useStyles();

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
                            name="name"
                        />
                        <br />
                        <InputField 
                            label="Password"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                        />
                        
                        <Button type="submit" variant="contained" fullWidth={true} className={classes.button} >
                            Log In
                        </Button>
                        
                    </Box>
                </Grid>
           </Box>
        </>
    );
}




export default LogIn;

