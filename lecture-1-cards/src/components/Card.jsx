import Button from "./Button";
import Image from "./Image";

const Card = (props) => {
    console.log(props);
    
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <Image image = {props.image}></Image>
                <div className="card-body">
                    <h5 className="card-title">{props.Title}</h5>
                    <p className="card-text">{props.des}</p>
                    <Button Title = {props.Title} color={props.color}></Button>
                </div>
            </div>
        </div>
    )
}

export default Card