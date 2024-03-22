import { useState } from "react";
import InputField from "./InputField";
import '../styles/Details.css';


function FoodDetailsLink({ meal }) { // Funktion för att hämta detaljer och uppdatera detaljer
    const [details, setDetails] = useState(null);
  
    const fetchDetails = () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then((response) => response.json())
        .then((result) => {
          setDetails(result);
          console.log(result);
        })
        .catch((error) => console.error('Error fetching food details:', error));
    };
      
    return (
      <div className="detailBox">
        <ul className='detailListItem'>
      <li><h2 onClick={fetchDetails}>{meal.strMeal}</h2></li>
      <li><img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} /></li> 
       </ul> 

      
       {details && (
  <div> 
    <ul className='detailListItem'>
      <li><h3>How to cook</h3></li>
      {details.meals[0].strInstructions
        .replace(/STEP\s*\d+/g, match => `${match}\n`)
        .split('\n')
        .map((step, index) => (
          <li id='detailList' key={index}>
            {step.trim()}
            <br />
          </li>
        ))}
    </ul>
  </div>
)}
        
        
      </div>
    );
  }
  
  export default FoodDetailsLink;

  