const Button = (props) => {
    console.log(props);
    
  return (
    <button className={`btn btn-${props.color}`}>Go At {props.Title}</button>
  )
}

export default Button