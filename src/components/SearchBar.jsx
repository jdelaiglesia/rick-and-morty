import { useState } from 'react';

export default function SearchBar(props) {
   const [search, setSearch] = useState('');

   const handleChange = (id) => {
      setSearch(id);
   }

   return (
      <div>
         <input type='text' value={search} onChange={(e) => handleChange(e.target.value)} />
         <button onClick={() => {props.onSearch(search)}}>Agregar</button>
      </div>
   );
}
