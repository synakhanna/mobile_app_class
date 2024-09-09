import Card from './Card.js';
import RecipeImg from './RecipeImg.js';
import RecipeInfo from './RecipeInfo.js';
import IngredientList from './IngredientList.js';
import InstructionList from './InstructionList.js';
import { RECIPE } from './recipe-data.js';
import './styles.css';

export default function RecipeCard() {
  return (
    <Card>
      <div className="recipe-card-layout">
        {/* Recipe Image */}
        <div className="recipe-image-container">
          <RecipeImg imgSrc={RECIPE.imgSrc} altText={RECIPE.title} />
        </div>
        
        {/* Recipe Info and Details */}
        <div className="recipe-info-container">
          {/* Recipe Title */}
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
          
          <div className="recipe-details">
            {/* Ingredients */}
            <IngredientList ingredients={RECIPE.ingredients} />
            
            {/* Instructions */}
            <InstructionList instructions={RECIPE.instructions} />
          </div>
        </div>
      </div>
    </Card>
  );
}
