import { Link } from 'react-router-dom'
import './styles.css'

export default function Card({ exerciseData, updateDetailPage }) {
    return (
        <figure>
            <img src={exerciseData.photo} alt={exerciseData.name} />
            <figcaption>
            <h3>{exerciseData.name}</h3>
            <h4>{exerciseData.difficulty}</h4>
            </figcaption>
            <Link to={"/details/" + exerciseData._id} onClick={() => { updateDetailPage(exerciseData) }}>
                <button className="button is-primary">Learn More</button>
            </Link>
        </figure>
    )
}
