import { Link } from 'react-router-dom'


export default function Card({ exerciseData, updateDetailPage }) {
    return (
        <Link
            to={"/details/" + exerciseData.target}
            onClick={() => { updateDetailPage(exerciseData) }}
        >
            <figure>
                <img src={exerciseData.photo} />
                <figcaption>
                    <h2 className="font-bold">{exerciseData.difficulty}</h2>
                </figcaption>
            </figure>
        </Link>
    )
}