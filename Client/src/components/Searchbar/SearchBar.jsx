import style from './sbar.module.css'
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
      event.target.value = '';
   }
   
   return (
      <div className={style.bar}>
         <input className={style.searchInput} type='search' onChange={handleChange} value={id}/>
         <button className={style.searchButton} onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
