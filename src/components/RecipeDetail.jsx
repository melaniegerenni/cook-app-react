import React, { useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { getRecipe, recipe } = useRecipes();

  useEffect(() => {
    getRecipe(recipeId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {recipe ? (
        <div className="p-5 grid grid-cols-2 gap-3">
          <img className="w-full" src={recipe.image} alt="" />
          <div>
            <h2 className="m-0">{recipe.title}</h2>
            <ul>
              {recipe.extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecipeDetail;
