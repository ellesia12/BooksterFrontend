import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import InfoBar from './InfoBar';
import Input from './ChatInput';
import Messages from './ChatMessages';

import { Box, Card } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles"


import { useLocation } from "react-router-dom";
import io from "socket.io-client";




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

 const ENDPOINT = "http://localhost:3000";
 const socket = io.connect(ENDPOINT, {
   // withCredentials: true,
   extraHeaders: {
       "Bookster":"x-secret-token"
   }
});


const Chat = () => {  
    const classes = useStyles();
 let location = useLocation();
const [ name, setName ] = useState('');
const [ room, setRoom ] = useState('');
const [ message, setMessage ] = useState('');
const [ messages, setMessages ] = useState([]);
const [ users, setUsers ] = useState([]);


const socketRef = useRef();


//This useEffect joins the user to the room

useEffect(() => {
    const { name, room } = queryString.parse(location.search)
     socketRef.current = io(ENDPOINT, {
        // withCredentials: true,
        extraHeaders: {
            "Bookster":"x-secret-token"
        }
    });
 
    setName(name);
    
    setRoom(room); 
    

    socketRef.current.emit('join', { name, room }, (error) => {
        if(error){
            alert(error);
        }
    });

},[ENDPOINT, location.search]);

// This useEffect will handle messages
//We will keep track of all messages using a state called 'messages' and inside 
//the messages we will have an array that will store all messages.Then we need to 
//also specify each message so we will keep this in a state called 'message' 

useEffect(() => {
    
    socketRef.current.on('message', message => {
        // This sends each message sent to our messages array.
        setMessages(messages => [...messages, message]);
        });

        socketRef.current.on('roomData', ({users}) => {
            setUsers(users);
           
        });
        console.log(users)
    }, []);

const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
        socketRef.current.emit('sendMessage', message, () => setMessage(''));
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
                <Box className={classes.textArea}>
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

