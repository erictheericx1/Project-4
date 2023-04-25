import { deleteExercise } from "../../../utils/backend"

export default function exercise({ exerciseData, setExercises, exercises }) {
    function handleDelete() {
        deleteExercise(exerciseData._id)
        setExercises([...exercises.filter(exercise => exercise.name !== exerciseData.name)])
    }

    return (
        <li>
            <h3 className="inline mr-2">
                {exerciseData.name}
            </h3>
            <button
                className="border-2 border-black rounded"
                onClick={handleDelete}>
                Delete
            </button>
        </li>
    )
}