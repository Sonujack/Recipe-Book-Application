import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <div className="home-page">
      <h1>Recipe Book</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
