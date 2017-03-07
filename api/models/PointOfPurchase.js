/**
 * PointOfPurchase.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        xid : {type: 'integer'},
        name :{type: 'string'},
        agency_comission_by: {type: 'string'},
        agency_comission: {type: 'integer'}
    }

};

