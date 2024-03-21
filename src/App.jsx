import { useState, useRef } from 'react'
import './styles/App.css'
import InputField from './components/InputField'
import FoodDetailsLink from './components/Details';

function App() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (result) => {
    setSearchResult(result);
  };

  return (
    <div>
      <InputField onSearch={handleSearch} />
      {searchResult && searchResult.meals && (
        <div>
          {searchResult.meals.map((meal) => (
            <FoodDetailsLink key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );

}

export default App
