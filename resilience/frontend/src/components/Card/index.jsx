import './styles.css'

export default function Card({ exerciseData }) {
    return (
        <>
          <h2>{exerciseData.name}</h2>
          <h3>{exerciseData.target}</h3>
        </>
    )
}