import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [imgUrl, setImgUrl] = useState("")
    const [imgchange, setchange] = useState(0)
    useEffect(() => {
        let URL = "https://dog.ceo/api/breeds/image/random"
        fetch(URL)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data.message); 
                setImgUrl(data.message)
            })
    }, [imgchange])
    return (
        <div>
            {
                imgUrl == "" ? "" : <img src={imgUrl} alt="" />
            }

            <button onClick={() => {
                setchange(imgchange + 1)
            }}>Click Me</button>
        </div>

    )
}

export default Counter