import React from "react";
import Card from "react-bootstrap/Card";

export const SingleBook = ({ book }) => {
    
    function checkType() {
        if (book.type == "weird") {
            return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" className="bookImage" src={book.image} />
                <div className="cardTxt">
                <Card.Title className="bookTitle" >{book.title}</Card.Title>
                <Card.Body>
                    <Card.Text>{book.description}</Card.Text>
                </Card.Body>
                </div>
            </Card>
          )
        }
        else if (book.type === "meme") {
            return <><img src={book.meme}/></>
        }
        else if (book.type === "audio") {
            
            var typeIndex = book.meme.lastIndexOf(".") + 1

            if (book.audio instanceof Array) {
                book.audio = book.audio[Math.floor(Math.random() * book.audio.length)];
            }
            console.log(book.audio)
            console.log("i", book.meme.slice(typeIndex))
            if (book.meme.slice(typeIndex) === "mp4") {
                return <>
                <video autoPlay muted loop>
                    <source src={book.meme} type="video/mp4" />
                </video>
                <audio autoPlay loop>
                    <source src={book.audio} type="audio/mpeg" />
                </audio>
                </>
            }
            else{
                return <>
                <img src={book.meme} alt={book.title} />
                <audio autoPlay loop>
                    <source src={book.audio} type="audio/mpeg" />
                </audio>
                </>
            }
        } 
    }
    
  return (checkType());
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