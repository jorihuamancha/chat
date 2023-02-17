/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // *
  register: async function (req, res) {
    let data = {
      nick: req.param('nick').toLowerCase(),
      email: req.param('email').toLowerCase(),
      password: req.param('password'),
      confirm: req.param('confirm'),
    };
    if (data.password !== data.confirm) {
      // controlar que la password y confirm sean iguales
      // mandar mensaje de error
      req.session.message = { error: 'Las contraseñas no coinciden' };
      res.redirect('/register');
    }
    let user = await User.findOne({ nick: data.nick, email: data.email }); //chequea que no haya un nick o email ya registrado
    if (!user) {
      // no hay nick ni email ya registrado
      delete data.confirm;
      //guardar el usuario que se registro
      let user = await User.create(data).fetch();
      req.session.message = {
        success: 'El registro de ' + user.nick + ' ha sido exitoso',
      };
      res.redirect('/');
    } else {
      // TODO informar que ya existe el nick o el email
      req.session.message = { error: 'El nombre o el correo ya están en uso' };
      res.redirect('/register');
    }
  },

  login: async function (req, res) {
    let nickOrEmail = req.param('nickOrEmail').toLowerCase();
    let password = req.param('password');
    // * buscar por (email o alias) y password
    let user = await User.findOne({
      where: { or: [{ nick: nickOrEmail }, { email: nickOrEmail }] },
    });
    if (!user) {
      // TODO: informar que no se encontro el usuario
      req.session.message = {
        error: 'El nombre o el correo no se pueden usar',
      };
      res.redirect('/');
    } else {
      bcrypt.compare(password, user.password, (error, isMatch) => {
        if (error) {
          throw error;
        } else if (!isMatch) {
          res.redirect('/'); // TODO: informar que las contraseñas no son iguales o que el email/nick no es correcto
        } else {
          delete user.password;
          delete user.createdAt;
          delete user.updatedAt;
          req.session.user = user;
          res.view('pages/projects/main');
        }
      });
    }
  },

  logout: function (req, res) {
    req.session.user = null;
    res.redirect('/');
  },

  profile: function (req, res) {
    // ! chequear si existe el user logueado y si esta activo
    return res.view('pages/user/profile');
  },
};
