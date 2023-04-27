import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../CommentSection'
import { getExercise } from '../../../utils/api'
// import './styles.css'

export default function DetailsPage({ exerciseData, updateWorkout }) {
    // On component mount check if exerciseData is defined. If not defined, use the URL to query the API
    const { id } = useParams()

    useEffect(() => {
        if (!exerciseData) {
            getExercise(`/api/exercises/${id}`)
                .then(res => updateWorkout(res))
            
        }
    }, [])

    let page = <p>...Loading your workouts...</p>
    if (exerciseData) {
        page = 
        <div className="container" style={{ padding: '20px', backgroundColor: "#f2f2f2", border: "1px solid #ccc" }}>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Exercise Details</h1>
                    </div>
                </div>
            </section>

        <div className="columns is-centered">
            <div className="column is-full">
                <div className="box">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <figure className="image">
                            <h1 className="title">{exerciseData.name}</h1>
                                <img src={exerciseData.gif} alt={exerciseData.name} />
                                <figcaption>{exerciseData.id}</figcaption>
                            </figure>
                        </div>
                        <div className="column">
                            <div className="content">
                                <h2 className="subtitle"><i> <b>Targeted Muscle: </b> </i>{exerciseData.target}</h2>
                                <h2 className="subtitle"><i> <b>Difficulty: </b> </i>{exerciseData.difficulty}</h2>
                                <h5 className="subtitle"><i> <b>Type: </b> </i>{exerciseData.type}</h5>
                                <h5 className="subtitle"><i> <b>Equipment: </b> </i>{exerciseData.equipment}</h5>
                                <p><i> <b>Instructions: </b> </i>{exerciseData.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <CommentSection exerciseId={exerciseData._id} />
        </div>
    }
    return page
}
