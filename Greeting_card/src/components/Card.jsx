
import './Card.css'

const Card = ({image,title,description})=>{
    return(
        <>
        <div className='card'>
        <div className="image-container">
            <img src={image} alt="{title}"/>
        </div>
        <div className="content"> <h3>{title}</h3><p>{description}</p>
        </div>
         </div>
</>
    )
}

export default Card;
