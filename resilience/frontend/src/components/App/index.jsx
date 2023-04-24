import { useState, useEffect } from 'react'
// import './styles.css'
import axios from 'axios';

function App() {
  const [exercises, setExercises] = useState([])

  // Query the API
  useEffect(() => {

    async function getData() {
      const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', {
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        }
      })
      setExercises(response.data)  
  
    }


    //call the async function
    getData()
  }, [])


  // Create the HTML using JSX
  return (
    <>
      <h1>Resilience</h1>
      {exercises.length > 0 ? <img src={exercises[0].gifUrl} /> : <p>Please wait while we load your exercise...</p>} 

    </>
  )
}

export default App
