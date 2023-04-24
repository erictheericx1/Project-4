import { useState, useEffect } from 'react'
// import './styles.css'
import axios from 'axios';

function App() {
  const [exercises] = useState([])

  // Query the API
  useEffect(() => {

    async function getData() {
      const res = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPart')
      return res.data;
      // setExercises(data)
    }

    //call the async function
    getData()
  }, [])


  // Create the HTML using JSX
  return (
    <>
      <h1>Resilience</h1>
      {exercises.length > 0 ? <img src={exercises[0].image} /> : <p>Please wait while we load your exercise...</p>} 

    </>
  )
}

export default App
