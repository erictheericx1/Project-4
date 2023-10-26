import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getExercises } from "../../../utils/backend"

import LandingPage from '../LandingPage'
import Exercises from '../Exercises'
import DetailsPage from '../DetailsPage'
import About from '../AboutPage'
import Navbar from '../Navbar'
import Footer from '../Footer'

import 'bulma/css/bulma.css'



function App() {
  const [exercises, setExercises] = useState([])
  const [detailPage, setDetailPage] = useState()


  useEffect(() => {
    getExercises().then(data => setExercises(data))
  }, [])


  return (
    <div>
      <Navbar />
{/* 
      <div>
      <section className="main">
        <div className="hero-body">
          <div className="container">
            <h1 className="page has-text-centered is-italic">Resilience</h1>
            <p className="subtitle has-text-white is-4">Don't just push past your limits, conquer them.</p>
          </div>
        </div>
      </section>
      </div> */}

      <Routes>
          <Route path="/" element={<LandingPage galleryContent={exercises} />} />
          <Route path="/exercises" element={<Exercises galleryContent={exercises} />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<DetailsPage exerciseData={detailPage} updateWorkout={setDetailPage} />}/>
      </Routes>

      
      <div>
        <Footer />
      </div>
    </div>

    

  );
}

export default App