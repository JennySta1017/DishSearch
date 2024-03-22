import '../styles/InputField.css'
import {useState, useRef} from 'react'
import FoodDetailsLink from './Details'

function InputField({onSearch}) { // funktion för hantering av sökfältet
  const dishInput = useRef(null)

  const [result, setResult] = useState(null); // lagring av sökresultat

  const getFood = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishInput.current.value}`)
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
        dishInput.current.value = ''; // Rensa sökfältet
        onSearch(data); // Skicka resultatet till förälderkomponenten
    })
      
    .catch((error) => console.error('Error fetching food:', error));
};[]



return (
        <> 
        
        <input 
        type="text" 
        placeholder=' Search a dish'
        id="input"
        ref = {dishInput} //refererar till värdet i inputfältet
        />
      
      <button  onClick={getFood} className="btn">Search</button> 
      
   </> );
}

export default InputField;