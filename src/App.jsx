import './App.css';

import { API_URL, API_KEY } from './constants';

import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Cards from './components/Cards';
import Nav from './components/Nav';
import Detail from './components/Detail';
import About from './views/About';
import Error from './views/Error';

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${API_URL}${id}?key=${API_KEY}`).then(({ data }) => {
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
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<Error />}/>
         </Routes>
      </div>
   );
}

export default App;

