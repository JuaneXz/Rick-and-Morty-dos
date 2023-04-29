import styles from './estilos.module.css'
import { useState } from 'react';
import { validate } from './validation';

const Form= (props) =>{
    
    const [userData, setUserData] = useState({
        email: '',
        password: '',
     });

     const [errors, setErrors] = useState({
     });
    
     const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value,
          }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

         
    return(
        <div className={styles.login}>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input onChange={handleOnChange}
            value={userData.email} name='email' placeholder='Escribe tu email...' type='text'></input>
            {errors.email && <p style={{color: "red" }}>{errors.email}</p>}
            <label>Password:</label>
            <input onChange={handleOnChange}
            value={userData.password} name='password' placeholder='Escribe tu contraseña...' type='password'></input>
            {errors.password && <p style={{color: "red" }}>{errors.password}</p>}
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default Form;