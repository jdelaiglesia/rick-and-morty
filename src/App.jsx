import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { useState } from 'react';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if (characterAlreadyExists(data.id)) {
               window.alert('¡Este personaje ya fue agregado!');
               return;
            }
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((character) => character.id !== id));
      console.log(id)
   }

   const addRandomCharacter = () => {
      const id = Math.floor(Math.random() * 826) + 1;
      onSearch(id);
   }

   const characterAlreadyExists = (id) => {
      return characters.some((character) => character.id === id);
   }

   return (
      <div className='App'>
         <h1>Rick and Morty Character Showcase</h1>
         <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;

