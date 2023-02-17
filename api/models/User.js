/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  //datastore: 'mysql',

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 144,
      protect: true,
    },
    nick: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 15,
    },
    // avatar: {
    //   type: 'string',
    //   defaultsTo: 'images/user-default.svg',
    // },
    // bio: {
    //   type: 'string',
    //   required: false,
    //   defaultsTo: '',
    // },
    isAdmin: {
      type: 'boolean',
      defaultsTo: false,
    },
    // * relaciones
    // * fin relaciones
  },

  beforeCreate: function (user, callback) {
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        console.log(error);
        return callback(error);
      } else {
        user.password = hash;
        return callback();
      }
    });
  },
};
