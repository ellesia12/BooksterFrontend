import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
     textAlign: 'center',
     fontFamily: "'Abril Fatface', cursive",
     color: '#fcf3cf',
     fontSize: '50px'

   },
    
    button: {
      marginTop: "10px",
      color: "#C38D9E",
      borderColor: "white",
      borderRadius: "18px",
      fontFamily:"'Oswald', sans-serif",
      textTransform: "uppercase",
      textDecoration: "none",
      background: "#fcf3cf",
      padding: "10px",
      display: "inline-block",
      border: "none",
      width: "20%"
    },
    position: {
      top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        
       
    },
    buttonPosition: {
        display: 'flex',
        justifyContent: 'center'
    },
    word: {
        fontFamily:"'Oswald', sans-serif"
    },
    selectPosition: {
      paddingRight: '15px'
    },
    buttonGenre: {
      marginTop: "1rem",
      color: "#fcf3cf",
      borderColor: "white",
      borderRadius: "18px",
      fontFamily:"'Oswald', sans-serif",
      paddingRight: "15px",
      fontSize: '20px'
  },
   select: {
     gutterBottom: "1em",
     borderRadius: '15px'
   }
  
}))

const ChatRoom = () => {

const classes = useStyles();

const [ name, setName ] = useState('');
const [ room, setRoom ] = useState('Classics');
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
}; 


    return (
<>
    <Box style={{background:"#718680", height:"100vh"}} >
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
        <Box className={classes.selectPosition}>
        <Button className={classes.buttonGenre} onClick={handleOpen}>
                            select a genre
                        </Button>
        
          <Select 
              className={classes.select}
              onChange={event => setRoom(event.target.value)} >
            <MenuItem value='Classics'>Classics</MenuItem>
            <MenuItem value='Fantasy'>Fantasy</MenuItem>
            <MenuItem value='Romance'>Romance</MenuItem>
            <MenuItem value='Magic-Realism'>Magic Realism</MenuItem>
            <MenuItem value='Sci-Fi'>Sci-Fi</MenuItem>
          </Select>
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



