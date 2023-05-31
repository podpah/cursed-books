import './App.css';
import { SingleBook } from './singleBook';
import React, {useState, useEffect} from 'react'


function App() {
    
    const [isFocused, setIsFocused] = useState(false)
    const [focusedBook, setFocusedBook] = useState({})

    const [data, setData] = useState([])
    const [ip, setIp] = useState("")
    const bookURL = "https://raw.githubusercontent.com/podpah/cursed-books/main/src/seed.json"

    // document.getElementsByClassName("images").addEventListener("keypress", function(event) {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
               event.currentTarget.click();
           }}

    async function getData() {
        const test = await fetch("https://api.db-ip.com/v2/free/self")
        const get = await test.json()
        setIp(get.ipAddress)
        
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
	}


    return (
        <div className="App">
            <h1 className='title' onClick={() => clickHandler()}>Cursed Books</h1>
                <div className="content">
                {isFocused ? <SingleBook book={focusedBook} ip={ip}/>  : <> {
                data.map((x, index) => {
                // const id = index + 1; return <> <button> <img className="images" src={x.image} alt={x.sha} id={id} onClick = {() => {imageClick(id)}}/> </button></>;  //Makes it look like a weird keyboard and messes up images
                const id = index + 1;
                const randomTabindex = Math.floor(Math.random() * 24) + 1;;
                 return <> <img className="images" src={x.image} alt={x.sha} id={id} onKeyDown={handleKeyDown} tabIndex={randomTabindex} onClick = {() => {imageClick(id)}}/>
                </>;
                })}</>}
            </div>
        </div>
    );
}


// What's wrong with this?
// The alt tags - which are really important for screen readers and people who are visually impaired, are in SHA256 (Not even Satan could think of this one)
// TabIndex is absolutely <s>fucked up</s> jambled up, if you have trouble using a mouse you might depend on tabbing to go through things
// The colour contrast makes it hard to read
// The videos and music don't have controls, so if someone needs to put the volume down, they need to put volume system down
export default App;
