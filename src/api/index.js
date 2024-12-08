import axios from "axios";

const API_KEY = "243fa7ff23ba492d86b500ebd89c8cc5";
const BASE_URL = "https://api.spoonacular.com/recipes/";

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}complexSearch?apiKey=${API_KEY}&number=10`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${id}/information?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
};
