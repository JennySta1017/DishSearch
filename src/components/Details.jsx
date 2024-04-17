import { useState } from "react";
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
    let index;
    const ingredients = [];
    const measures = [];

    // Loopa igenom ingredienserna och skapa listelement för varje ingrediens
    index = 1;
    while (details && details.meals && details.meals[0] && details.meals[0][`strIngredient${index}`]) {
      const ingredient = details.meals[0][`strIngredient${index}`];
      if (ingredient.trim() !== "") {
        ingredients.push(<tr key={index}><td>{ingredient}: </td></tr>);
      }
      index++;
    }

     // Loopa igenom måtten och skapa listelement för varje mått
     index = 1;
     while (details && details.meals && details.meals[0] && details.meals[0][`strMeasure${index}`]) {
       const measure = details.meals[0][`strMeasure${index}`];
       if (measure.trim() !== "") {
         measures.push(<tr key={index}><td>{measure}</td></tr>);
       }
       index++;
     }
      
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
  <div className="detailTable"> 
    <table>
      <thead>
        <tr>
          <th colSpan="2">Ingredients</th>
        </tr>
      </thead>    
      <tbody>
        <tr>
          <td>{ingredients}</td>
          <td>{measures}</td>
        </tr>
      </tbody>
    </table>
                  
    <table>
      <thead>
        <tr>
          <th >How to cook</th>
        </tr>
      </thead>
      <tbody>
      {details.meals[0].strInstructions
        .replace(/STEP\s*\d+/g, '')
        .split('\n')
        .map((step, index) => (
          <tr id='detailList' key={index}>
            <td>{step.trim()}</td>
          </tr>
          
        ))}
    </tbody>
    </table>
  </div>
)}
        
        
      </div>
    );
}
  
  export default FoodDetailsLink;

  