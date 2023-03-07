import React, { useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const { getRandom, recipes } = useRecipes();

  useEffect(() => {
    getRandom();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {recipes ? (
        <div className="grid grid-cols-5 gap-6 bg-slate-50 p-3 w-full">
          {recipes.map(item => (<RecipeCard key={item.id} recipe={item} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecipesList;
