import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./config/firebase"

const App = () => {
    const [input, setInput] = useState({
        name: "", author: "", isBn: ""
    })
    const [books, setBooks] = useState([])
    const [editIdx, setEditIdx] = useState(null)
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
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Books", id))
            printData()
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, "Books", editIdx), input)
            printData()
            setEditIdx(null) 
            setInput({ name: "", author: "", isBn: "" }) 
        } catch (error) {
            console.log(error)
        }
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
            <button onClick={editIdx ? handleUpdate : fetchData}>{editIdx ? "EditBook" : "Add Book"}</button>

            {
                books.map((book) => {
                    return <div>
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                        <p>{book.isBn}</p>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                        <button onClick={() => {
                            setEditIdx(book.id);
                            const { id, ...data } = book
                            setInput(data)
                            console.log(id, data)
                        }}>edit</button>
                    </div>
                })
            }
        </div >
    )
}

export default App