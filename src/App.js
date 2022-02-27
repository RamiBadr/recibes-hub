import { useContext } from 'react';
import './App.css';
import RecipeTile from './components/RecipeTile';
import SearchForm from './components/SearchForm';
import recipeContext from './store/recipeContext';

function App() {
  const [recipes, setRecipes, error] = useContext(recipeContext);
  return (
    <div className="App">
        <SearchForm />
        {recipes.length > 0 ? <RecipeTile /> : error}
    </div>
  );
}

export default App;
