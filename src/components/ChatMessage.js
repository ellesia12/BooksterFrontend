import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactEmoji from 'react-emoji';
import clsx from  'clsx';


const useStyles = makeStyles(theme=>({

  messageBox: {
    background: "#b2837a",
    borderRadius: "20px",
    padding: "5px 20px",
    color: "black",
    display: "inline-block",
    maxWidth: "80%"
  },
 
  
  messageText: {
    width: "100%",
    letterSpacing: "0",
    float: "left",
    fontSize: "1.1em",
    wordWrap: "break-word"
  },
  
  
  messageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 5%",
    marginTop: "3px"
  },
  justifyEnd: {
    
    justifyContent: "flex-end",

  },

  justifyStart: {
    justifyContent: "flex-start"
  }, 
  
  sentText: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Helvetica",
    color: "black",
    letterSpacing: "0.3px"
  },

  sendTextPadding: {
    paddingRight: "10px",
  },
  sentTextPadding: {
  paddingLeft: "10px"
}

}))

const ChatMessage = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const classes = useStyles();
   console.log(user)


const trimmedName = name.trim().toLowerCase();



  if(user === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <Box className={ clsx(classes.messageContainer, classes.justifyEnd)}>
          <Typography className={ clsx(classes.sentText, classes.sentTextPadding)}>{trimmedName}</Typography>
          <Box className={ clsx(classes.messageBox, classes.messageBoxBackground)}>
            <Typography className={classes.messageText}>{ReactEmoji.emojify(text)}</Typography>
          </Box>
        </Box>
        )
        : (
          <Box className={ clsx(classes.messageContainer, classes.justifyStart)}>
            <Box className={classes.messageBox}>
              <Typography className={classes.messageText}>{ReactEmoji.emojify(text)}</Typography>
            </Box>
            <Typography className={ clsx(classes.sentText, classes.sentTextPadding)}>{user}</Typography>
          </Box>
        )
  );
}

export default ChatMessage;