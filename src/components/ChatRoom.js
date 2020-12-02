import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";

import { makeStyles, withStyles } from "@material-ui/core/styles"





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

const ChatRoom = () => {

const [ name, setName ] = useState('');
const [ room, setRoom ] = useState('');


    return (
        <>
             <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
      <div>
          <Chat name={name} room={room} />
      </div>
    </div>
        </>
    );
}
    
 
export default ChatRoom;



