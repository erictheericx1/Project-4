import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../CommentSection'
import { getExercise } from '../../../utils/api'
import './styles.css'

export default function DetailsPage({ exerciseData, updateExercise }) {
    // On component mount check if exerciseData is defined. If not defined, use the URL to query the API
    const { id } = useParams()

    useEffect(() => {
        if (!exerciseData) {
          getExercise(`https://exercisedb.p.rapidapi.com/exercises/${id}`)
                .then(res => updateExercise(res.data))
        }
    }, [])

    let page = <p>Loading your art</p>
    if (exerciseData) {
        page = <div className="bg-gray-100 pt-12">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-screen">
                    <div className="flex items-start">
                        <figure className="h-[85vh] mx-10 w-[40vw]">
                            <img
                                className="h-[70vh] w-full object-cover"
                                src={exerciseData.gifurl}
                            />
                            <figcaption>
                                <p className="mt-1 text-lg leading-normal text-gray-900 text-center">{exerciseData.id}</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h1 >{exerciseData.target}</h1>
                            <p>General Info</p>
                            <p>{exerciseData.bodyPart}</p>
                            <p>{exerciseData.equipment}</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentSection exerciseId={exerciseData.name} />
        </div>
    }

    return page
}

