// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export const SingleBook = ({ book, ip }) => {
    
 function checkType() {
     
     
     if (book.type === "weird") {
         
         
         console.log(book.description)
         return (
             <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" className="bookImage" src={book.image} />
                <div className="cardTxt">
                <Card.Title className="bookTitle" >{book.title}</Card.Title>
                <Card.Body>
                    {book.description.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </Card.Body>
                </div>
            </Card>
          )
        }
        else if (book.type === "meme") {
            return <><img src={book.meme} alt={book.title}/></>
        }
        else if (book.type === "audio") {
            let song;
            var typeIndex = book.meme.lastIndexOf(".") + 1

            if (book.audio instanceof Array) {
                song = book.audio[Math.floor(Math.random() * book.audio.length)];
            }
            else { // Necessary to switch between songs since if you overlap array it won't cycle
                song = book.audio
            }
            console.log(song)
            if (book.meme.slice(typeIndex) === "mp4") {
                return <>
                {book.title === "The Anarchist Cookbook" ? <><Alert key="danger" variant="danger">Police is coming to {ip}! Run Siid</Alert> <div className="break"/> </>: <></>}
                {/* <Alert key="danger" variant="danger">test</Alert> */}
                <video autoPlay muted loop>
                    <source src={book.meme} type="video/mp4" />
                </video>
                <audio autoPlay loop>
                    <source src={song} type="audio/mpeg" />
                </audio>
                </>
            }
            else {
                return <>
                <img src={book.meme} alt={book.title} />
                <audio autoPlay loop>
                    <source src={song} type="audio/mpeg" />
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