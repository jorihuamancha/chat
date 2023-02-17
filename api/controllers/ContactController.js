/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//* controlador para manejar los mensajes de contacto
module.exports = {
  // * todas las rutas necesita la politica de permitir si el usuario es admin

  // * listar todos los mensajes de contacto
  list: async function (req, res) {
    // let idUser = req.session.user.id;
    let contacts = await Contact.find();
    res.status(200).json({ contacts: contacts });
  },

  //* recibe datos de contacto
  store: async function (req, res) {
    let data = {
      // * si hay usuario logueado poner el email en el correo
      email: req.body.email,
      message: req.body.message,
    };
    let contact = await Contact.create(data).fetch();
    return res.status(200).json({ contact: contact });
  },

  // * actualiza los datos de un mensaje de contacto
  update: async function (req, res) {
    let data = {
      id: req.body.id,
      email: req.body.email,
      message: req.body.message,
    };
    let contact = await Contact.updateOne({ id: data.id }).set({ data });
    return res.status(200).json({ contact: contact });
  },

  // * borra proyectos propios
  destroy: async function (req, res) {
    let data = {
      id: req.body.id,
    };
    let contact = await Contact.destroyOne(data); //archive hace softdelete
    return res.status(200).json({ contact: contact });
  },
};
