import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles"

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

   heading: {
     alignText: 'center',
    fontFamily:"'Oswald', sans-serif"

   },
    
    button: {
        marginTop: "1rem",
        color: "#C38D9E",
        borderColor: "white",
        borderRadius: "18px",
        fontFamily:"'Oswald', sans-serif"
    },
    position: {
      top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
       
    },
    buttonPosition: {
        display: 'flex',
        justifyContent: 'center'
    },
    word: {
        fontFamily:"'Oswald', sans-serif"
    }
}))

const ChatRoom = () => {

const classes = useStyles();

const [ name, setName ] = useState('');
const [ room, setRoom ] = useState('');


    return (
<>
    <Box >
      <Box className={classes.position}>
        <h1 className={classes.heading}>Join</h1>
        <Box>
          <InputField
           placeholder="Name"
            className="joinInput"
             type="text" 
             onChange={(event) => setName(event.target.value)} 

             />
        </Box>
        <Box>
          <InputField
           placeholder="Room"
            className="joinInput mt-20"
             type="text"
              onChange={(event) => setRoom(event.target.value)} />
        </Box>
      <Box className={classes.buttonPosition}>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button className={classes.button} type="submit">Sign In</Button>
        </Link>
        </Box>
      </Box>
     
    </Box>
        </>
    );
}
    
 
export default ChatRoom;



