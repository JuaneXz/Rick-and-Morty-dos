import Card from "../Card/Card";
import styles from './estilos.module.css'

export default function Cards({ characters, onClose, allClose}) {
   
   return (
   <div className={styles.divCards}>
      {characters.map(({id, name, species, gender, image}) => {
            return(
            <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
               />
               );
         })
         }
      <div>
      <button className={styles.close} onClick={allClose}>Cerrar todas las cartas</button>
      </div>
   </div>
   
   );
}
