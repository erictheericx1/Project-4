import { Link } from 'react-router-dom'
import './styles.css'

export default function Card({ exerciseData, updateDetailPage }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-square">
                    <img src={exerciseData.photo} alt={exerciseData.name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{exerciseData.name}</p>
                        <p className="subtitle is-6">{exerciseData.difficulty}</p>
                    </div>
                </div>
                <div className="content">
                    <Link to={"/details/" + exerciseData._id} onClick={() => { updateDetailPage(exerciseData) }}>
                        <button className="button is-primary">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
