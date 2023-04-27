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
        page = <div>
            <div>
                <div>
                    <div>
                        <h1>{exerciseData.name}</h1>
                            <figure>
                                <img src={exerciseData.gif}/>
                                <figcaption>
                                    <p>{exerciseData.id}</p>
                                </figcaption>
                            </figure>
                    <div>
                        <h2>{exerciseData.target}</h2>
                        <h2>{exerciseData.difficulty}</h2>
                        <h5>{exerciseData.type}</h5>
                        <h5>{exerciseData.equipment}</h5>
                        <p>{exerciseData.instructions}</p>
                    <div>
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
