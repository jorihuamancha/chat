/**
 * Message.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  schema: false,
  attributes: {
    text: {
      type: 'string',
      required: true,
    },
    author: {
      model: 'user',
      required: true,
    },
  },
};
