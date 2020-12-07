import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import ChatMessage from './ChatMessage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({

  messages: {
  padding: "5% 0",
  overflow: "auto",
  flex: "auto",
  height: '600',
  width: '400'
}
}))


const ChatMessages = ({ messages, name }) => {
const classes = useStyles();

return(
  <ScrollToBottom className={classes.messages} behavior="smooth">
    {messages.map((message, i) => <div key={i}><ChatMessage message={message} name={name}/></div>)}
  </ScrollToBottom>
)
}

export default ChatMessages; 