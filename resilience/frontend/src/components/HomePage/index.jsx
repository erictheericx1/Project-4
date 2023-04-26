import Card from '../Card'

export default function HomePage(props) {
  console.log(props.galleryContent)
    return (
        <>
            <div>
                <h1>Home</h1>
                {props.galleryContent && props.galleryContent.map((exercise) => (
                  // <h1>{exercise.muscle}</h1>
                  <Card key={exercise._id} exerciseData={exercise} />
                ))}
            </div>
        </>
        )
    }