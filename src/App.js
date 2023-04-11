import Cards from './components/Cards/Cards'
import NavBar from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail/Detail';
import style from "./App.module.css"
import Form from './components/Form/Form'

  const URL_BASE = 'https://be-a-rym.up.railway.app/api';
  const KEY = '96c95f96b69d.beec75df07333278e58c';

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
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
 const EMAIL = 'juanes2001.7@gmail.com';
 const PASSWORD = '0507Juan'

 function login(userData) {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
     setAccess(true);
     navigate('/home');
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
        </Routes> 
    </div>
    
  )
}

export default App
