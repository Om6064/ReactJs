import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./config/firebase"

const App = () => {
    const [input, setInput] = useState({
        name: "", author: "", isBn: ""
    })
    const [books, setBooks] = useState([])
    const handlechange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    console.log(input);

    const fetchData = async () => {
        try {
            let res = await addDoc(collection(db, "Books"), input)
        } catch (error) {
            console.log(error);
        }
        printData()
        setInput({
            name: "", author: "", isBn: ""
        })
    }


    const printData = async () => {
        const booksSnapshot = await getDocs(collection(db, "Books"))
        let bookarr = booksSnapshot.docs.map((books) => {
            return {
                id: books.id,
                ...books.data()
            }
        })
        setBooks(bookarr)

    }

    useEffect(() => {
        printData()
    }, [])


    return (
        <div>
            Book Name :
            <input type="text" id="name" value={input.name} onChange={handlechange} />
            <br />
            <br />
            Author Name :
            <input type="text" id="author" value={input.author} onChange={handlechange} />
            <br />
            <br />
            isBn Number :
            <input type="number" id="isBn" value={input.isBn} onChange={handlechange} />
            <br />
            <br />
            <button onClick={fetchData}>Add Book</button>

            {
                books.map((book) => {
                    return <div>
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                        <p>{book.isBn}</p>
                    </div>
                })
            }
        </div>
    )
}

export default App