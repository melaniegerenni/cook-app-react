import React, { useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

const RecipesList = (props) => {
  const { getRecipesDiet, query } = useRecipes();
  const { diet } = props;

  useEffect(() => {
    getRecipesDiet(diet);
    // eslint-disable-next-line
  }, []);

  return (
      <div>
        <h2>{diet}</h2>
        {query ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {query.map((item) => (
              <RecipeCard key={item.id} recipe={item} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
  );
};

export default RecipesList;
