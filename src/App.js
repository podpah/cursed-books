import React, {useState, useEffect} from 'react'

function App() {

    const [data, setData] = useState([])

    const bookURL = "https://raw.githubusercontent.com/podpah/cursed-books/main/src/seed.json"
    // const [list, setList] = useState([])
    // const [isFocused, setIsFocused] = useState(false)
    // const [focusedBook, setFocusedBook] = useState({})

    useEffect(() => {
        getData()
    })
// json must be {} on the outside so i put the array as a object value e.g. data : [book info]
// Ahhh okay now I push?

    async function getData() {
        const res = await fetch(bookURL)
        const val = await res.json()
        setData(val.data)
        console.log(val.data)
    }

    // const [name, setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [description, setDescription] = useState('')
    // const [category, setCategory] = useState('')
    // const [image, setImage] = useState('')
  
    // const [edTitle, setEdTitle] = useState(focusedBook.title)
    // const [edPrice, setEdPrice] = useState(focusedBook.price)
    // const [edDescription, setEdDescription] = useState(focusedBook.description)
    // const [edCategory, setEdCategory] = useState(focusedBook.category)
    // const [edImage, setEdImage] = useState(focusedBook.image)
    // const [edId, setEdId] = useState(focusedBook.id)


    // if (!isFocused){ //If the user is not viewing a particular book (all are being viewed), then we show all.
    //     return <div id="container">
    //           {filteredInv.map((x) => {return <div className={!darkm ? "items" : "dmodeitems"} onClick={()=> {
    //             setIsFocused(isFocused => !isFocused) //When a component is clicked, the focus mode flips.
    //             setFocusedItem(x)
    //             setEdTitle(x.title)
    //             setEdCategory(x.category)
    //             setEdDescription(x.description)
    //             setEdPrice(x.price)
    //             setEdImage(x.image)
    //             setEdId(x.id)
    //           }
                
    //           }>
    //           <img src={x.image} alt={x.title} />
    //           </div> } )}</div>
    //   }
      
    //   else{ //Here we show just the product that has been clicked on.
    //     return (<div>
    //     <h1 id={!darkm ? "logo": "darklogo"} >Inventory App</h1>
    //       <div id="container">
    //       <div className='item-container'>
    //         <div className='button-container'>
    //           <button className={!darkm ? "" : "dmode"} onClick={() => {darkmo()} }>Toggle colour mode</button>
    //           <button className={!darkm ? "" : "dmode"}  onClick={()=>{
    //               setIsFocused(isFocused=> !isFocused)
    //             }} >Back to all</button>
    //         </div>
    //         <h2>{focusedItem.title}</h2>
    //         <img src={focusedItem.image} alt={focusedItem.title} />
    //         <p><b>Price</b>: £{focusedItem.price}</p>
    //         <p><b>Description: </b>{focusedItem.description}</p>
    //         <p><b>Category: </b>{focusedItem.category}</p>
    //         <button className={!darkm ? "" : "dmode"}  onClick={() => {delitem(focusedItem.id)
    //         setIsFocused(!isFocused)
    //         }}>Delete</button> {/*Here we can add logic for deleting item.*/}
    //         <button className={!darkm ? "" : "dmode"} onClick={()=>{setIsUpdatingItem((isUpdatingItem)=> !isUpdatingItem);console.log(focusedItem.id)}} >Update</button> {/*Here we can add logic for updating item.*/}
    
    //       </div>
    //       </div>
    //     </div>)
    //   }

    return (
        <div className="App">
            <h1>{data}</h1>
        </div>
    );
}

export default App;
