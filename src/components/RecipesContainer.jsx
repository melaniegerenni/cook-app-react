import React from 'react';
import RecipesList from './RecipesList';

const RecipesContainer = () => {
  return (
    <div className='p-4'>
        <RecipesList diet='Vegetarian' />
        <RecipesList diet='Vegan' />
        <RecipesList diet='Gluten Free' />
    </div>
  )
}

export default RecipesContainer