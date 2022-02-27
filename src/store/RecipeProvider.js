import React, { useState } from 'react'
import recipeContext from './recipeContext'

const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  return (
    <recipeContext.Provider value={[recipes, setRecipes, error, setError]}>
        {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider