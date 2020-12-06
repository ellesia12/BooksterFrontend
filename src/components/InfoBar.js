import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme=>({

  infoBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fcf3cf",
    borderRadius: "4px 4px 0 0",
    height: "60px",
    width: "100%"

  },

  leftInnerContainer: {
    flex: "0.5",
    display: "flex",
    alignItems: "center",
    marginLeft: "5%",
    color: "black",
    

  },
  rightInnerContainer: {
    display: "flex",
  flex: "0.5",
  justifyContent: "flex-end",
  marginRight: "5%"
      
  },
  roomName: {
      border: '2px',
  },
  
  

}));




const InfoBar = ({ room }) => {

  const classes = useStyles();

return(
  <Box className={classes.infoBar}>
    <Box className={classes.leftInnerContainer}>
    <FiberManualRecordIcon />
      <h3 className={classes.roomName}>{room} </h3>
    </Box>
    <Box className={classes.rightInnerContainer}>
        <a href="/chatroom"><CloseIcon /></a>
    </Box>
    
  </Box>
)
}

export default InfoBar;