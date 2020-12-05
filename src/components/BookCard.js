import React, {useState} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import { Card, CardMedia, CardContent, CardHeader, Button , Modal, Backdrop, Box } from "@material-ui/core";
import { useSpring, animated } from '@react-spring/web';

const useStyles = makeStyles((theme) => ({
	modal: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	paper: {
	  backgroundColor: '#718680',
	  border: '2px solid #fcf3cf',
	//   boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	  width: '400px'
	},
	bookDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContnet: "center",
		width: '150px'
	},
	button: {
        marginTop: "1rem",
        color: "black",
        borderColor: "white",
        borderRadius: "18px",
		fontFamily:"'Oswald', sans-serif",
        backgroundColor: '#fcf3cf'
	},
	bookTitle: {
		color:'#fcf3cf',
		fontFamily: "font1",
		textTransform: 'uppercase'
	},
	bookDescription: {
		fontFamily:"'Oswald', sans-serif",
		color:'#fcf3cf',
	},
	author: {
		fontFamily:"'Oswald', sans-serif",
		color:'#fcf3cf',
	}
  }));
  
  const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
	  from: { opacity: 0 },
	  to: { opacity: open ? 1 : 0 },
	  onStart: () => {
		if (open && onEnter) {
		  onEnter();
		}
	  },
	  onRest: () => {
		if (!open && onExited) {
		  onExited();
		}
	  },
	});
  
	return (
	  <animated.div ref={ref} style={style} {...other}>
		{children}
	  </animated.div>
	);
  });
  
  Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
  };


const BookCard = ({ book }) => {
	
	


  

const handleAddBooks = (e) =>{
	e.preventDefault();

	const bookData = {
		title: book.volumeInfo.title,
		thumbnail: book.volumeInfo.imageLinks.thumbnail,
		synopsis: book.volumeInfo.description,
		author: book.volumeInfo.authors[0],
		googleid: book.id

	}
	
	fetch('http://localhost:3000/books', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ bookData })
	})
	.then(response => response.json())
	.then(data => console.log(data))
}

    
const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



	
	return(		
	<div className={classes.bookGrid}>
		<Box className={classes.bookDisplay}>
    		<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      		<Button type="button" variant="contained" onClick={handleOpen} className={classes.button}>
        		Read more
      		</Button>
      		<Button type="submit"  variant="contained" onClick={handleAddBooks} className={classes.button}>Save to MyBooks</Button>
</Box>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Card>
          <div className={classes.paper}>
              <Typography variant="h3" className={classes.bookTitle}>{book.volumeInfo.title}</Typography>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} width="250px" className={classes.bookImage}/>
            <p className={classes.author} alignText='center'>By {book.volumeInfo.authors}</p>
            <br />
            <Typography variant="p" className={classes.bookDescription}>{book.volumeInfo.description}</Typography>
          </div>
        </Card>
        </Fade>
      </Modal>
	</div>  

  );
}


export default BookCard;

