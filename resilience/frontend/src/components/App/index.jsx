import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getExercises } from "../../../utils/backend"
// import Card from '../Card'
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'

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
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <h1 className="navbar-item is-size-4 has-text-weight-bold">RESILIENCE</h1>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="/">
          Home
        </a>

        <a className="navbar-item" href="/about">
          About
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item" href="/nutrition">
              Nutrition
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>


      <Routes>
          <Route path="/" element={<HomePage galleryContent={exercises} />} />
          <Route path="/details/:id" element={<DetailsPage exerciseData={detailPage} updateWorkout={setDetailPage} />}/>
      </Routes>
    </div>

  );
}

export default App