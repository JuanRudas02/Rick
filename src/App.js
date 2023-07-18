import img from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './componets/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const reactApi = async () =>{
    const api =  await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

   

    setCharacters(characterApi.results);
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'> Rick and Morty</h1>
        {characters ?(
          <Characters  characters={characters} setCharacters={setCharacters}/>

        ): 
        
        (
          <>
          
          <img src={img} alt="Rick and Morty " className='img-home' />
        
          <button onClick={ reactApi} className='btn-search'>Buscar personaje</button>
          </>
        )}
        

        
       </header>
       </div>
  );
}

export default App;
