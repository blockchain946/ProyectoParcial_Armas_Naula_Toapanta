const userService = require('../services/userService');

exports.renderLoginPage = (req, res) => {
  res.render('iniciar-sesion', { nombrePagina: 'Iniciar Sesión', year: new Date().getFullYear() });
};


exports.renderRegisterPage = (req, res) => {
  res.render('crear-cuenta', { nombrePagina: 'Crear Cuenta', year: new Date().getFullYear() });
};


exports.createUser = async (req, res) => {
  try {
    const { nombres, apellidos, identificacion, correo, telefono, direccion, perfil } = req.body;

    // Incluye estadoPrestamo como false por defecto
    const estadoPrestamo = false;

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

    // Redirigir al inicio de sesión tras crear el usuario
    res.redirect('/iniciar-sesion');
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
    res.redirect(`/userBook/${user.id}`);
  } catch (error) {
    res.status(500).send('Error al iniciar sesión: ' + error.message);
  }
};

exports.renderUser = (req, res) => {
  const userId = req.params.id;
  res.render('userBook', { nombrePagina: 'Library Management', year: new Date().getFullYear(), userId });
};
