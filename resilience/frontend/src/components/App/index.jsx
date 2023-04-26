import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getExercises } from "../../../utils/backend"
import Card from '../Card'
import DetailsPage from '../DetailsPage'

import 'bulma/css/bulma.css'
import './styles.css'


function App() {
  const [exercises, setExercises] = useState([])
  const [detailPage, setDetailPage] = useState(null)

  useEffect(() => {
    getExercises().then(data => setExercises(data))
  }, [])

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma logo" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>

      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <Card exercise={exercise} />
          </li>
        ))}
      </ul>

<Routes>
<Route path="/details/:id" element={<DetailsPage artworkData={detailPage} updateArt={setDetailPage} />}/>
</Routes>
</div>

  );
}

export default App