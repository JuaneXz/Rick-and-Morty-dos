export const validate = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors= {}
    if (!regexEmail.test(inputs.email)) {
      errors.email = 'Debe ser un correo electrónico';
    }
    if (!inputs.email) {
      errors.email = 'Se requiere un nombre de usuario';
    }
    if (inputs.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    }
    if (!inputs.password.match(/\d/)) {
      errors.password = 'Se requiere un número en la contraseña';
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    if (!/[A-Z]/.test(inputs.password)) {
        errors.password = 'Se requiere al menos una letra mayúscula en la contraseña';
      }
    return errors
  }
  