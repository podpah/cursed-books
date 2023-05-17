import './App.css';
import { SingleBook } from './singleBook';
import React, {useState, useEffect} from 'react'


function App() {
    
    const [isFocused, setIsFocused] = useState(false)
    const [focusedBook, setFocusedBook] = useState({})

    const [data, setData] = useState([])

    const bookURL = "https://raw.githubusercontent.com/podpah/cursed-books/main/src/seed.json"

    
    async function getData() {
        const res = await fetch(bookURL)
        const val = await res.json()
        let x = shuffle(val.data)
        setData(shuffle(x))
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function imageClick(id) {
        console.log("Focus: ", isFocused, "Obj: ", focusedBook.title)
        setIsFocused(true)
        setFocusedBook(data[id-1])
    }


    const clickHandler = (item) => {
		setIsFocused(false)
        // setFocusedBook(null)
	}


    return (
        <div className="App">
            <h1 className='title' onClick={() => clickHandler()}>Cursed Books</h1>
                <div className="content">
                {isFocused ? <SingleBook book={focusedBook} setIsFocused={setIsFocused} setFocusedBook={setFocusedBook} />  : <> {
                data.map((x, index) => {
                const id = index + 1; return <img className="images" src={x.image} alt={x.title} id={id} onClick = {() => {imageClick(id)}} />;
                })}</>}
            </div>
        </div>
    );
}

export default App;
