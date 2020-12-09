import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles"

import {  Typography, Grid, Box} from "@material-ui/core";
import { Card, CardMedia,  CardActionArea,  Button  } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NavBar from './NavBar';
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
        marginBottom:"30px",
        fontFamily: "'Abril Fatface', cursive",
        color: '#fcf3cf',
        fontSize: '5rem'
    },
    header2: {
        textAlign: "center",
        marginBottom:"30px",
        fontFamily: "'Abril Fatface', cursive",
        color: '#fcf3cf',
        fontSize: '4rem'
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
        
    },
    cat: {
        display: 'flex',
        justifyContent: 'space-around',
        
        alignContent: 'center'
    },
    text: {
        fontFamily: "'PT Sans', sans-serif",
        
    },
    button1:{
        marginTop: "1rem",
        color: "black",
        borderColor: "white",
        borderRadius: "18px",
        fontFamily:"'Oswald', sans-serif",
        backgroundColor: '#fcf3cf',
        marginBottom: '1rem',
       
    },
    container: {
        border: '2px solid #fcf3cf',
        margin: '20px',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignText: 'center'
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '80px'
    },
    text2: {
        fontFamily: "'PT Sans', sans-serif",
        color: '#fcf3cf',
        textAlign: 'center',

    }
}))






const BookShelf = () =>{
    const classes = useStyles();
    const [myBooks, setMyBooks] = useState(null)
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedBook, setSelectedBook] = useState(false);

  const handleChange = (event, googleid) => {
    // console.log(event.target.value);
    //add post request here to update database to the correct status
    const books = myBooks
    const newbook = books.map(book=>{
        if(book.googleid === googleid){
            
            return {...book, status: event.target.value}
        }
        else{
            return book
        }
    })
    
  
    setMyBooks(newbook)
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

}, [])



    return (
    <>
    <NavBar />
    <Box component="div" style={{background:"#718680", height:"100vh", paddingTop: '100px'}}>
        <Grid container justify="center" className={classes.grid}>
            <Typography variant="h2" className={classes.header}>My Bookshelf</Typography>
            <Typography variant="h6" className={classes.text2}>Here you can organize your Bookshelf, just select the appropriate status of your book, and organize your bookshelf! When you're ready to discuss your book, just click on the button provided an you will be taken to that genre's chatroom! Happy Reading!</Typography>
        </Grid>
                <Box  className={classes.display}>
                {myBooks && myBooks.map((book)=>{
                return(
                <> 
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
                            Select Book's Status
                        </Button>
                <FormControl className={classes.formControl}>
                            <Select   
                                value={book.status}
                                onChange={(event)=> handleChange(event, book.googleid)}
                            >
                                <MenuItem value={'reading'}>Reading</MenuItem>
                                <MenuItem value={'to read'}>To Read</MenuItem>
                                <MenuItem value={'have read'}>Have Read</MenuItem>
                            </Select>
                </FormControl>
                    </CardActionArea>
                </Card>
               
            </>
                )})}
            </Box>
            
                    
            <Box style={{background:"#718680", height: '10%'}}>
            </Box>
            <Box className={classes.cat} style={{background:"#718680", height:"100vh", paddingTop: '50px'}}>
                <Box>
                    <Typography variant="h3" className={classes.header2}>To Read</Typography>
                    <Typography>{myBooks && myBooks.map(book=>{if(book.status === 'to read'){
                        return (
                            <Box className={classes.container}>
                            <Typography variant="h6" className={classes.text}>{book.title}</Typography>
                            <Button className={classes.button1}>Discuss this book with others!</Button>
                            </Box>
                            )
                    }else{return <></>}
                    })}</Typography>
                </Box>
                <Box>
                    <Typography variant="h3" className={classes.header2}>Reading</Typography>
                    <Typography>{myBooks && myBooks.map(book=>{if(book.status === 'reading'){
                        return (
                            <Box className={classes.container}>
                            <Typography variant="h6" className={classes.text}>{book.title}</Typography>
                            <Button className={classes.button1}>Discuss this book with others!</Button>
                            </Box>
                            )
                    }else {return <></>}
                    })}</Typography>
                </Box>
                <Box>
                    <Typography variant="h3" className={classes.header2}>Have Read</Typography>
                    <Typography>{myBooks && myBooks.map(book=>{if(book.status === 'have read'){
                        return (
                            <Box className={classes.container}>
                            <Typography variant="h6" className={classes.text}>{book.title}</Typography>
                            <Button className={classes.button1}>Discuss this book with others!</Button>
                            </Box>
                            )
                    }else {return <></>}
                    })}</Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

//conditional render based on the status, map through the books and only if the status = value then show it there 



export default BookShelf;
