import React from "react";
import Card from "react-bootstrap/Card";

export const SingleBook = ({ book, setIsFocused, setFocusedBook }) => {
    
    function checkType() {
        if (book.type === "meme") {
            return <><img src={book.meme}/></>
        }
        else if (book.type === "audio") {
            
            var typeIndex = book.meme.lastIndexOf(".") + 1

            if (book.meme.slice(typeIndex) === "mp4") {
                return <>
                <video autoplay muted loop>
                    <source src={book.meme} type="video/mp4" />
                </video>
                <audio autoplay loop>
                    <source src={book.audio} type="audio/mpeg" />
                </audio>
                </>
            }
            else{
                return <>
                <img src={book.meme} alt={book.title} />
                <audio autoplay loop>
                    <source src={book.audio} type="audio/mpeg" />
                </audio>
                </>
            }
        } 
    }
    
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Title className="bookTitle" >{book.title}</Card.Title>
        <Card.Img variant="top" className="bookImage" src={book.image} />
        <Card.Body>
            <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};


// If weird:
    // Show image, title and description
// Elif meme:
    // Show meme image
// Elif audio:
//    If typeof(audio) == list:
//        Random pick from list
//    Else:
//        Show meme image + play audio