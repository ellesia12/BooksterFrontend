import React from "react";
import '../App.css';
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";


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
        fontFamily: "font1",
    },
    text: {
        fontFamily: "'Oswald', sans-serif",
        
    },
    word: {
        fontFamily:"'Oswald', sans-serif"
    }
}))







const Profile = ({userInfo}) =>{
    const classes = useStyles();


    return(
        <>
            <InputField 
                            label={userInfo.first_name}
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="first_name"
                            className={classes.text}
            />
            <br/>
            <InputField 
                            label={userInfo.surname}
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="surname"
                            className={classes.text}
            />
            <br />
            <InputField 
                            label={userInfo.email}
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                            className={classes.text}
            />
            <br />
            <InputField 
                            label={userInfo.bio}
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="bio"
                            className={classes.text}
            />
            <br />
            <InputField 
                            label={userInfo.fav_book}
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="fav_book"
                            className={classes.text}
            />
        </>
    )
}



export default Profile;