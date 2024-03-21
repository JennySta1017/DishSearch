import { useState } from "react";
import InputField from "./InputField";


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
      <div>
        <ul className='listItem'>
      <li><p onClick={fetchDetails}>{meal.strMeal}</p></li>
      <li><img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} /></li> 
       </ul> 

      
       {details && (
          <div>
           <ul>
            {details.meals[0].strInstructions.split("STEP").filter(step => step.trim() !== "").map((step, index) => (
             <li key={index}>STEP {index + 1}: {step.trim()}</li> 
            ))}
           </ul>
            
          </div>
        )}
        
      </div>
    );
  }
  
  export default FoodDetailsLink;

  