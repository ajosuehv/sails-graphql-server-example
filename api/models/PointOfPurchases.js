/**
 * PointOfPurchase.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
      xid : {type: 'integer'},
      name :{type: 'string'},
      agency_comission_by: {type: 'string'},
      agency_comission: {type: 'integer'}
  }
};

