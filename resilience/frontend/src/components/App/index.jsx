import { useState, useEffect } from 'react'
import { getExercises } from "../../../utils/backend"
// import Card from '../Card'
// import './styles.css'


function App() {
  const [exercises, setExercises] = useState([])

useEffect(() => {
  getExercises().then(data => setExercises(data))
}, [])

console.log(exercises)

return (
  <ul>
      {exercises.length > 0 && exercises.map(exercise => {
          return <exercise
              key={exercise._id}
              exerciseData={exercise.name}
              exercises={exercises}
              setExercises={setExercises}
          />
      })}
  </ul>
)
}

export default App
