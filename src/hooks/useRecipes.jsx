import { useState } from "react";
import axios from "axios";

const useRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [query, setQuery] = useState(null);

  const getRandom = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=b866fa74704e45fd98a10ded0d739222&number=20"
      );
      setRecipes(response.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipesDiet = async (diet) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b866fa74704e45fd98a10ded0d739222&diet=${diet}&number=4&sort=time`
      );
      setQuery(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipe = async (id) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=b866fa74704e45fd98a10ded0d739222`
      );
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {getRandom, recipes, getRecipe, recipe, getRecipesDiet, query};
};

export default useRecipes;
