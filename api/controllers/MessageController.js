/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  //* ruta para manejar los mensajes del chat
  // * listar todos los mensajes de la sala
  list: async function (req, res) {
    // let idUser = req.session.user.id;
    let messages = await Message.find();
    res.status(200).json({ messages: messages });
  },

  //* recibe datos de contacto
  store: async function (req, res) {
    let data = {
      // * si hay usuario logueado poner el email en el correo
      user: req.body.user,
      message: req.body.message,
    };
    let message = await Message.create(data).fetch();
    return res.status(200).json({ message: message });
  },

  // // * actualiza los datos de un mensaje de contacto
  // update: async function (req, res) {
  //   let data = {
  //     id: req.body.id,
  //     email: req.body.email,
  //     message: req.body.message,
  //   };
  //   let contact = await Contact.updateOne({ id: data.id }).set({ data });
  //   return res.status(200).json({ contact: contact });
  // },

  // // * borra proyectos propios
  // destroy: async function (req, res) {
  //   let data = {
  //     id: req.body.id,
  //   };
  //   let contact = await Contact.destroyOne(data); //archive hace softdelete
  //   return res.status(200).json({ contact: contact });
  // },
};
