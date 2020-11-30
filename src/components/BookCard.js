import React, {useState} from "react";
import image from "../Images/se.jpg";
import Search from "./Search";



import { Card, CardMedia, CardContent, CardHeader, Button } from "@material-ui/core";



const BookCard = ({ book }) => {
	
	
	
/* const [bookData, setBookData] = useState({
	title: '',
	thumbnail: '',
	synopsis: '',
	author: '',
	googleid: ''
}); */

/* const postOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ bookData })
}
 */

const handleAddBooks = (e) =>{
	e.preventDefault();

	const bookData = {
		title: book.volumeInfo.title ,
		thumbnail: book.volumeInfo.imageLinks.thumbnail,
		synopsis: book.volumeInfo.description,
		author: book.volumeInfo.authors,
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


	
	return(
	
       
            <>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
           <p>{book.volumeInfo.authors}</p>
		   <Button type="submit"  variant="contained" onClick={handleAddBooks}>Save to MyBooks</Button>
           <Card className="card">
				
					<CardHeader className="bookTitle">{}</CardHeader>
					<CardContent className="synposis">
						{}
					</CardContent>
                    <CardMedia
					variant="top"
					src={image}
					alt="Card image cap"
				   />
				<CardContent>
				</CardContent>
			</Card>
        </>
        
            )}

export default BookCard;