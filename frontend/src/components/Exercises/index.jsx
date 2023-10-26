import Card from '../Card'

function Exercises(props) {
    return (
      <div className="container">    
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {props.galleryContent && props.galleryContent.map((exercise) => (
                <div className="column is-one-third" key={exercise._id}>
                  <Card exerciseData={exercise} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Exercises