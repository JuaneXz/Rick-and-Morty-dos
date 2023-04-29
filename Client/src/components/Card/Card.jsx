import { Link } from "react-router-dom";
import styles from './estilos.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) { //destructuro props, por cada elemento
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   
   return (
      <div className={styles.divCard}>
         
          <button className={styles.fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

         <button className={styles.close} onClick={() => onClose(id)}> X </button>
         <img className={styles.imagen} src={image} alt="" /> 
         <div className={styles.cardInfo}>
            <Link to={`/detail/${id}`}>
               <h1 className={styles.texto}>{name}</h1>
            </Link>
            <h1 className={styles.texto}>{species}</h1>
            <h1 className={styles.texto}>{gender}</h1>
            <div className={styles.cardId}>#{id}</div>
         </div>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);