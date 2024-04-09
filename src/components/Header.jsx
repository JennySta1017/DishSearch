import '../styles/Header.css'

function Header({ onClearSearch }) {
    const handleImageClick = () => {
        // Funktionen för att rensa sökresultatet
        onClearSearch();
      };
return (
<div id="header">
<div className='image-container'>
        <img src="/images/dish-logo.png" alt="logo" onClick={handleImageClick} />
    </div>
<div id='text-header'>
    <h1>Find a nice dish to cook</h1>
</div></div>
);
} 

export default Header;