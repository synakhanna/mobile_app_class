import './styles.css';

export default function RecipeInfo(props) {
  // if you want to destructure, the object key will be the variable name
  const {title, description} = props
  return (
    <div>
      <h2 className="main-title">{title}</h2>
      <p className="list-text">{description}</p>
    </div>
  )
}
