import { Link } from 'react-router-dom'
import './styles.css'

export default function Card({ exercise, updateDetailPage }) {
    return (
        <figure>
            <img src={exercise.photo} alt={exercise.name} />
            <figcaption>
            <h3>{exercise.name}</h3>
            <h4>{exercise.difficulty}</h4>
            </figcaption>
            <Link to={"/details/" + exercise.name} onClick={() => { updateDetailPage(exercise) }}>
              <button className="button is-primary">Learn More</button>
            </Link>
        </figure>
    )
}
