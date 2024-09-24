import React from 'react'
// named exports need exact names and curl braces
import {RECIPE} from './recipe-data'
// component imports these all export as default from thier files
import RecipeInfo from './RecipeInfo'
import RecipeImg from './RecipeImg'
import IngredientsList from './IngredientList'
import InstructionsList from './InstructionList'
import Card from './Card'
import UserRating from './UserRating'
import './styles.css'

const headerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center',
  fontSize: '1.5em'
};

const wrapperStyle = {
  margin: '0 auto',
  padding: '20px'
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center',
  fontSize: '1.5em'
};

export default function RecipeCard() {
  return (
    <div style={wrapperStyle}>
      <header style={headerStyle}>Recipe Web-App Made With React.js</header>
      <Card>
        <RecipeImg imgSrc={RECIPE.imgSrc} />
        <div className="card_text">
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
          <div className="card_lists">
            <IngredientsList ingredients={RECIPE.ingredients} />
            <InstructionsList instructions={RECIPE.instructions} />
          </div>
          <UserRating />
        </div>
      </Card>
      <footer style={footerStyle}>Made with ❤️ by Syna Khanna</footer>
    </div>
  )
}