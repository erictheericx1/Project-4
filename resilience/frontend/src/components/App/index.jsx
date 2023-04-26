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
      {exercises.length > 0 && exercises.map}
  </ul>
)
}

export default App
