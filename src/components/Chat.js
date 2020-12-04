import React, { useState, useEffect } from "react";
import queryString from "query-string";
import InfoBar from './InfoBar';
import Input from './ChatInput';
import Messages from './ChatMessages';

import { useLocation } from "react-router-dom";
const io=require("socket.io-client");



const Chat = () => {  
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
        <div className="outerContainer">
            <div className="container">
               <InfoBar room={room} />
                {/* <input  value={message} onChange={(event) => setMessage(event.target.value)} 
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </div>
         
        </div>
    );
}
export default Chat;

