import './styles.css';

export default function IngredientList(props) {
  const {ingredients} = props
  return (
    <div>
      <h3 className="blue-title">Ingredients</h3>
      <ul className="list-text">
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
    </div>
  )
}
