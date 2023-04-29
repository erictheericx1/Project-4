import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getExercises } from "../../../utils/backend"
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import About from '../AboutPage'
import Navbar from '../Navbar'

import 'bulma/css/bulma.css'
import './styles.css'


function App() {
  const [exercises, setExercises] = useState([])
  const [detailPage, setDetailPage] = useState()


  useEffect(() => {
    getExercises().then(data => setExercises(data))
  }, [])


  return (
    <div>
      <Navbar />


      <Routes>
          <Route path="/" element={<HomePage galleryContent={exercises} />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<DetailsPage exerciseData={detailPage} updateWorkout={setDetailPage} />}/>
      </Routes>
    </div>

  );
}

export default App