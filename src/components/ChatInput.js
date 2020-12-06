import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Button, Box } from '@material-ui/core';

// const InputField = withStyles({
//     root:{
//         "& label.Mui-focused":{
//             color: "#DB5CA2"
//         },
//         "& label":{
//             color: "5CDB95",
//             fontFamily:"'Oswald', sans-serif"
//         },
//         "&:hover fieldSet":{
//             borderColor: "5CDB95"
//         },
//         "&.Mui-focused fieldSet":{
//             borderColor: "5CDB95"
//         }
//     }
//   })(TextField);

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
    textArea: {
        border: '2px',
    },
    pageColor: {
        backgroundColor: '#718680'
    }

  }));


const Input = ({ setMessage, sendMessage, message }) => {

    const classes = useStyles();

return(
<Box className={classes.pageColor}>
  <form className="form">
  <Box className={classes.textArea}>
    <TextField
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    </Box>
    <Button className="button" onClick={e => sendMessage(e)}>Send</Button>
  </form>
</Box>
)
}

export default Input;