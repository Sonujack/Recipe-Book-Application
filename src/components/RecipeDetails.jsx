import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../api';

const RecipeDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setDetails(data);
    };
    getDetails();
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="recipe-detail-container">
      <h1>{details.title}</h1>
      <img src={details.image} alt={details.title} />
      <h2>Ingredients:</h2>
      <ul>
        {details.extendedIngredients.map(ing => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{details.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
