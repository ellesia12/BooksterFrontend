import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles"

import {  Typography, Grid, Box} from "@material-ui/core";
import { Card, CardMedia,  CardActionArea,  Button  } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//here add the fetch for getting the books by user from the data base and then display them

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
        fontFamily: "font1",
        color: '#fcf3cf'
    },
    word: {
        fontFamily:"'Oswald', sans-serif",
        alignText: 'center',
        textWrap: 'wrap',
        fontWeight:'bold'
    },
    display: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '75%',
        marginLeft: 'auto',
        marginRight:'auto'
    },
    root: {
        width: 200,
        backgroundColor:'#fcf3cf'
      },
    media:{
        height: 170
    },
    select: {
        color: 'black',
        fontWeight:'bold',
        backgroundColor: '#718680'
        
    }
}))






const BookShelf = () =>{
    const classes = useStyles();
    const [myBooks, setMyBooks] = useState(null)
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedBook, setSelectedBook] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  }; 

  

useEffect(()=>{  
fetch('http://localhost:3000/mybooks')
.then(response=>{
    if (response.ok) return response.json();
    throw new Error ("couldn't find your books")
},(networkError) => {
    console.log(networkError.message);
  })
.then((data)=> setMyBooks(data))
.catch((e) => console.log(e.message));

}, [myBooks])



    return (
    <>
    <Box component="div" style={{background:"#718680", height:"100vh", paddingTop: '100px'}}>
        <Grid container justify="center">
            <Typography variant="h3" className={classes.header}>My Bookshelf</Typography>
        </Grid>
                <Box  className={classes.display}>
                {myBooks && myBooks.map((book)=>{
                return(
                    
                <Card className={classes.root} key={book.googleid} onClick={(e)=>setSelectedBook(book)}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={book.thumbnail}
                        />
                        <Typography gutterBottom variant="h6">
                            {book.title}
                        </Typography>
                        <Button className={classes.button} onClick={handleOpen}>
                            Select a Category
                        </Button>
                <FormControl className={classes.formControl}>
                            <Select   
                                value={category}
                                onChange={handleChange}
                            >
                                <MenuItem value={'Reading'}>Reading</MenuItem>
                                <MenuItem value={'To Read'}>To Read</MenuItem>
                                <MenuItem value={'Have Read'}>Have Read</MenuItem>
                            </Select>
                </FormControl>
                    </CardActionArea>
                </Card>
              
                )})}
            </Box>
            
                    
            <Box>
            <p>You Selected Book: {selectedBook.title}</p>
            <p>You Selected: {category}</p>
            </Box>
        </Box>
        </>
    )
}




export default BookShelf;
