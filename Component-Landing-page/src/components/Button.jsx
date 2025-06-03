const Button = (props) => {
    return (
        <>
            <button className={`bg-btn p-${props.padding} bg-button border-0 rounded`}>
                <p className="text-white fw-semibold m-0">{props.title}</p>
            </button>
        </>
    )
}

export default Button