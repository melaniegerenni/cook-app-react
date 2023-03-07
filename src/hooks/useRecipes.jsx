import { useState } from "react";
import axios from "axios";

const useRecipes = () => {
  const [recipes, setRecipes] = useState(null);

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

  return {getRandom, recipes};
};

export default useRecipes;
