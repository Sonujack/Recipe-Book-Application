import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-card-content">
            <h3>{recipe.title}</h3>
            <p>{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
