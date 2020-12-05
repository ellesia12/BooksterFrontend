import React, { useState, useEffect } from "react";
import queryString from "query-string";
import InfoBar from './InfoBar';
import Input from './ChatInput';
import Messages from './ChatMessages';
import { Box, Card } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles"


import { useLocation } from "react-router-dom";
const io=require("socket.io-client");




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
     },
     roomPosition: {
         display: 'flex',
         justifyContent: 'center'
     },
     outerContainer: {
          backgroundColor: '#718680',
     }, 
     textArea: {
         padding: '20px',
         height: '300px',
         width: '300px',
         color: '#fcf3cf',
        
     }
 }))



const Chat = () => {  
    const classes = useStyles();
 let location = useLocation();
const [ name, setName ] = useState('');
const [ room, setRoom ] = useState('');
const [ message, setMessage ] = useState('');
const [ messages, setMessages ] = useState([]);
const [ users, setUsers ] = useState([]);

const ENDPOINT = "http://localhost:3000";

const socket = io(ENDPOINT, {
    // withCredentials: true,
    extraHeaders: {
        "Bookster":"x-secret-token"
    }
});

//This useEffect joins the user to the room

useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    const socket = io(ENDPOINT, {
        // withCredentials: true,
        extraHeaders: {
            "Bookster":"x-secret-token"
        }
    });
 
    setName(name);
    setRoom(room); 

    socket.emit('join', { name, room }, (error) => {
        if(error){
            alert(error);
        }
    });

    return() => {
        socket.emit('disconnected')
        socket.off();
    }

},[ENDPOINT, location.search]);

// This useEffect will handle messages
//We will keep track of all messages using a state called 'messages' and inside 
//the messages we will have an array that will store all messages.Then we need to 
//also specify each message so we will keep this in a state called 'message' 

useEffect(() => {
    
    socket.on('message', (message) => {
        // This sends each message sent to our messages array.
        setMessages([...messages, message]);
        })
    }, [messages]);

    


    // function for sending messages
const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
    }
}
console.log(message, messages);


 return(  

    <Card>
    <Box style={{background:"#718680", height:"100vh"}}>
        <Box >
            <Box className={classes.roomPosition}>
               <InfoBar room={room} />
            </Box>
            <Box className={classes.position}>
                <Box border={1}  className={classes.textArea}>
                <Messages messages={messages} name={name} />
                </Box>
                <Box>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </Box>
            </Box>

            </Box>
         
        </Box>
    </Card>

    );
}
export default Chat;

