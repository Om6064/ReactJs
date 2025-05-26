import { useRef, useState } from "react"


const Ref_aa = () => {
  const [Count, setCount] = useState(0)
  let rendar = useRef(1)
  let input = useRef(null)
  return (
    <>
      <p>Count Is :{Count}</p>
      <p>Count RenderIng : {rendar.current}</p>
      <button onClick={() => {
        rendar.current++;
        setCount(Count + 1)
      }}>Click Me</button><br />

      <input ref={input} type="text" />
      <button onClick={
        () => {
          input.current.value = ""
        }
      }>Remove</button>
    </>
  )
}

export default Ref_aa