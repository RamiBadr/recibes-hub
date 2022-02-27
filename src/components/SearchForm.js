import React, { useContext } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import recipeContext from '../store/recipeContext';

const SearchForm = () => {
    const app_id = 'bce5d4d6';
    const app_key = '5ba63b73b74ffa06701d2159ea7a7df9';
    const [recipes, setRecipes, error, setError] = useContext(recipeContext);
    const [searchValue, setSearchValue] = useState('');
    const [healthLabel, setHealthLabel] = useState('');
    const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${app_key}&health=${healthLabel}`;
  
  // https://api.edamam.com/search?q=chicken&app_id=bce5d4d6&app_key=5ba63b73b74ffa06701d2159ea7a7df9&health=alcohol-free1
    const getRecipes = async (e) => {
      e.preventDefault();
      try {
        if(searchValue.match(/\w\S\D/g) !== null) {
            const result = await Axios.get(url);
            console.log(typeof(result.data.hits));
            setRecipes(result.data.hits);
            console.log(result.data.hits);
          } else {
            setError('Type Letters Only');
          }
      } catch(err) {
        setError('No Recipes Found');
      }  
}  
  return (
    <>
    <h1><u>Food Recipe Hub</u>🥗</h1>
      <form onSubmit={getRecipes} className='app__searchForm'>
        <input 
          type='search' 
          placeholder='Type the ingredient' 
          className='app__search' 
          autoComplete='off'
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <select 
          className='app__healthLabels' 
          onChange={e => setHealthLabel(e.target.value)}
          value={healthLabel}
        >
          <option>--select--</option>
          <option value='alcohol-free'>Alcohol Free</option>
          <option value='dairy-free'>Dairy Free</option>
          <option value='egg-free'>Egg Free</option>
          <option value='fish-free'>Fish Free</option>
          <option value='kidney-free'>Kidney Friendly</option>
          <option value='kosher'>Halal</option>
          <option value='gluten-free'>Gluten Free</option>
          <option value='low-potassium'>Low Potassium</option>
          <option value='low-sugar'>Low Sugar</option>
          <option value='mustard-free'>Mustard Free</option>
          <option value='No-oil-added'>No Oil Added</option>
          <option value='pork-free'>Pork Free</option>
          <option value='red-meat-free'>Red Meat Free</option>
          <option value='shellfish-free'>Shellfish Free</option>
          <option value='vegan'>Vegan</option>
          <option value='vegetarian'>Vegetarian</option>
          <option value='wheat-free'>Wheat Free</option>
        </select>
        <button className='app__submit'>Get Recipe</button>
      </form>
    </>
  )
}

export default SearchForm