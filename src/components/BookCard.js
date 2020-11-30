import React, {useState} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardHeader, Button , Modal, Backdrop, Box } from "@material-ui/core";
import { useSpring, animated } from '@react-spring/web';

const useStyles = makeStyles((theme) => ({
	modal: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	paper: {
	  backgroundColor: theme.palette.background.paper,
	  border: '2px solid #000',
	//   boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	},
	bookDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContnet: "center",
		width: '150px'
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


const BookCard = ({ results }) => {
	
	
	
const [bookData, setBookData] = useState({
	title: '',
	thumbnail: '',
	synopsis: '',
	author: '',
	googleid: ''
});

const postOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ bookData })
}

const handleAddBooks = (e) =>{
	e.preventDefault();
	setBookData({...results})
	console.log(bookData)
}

const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
<Box className={classes.bookDisplay}>
	<img src={results.volumeInfo.imageLinks.thumbnail} alt={results.title}/>
      <button type="button" variant="contained" onClick={handleOpen}>
        Read more
      </button>
	  <Button type="submit"  variant="contained" onClick={handleAddBooks}>Save to MyBooks</Button>
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
		  	<p>{results.volumeInfo.title}</p>
			<img src={results.volumeInfo.imageLinks.thumbnail} alt={results.title}/>
    //        <p>By {results.volumeInfo.authors}</p>
	        <br />
			<p>{results.volumeInfo.description}</p>
          </div>
        </Card>
        </Fade>
      </Modal>
    </div>
  );
}


export default BookCard;


// return(
	
    //     // {results.length >= 1 &&
    //     //     results.map((result, index) => (
    //         <>
    //        
	// 	   <Button type="submit"  variant="contained" onClick={handleAddBooks}>Save to MyBooks</Button>
          
    //     </>
        
    //         )}