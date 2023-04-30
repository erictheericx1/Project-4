import Card from '../Card'

export default function HomePage(props) {
  return (
    <div className="container" style={{ padding: '20px', backgroundColor: "gray" }}>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Home</h1>
          </div>
        </div>
      </section>
      
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
