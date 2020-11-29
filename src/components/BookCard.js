import React from "react";
import image from "../Images/se.jpg";
import Search from "./Search";



import { Card, CardMedia, CardContent, CardHeader} from "@material-ui/core";



const BookCard = ({ results }) => {
    return(
	
        // {results.length >= 1 &&
        //     results.map((result, index) => (
            <>
           <img src={results.volumeInfo.imageLinks.thumbnail} alt={results.title}/>
           <p>{results.volumeInfo.authors}</p>
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