import './styles.css';

export default function InstructionsList(props) {
  const {instructions} = props
  return (
    <div>
      <h3 className="blue-title">Instructions</h3>
      <ul className="list-text">
        {instructions.map((instruction, index) => {
          return <li key={index}>{instruction}</li>
        })}
      </ul>
    </div>
  )
}
