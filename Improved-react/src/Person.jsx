import React from "react";

const Person = ({id,name,handleDelete}) => {
    console.log("re-render");

    
    
    return (
        <div>
            {name}
            <button onClick={() => handleDelete(id)}>x</button>
        </div>
    )
}

export default React.memo(Person)