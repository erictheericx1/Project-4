import Card from '../Card'

export default function HomePage(...exercises) {
  return (
    <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <Card exercise={exercise} />
          </li>
        ))}
      </ul>
    )
  }    