const userService = require('../services/userService');

// Renderizar la vista de iniciar sesión
exports.renderLoginPage = (req, res) => {
  res.render('iniciar-sesion', { nombrePagina: 'Iniciar Sesión', year: new Date().getFullYear() });
};

// Manejar la creación de un usuario
exports.createUser = async (req, res) => {
  try {
    const { nombres, apellidos, identificacion, correo, telefono, direccion, perfil } = req.body;
    const newUser = await userService.createUser({ 
      nombres, 
      apellidos, 
      identificacion, 
      correo, 
      telefono, 
      direccion, 
      perfil, 
      estadoPrestamo 
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Error al crear el usuario: ' + error.message);
  }
};

// Manejar el inicio de sesión
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    // Aquí deberías implementar la verificación de contraseña si tienes un sistema de autenticación
    res.send('Inicio de sesión exitoso'); // Cambia este mensaje según la lógica que necesites
  } catch (error) {
    res.status(500).send('Error al iniciar sesión: ' + error.message);
  }
};
