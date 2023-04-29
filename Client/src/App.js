import Cards from './components/Cards/Cards'
import NavBar from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail/Detail';
import style from "./App.module.css"
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

const URL = 'http://localhost:3001/rickandmorty/login';
 // const URL_BASE = 'http://localhost:3005/rickandmorty/character';

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try{
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } 
    }
    catch(error){
      alert('¡No hay personajes con este ID!');
    }
 }

 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
 }

 const allClose = () => {
  setCharacters([])
 }

 const location = useLocation();

 //*---------Estado componente Form------------*//

 const[access,setAccess] = useState(false);
 const navigate = useNavigate();
 // const EMAIL = 'juanes2001.7@gmail.com';
// const PASSWORD = '0507Juan'

 const login = async (userData) => {

  try {
    const { email, password } = userData;
    const { data } = await axios(URL + `?email=${email}&password=${password}`)
    const { access } = data;
     setAccess(access);
     access && navigate('/home');
  }
  catch(error){
    console.log(error.message)
  }
}

useEffect(() => {
  !access && navigate('/');
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);


  return (
    <div className="container" style={{ padding: '25px'}}>
      <div className={style.nav}>
      {location.pathname !== "/" &&<NavBar onSearch={onSearch} access={access} setAccess={setAccess}/>}
      </div>
        <Routes>
        <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards
          characters={characters} onClose={onClose} allClose={allClose}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes> 
    </div>
    
  )
}

export default App
