import '../styles/InputField.css'
import {useState, useRef} from 'react'

function InputField({onSearch}) { // funktion för hantering av sökfältet
  const dishInput = useRef(null)

  const [result, setResult] = useState(null); // uppdatering av sökresultat

  
  const getFood = () => { 
    if (!dishInput.current.value) {   
      alert('Search for something!')   // om sökfältet är tomt - alert
      return
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishInput.current.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.meals) {
        alert('No food found, try again!') // om input inte matchar en maträtt - alert
        return
      }
      setResult(data);
        dishInput.current.value = ''; // Rensa sökfältet
        onSearch(data); // Skicka resultatet till förälderkomponenten
    })
      
    .catch((error) => console.error('Error fetching food:', error));
};[]



return (
        <div> 
        <input 
        type="text" 
        placeholder=' Search a dish'
        id="input"
        ref = {dishInput} //refererar till värdet i inputfältet
        />
        <button  onClick={getFood} className="btn">Search</button> 
      </div> 
    );
}

export default InputField;