import React from "react";
import { Box, Typography, Card, CardHeader, CardMedia, CardContent, Grid  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import stepOne from "../Images/se.jpg"
import stepTwo from "../Images/search_outline II.jpg";
import stepThree from "../Images/support_solid I.jpg"

const useStyles = makeStyles(theme => ({
   
    text: {
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",
    },
    boxPosition: {
        marginBottom: '10px'

    },
    gridPosition: {
        display: `flex`,
        flexWrap: `wrap`,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300,
        textAlign: `center`,
        marginBottom: `5%`,
        outlineColor: `black`,
        padding: '5px'
        
      },
    
      cardHeader: {
          fontWeight: `bold`,
          color: `black`,
          fontFamily: "'Oswald', sans-serif",
      },
      media: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%', // 16:9
        
      },
      
  
}))

const HowItWorks = () => {

const classes = useStyles();

    return(
    <>

     <Box className={classes.box}>
            <Typography className={classes.text} color="secondary"> How we work </Typography>
        </Box>
<Grid className={classes.gridPosition}>
    <Card className={classes.root}>
      <CardHeader
        title="Step 1"
        className={classes.cardHeader}
      />
        
       <CardMedia
        className={classes.media}
        image={stepOne}
       />
      
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Sign up for Bookster using your email address
        </Typography>
        
       </CardContent>
      </Card>
       
        <Card className={classes.root}>
      <CardHeader
        title="Step 2"
        className={classes.cardHeader}
        fontFamily="'Oswald', sans-serif">
       </CardHeader>
        
       <CardMedia
        className={classes.media}
        image={stepTwo}
       />
      
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Search for you favorite books and add them into your very own bookshelf.
        </Typography>
        
       </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardHeader
        title="Step 3"
        className={classes.cardHeader}
      />
        
       <CardMedia
        className={classes.media}
        image={stepThree}
       />
      
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Join bookclubs and meet new people from around the world.
        </Typography>
        
       </CardContent>
      </Card>
</Grid>
        
        
    </>

    )
}

export default HowItWorks;
