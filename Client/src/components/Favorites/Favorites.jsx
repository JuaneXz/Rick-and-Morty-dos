import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import styles from './estilos.module.css'
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react";

const Favorites = ({ myFavorites}) => {

    // eslint-disable-next-line no-unused-vars
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return(
        <div className={styles.container}>
            <div className={styles.contain}>
                <select onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        {
            myFavorites?.map(fav=>{
                return(
                    <Card 
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        className={styles.card}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);