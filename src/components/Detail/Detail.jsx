import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./deta.module.css"

const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = '96c95f96b69d.beec75df07333278e58c';

export default function Detail (){

    const [character,setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={styles.divCard}>
            <div className={styles.info}>
                <h4>Id: {character?.id}</h4>
                <h1>Name: {character?.name}</h1>
                <h1>Status: {character?.status}</h1>
                <h1>Specie: {character?.species}</h1>
                <h1>Gender: {character?.gender}</h1>
                <h1>Origin: {character?.origin?.name}</h1>
            </div>
            <div className={styles.imagen}>
                <img  src={character?.image} alt="" />
            </div>
            
        </div>
    )
}
