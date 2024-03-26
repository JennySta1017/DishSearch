import { useState } from "react";
import InputField from "./InputField";
import '../styles/Details.css';


function FoodDetailsLink({ meal }) { // Funktion för att hämta och uppdatera detaljer
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
      <li id="clickName">
        <h2 id="clickText" onClick={fetchDetails}>{meal.strMeal}</h2>
        <p className="hoverText">Click for more details</p>
      </li>
      <li><img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} /></li> 
       </ul> 

      
       {details && details.meals && details.meals[0] && (
  <div> 
    <ul className='detailListItem'>
        <li><h3>Ingredients</h3></li>
        {Array.from({ length: 20 }, (_, index) => {
        const ingredient = details.meals[0][`strIngredient${index + 1}`];
        return ingredient && ingredient.trim() !== "" && ( // Kontrollera om ingrediensen finns och inte är tom
          <li key={index}>
            {ingredient}
        <br />
      </li>
      );
        })}  

      <li><h3>How to cook</h3></li>
      {details.meals[0].strInstructions
        .replace(/STEP\s*\d+/g, '')
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

  