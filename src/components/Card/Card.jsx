import { Link } from "react-router-dom";
import styles from './estilos.module.css'

export default function Card({id, name, species, gender, image, onClose}) { //destructuro props, por cada elemento
   return (
      <div className={styles.divCard}>
         <button className={styles.close} onClick={() => onClose(id)}> X </button>
         <img  src={image} alt="" /> 
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
