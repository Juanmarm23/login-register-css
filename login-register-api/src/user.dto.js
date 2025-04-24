// user.dto.js
export function validateUserDTO(user) {
    const { email, password } = user;
  
    const isValidEmail = email && email.includes('@') && email.endsWith('.com');
    const isValidPassword =
      password &&
      password.length >= 6 &&
      /[A-Z]/.test(password) &&       // Al menos una mayúscula
      /[0-9]/.test(password) &&       // Al menos un número
      /[!@#$%^&*(),.?":{}|<>]/.test(password); // Al menos un símbolo
  
    return isValidEmail && isValidPassword;
  }
  /*
Recibe un objeto user (con email y password)

Verifica que:

El email tenga @ y termine en .com

La contraseña tenga:

Más de 6 caracteres

Una mayúscula

Un número

Un carácter especial

Devuelve true si todo está bien, o false si algo falla.

Más adelante usaremos esta función en el controller para validar lo que nos llega del frontend.



  */