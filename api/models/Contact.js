/**
 * Contact.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    email:{
      type: 'string',
      required: true,
      isEmail: true
    },
    message: {
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 5000
    },
    opened: {
      type: 'boolean',
      defaultsTo: false
    }
  },
};

