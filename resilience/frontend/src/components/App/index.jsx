import { useState, useEffect } from 'react'
import { getExercises } from "../../../utils/backend"
import Card from '../Card'
import './styles.css'


function App() {
  const [exercises, setExercises] = useState([])

useEffect(() => {
  getExercises().then(data => setExercises(data))
}, [])

console.log(exercises)

return (
  <ul className="exercise-list">
    {exercises.map(exercise => (
      <li key={exercise.id}>
        <Card exercise={exercise} />
      </li>
    ))}
  </ul>
)
}

export default App
