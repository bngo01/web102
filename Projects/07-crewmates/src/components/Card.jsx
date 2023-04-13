import {Link} from "react-router-dom"
import "./Card.css"

function Card ({id, name, color, speed}) {
    return (
        <div className="Card">
            <p className="name"><b>{name}</b></p>
            <img src={`./src/assets/${color}.png`}/>

            <br></br>

            <div className="links">
                <Link to={`/about/${id}`}>
                    <button>Detail</button>
                </Link>
                <Link to={`/edit/${id}`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Card