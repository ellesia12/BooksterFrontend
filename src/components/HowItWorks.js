import React from "react";
import { Box, Typography, Card, CardHeader, CardMedia, CardContent, Grid  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import stepOne from "../Images/se.png"
import stepTwo from "../Images/search.png";
import stepThree from "../Images/support_solid_I.png"
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
   
    text: {
        textAlign: 'center',
        fontFamily: "'Abril Fatface', cursive",
        fontWeight: 'bold',
        color: `#fcf3cf`,
        letterSpacing: '4px'
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
        marginBottom: `150px`,
        outlineColor: `#fcf3cf`,
        border: '2px solid #fcf3cf',
        padding: '5px',
        background: 'none'
      },
      cardHeader: {
          fontWeight: `bold`,
          color: `#fcf3cf`,
          fontFamily:"'Oswald', sans-serif",
          marginBottom: '10px'
      },
      media: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%', // 16:9
        
      },
      box:{
          paddingBottom: "40px"
      },
      container: {
          height: '70vh'
      },
      text2: {
        color: `#fcf3cf`,
        fontFamily:"'Oswald', sans-serif",
        fontSize: '1.5rem'
      }
      
  
}))

const HowItWorks = ({checked}) => {

const classes = useStyles();

    return(
        
    <Box className={classes.container}>
        <Box >
        
        <Box className={classes.box}>
            <Typography className={classes.text} color="secondary" variant="h2"> How We Work...</Typography>
        </Box>
        
        </Box>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Grid className={classes.gridPosition}>
            <Card className={classes.root}>
                {/* <CardHeader
                    title="Step 1"
                    className={classes.cardHeader}
                />  */}
                <Typography variant="h4" className={classes.cardHeader}>Step 1</Typography>
                <CardMedia
                    className={classes.media}
                    image={stepOne}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text2}>
                        Sign up for Bookster using your email address, and add some fun facts about yourself.
                    </Typography> 
                </CardContent>
            </Card>
            <Card className={classes.root}>
            <Typography variant="h4" className={classes.cardHeader}>Step 2</Typography>
                <CardMedia
                    className={classes.media}
                    image={stepTwo}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text2}>
                        Search for your favorite books and add them into your very own bookshelf, where you can them organize them into categories.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
            <Typography variant="h4" className={classes.cardHeader}>Step 3</Typography>
                <CardMedia
                    className={classes.media}
                    image={stepThree}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text2}>
                        Join different chat rooms and meet new people from around the world, while discussing your favorite books.
                    </Typography>
                </CardContent>
            </Card>
    </Grid>
    </Collapse>
    </Box>

    );
};

export default HowItWorks;
