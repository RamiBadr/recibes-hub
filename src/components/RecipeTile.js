import React, { useContext } from 'react';
import recipeContext from '../store/recipeContext';

const RecipeTile = () => {
  const [recipes] = useContext(recipeContext);

  return( 
    <div className='app__recipes'>
    {
      recipes.map((recipe) => {
          const recipeInfo = recipe.recipe;
          const {label, image, url} = recipeInfo;
          return image.match(/\.(jpeg|jpg|png|gif)$/) !== null && (
                <div className='recipeTile' onClick={() => window.open(url)}>
                  <img src={image} alt='recipe-img' className='recipeTile__image' />
                  <h3 className='recipeTile__name'>{label}</h3>
                </div>
          )
      })
    }
    </div> 
  )
}

export default RecipeTile

// recipes.map((recipe) => {
//   const recipeInfo = recipe.recipe;
//   const {label, image, url} = recipeInfo;
//   return image.match(/\.(jpeg|jpg|png|gif)$/) !== null && (
//     <div className='recipeTile' onClick={() => window.open(url)}>
//       <img src={image} alt='recipe-img' className='recipeTile__image' />
//       <h3 className='recipeTile__name'>{label}</h3>
//     </div>