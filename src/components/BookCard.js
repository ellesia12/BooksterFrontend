import React, {useState} from "react";
import image from "../Images/se.jpg";
import Search from "./Search";



import { Card, CardMedia, CardContent, CardHeader, Button } from "@material-ui/core";



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

	
	return(
	
        // {results.length >= 1 &&
        //     results.map((result, index) => (
            <>
           <img src={results.volumeInfo.imageLinks.thumbnail} alt={results.title}/>
           <p>{results.volumeInfo.authors}</p>
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