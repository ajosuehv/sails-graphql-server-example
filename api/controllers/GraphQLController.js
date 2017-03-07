/**
 * GraphQLControllerController
 *
 * @description :: Server-side logic for managing Graphqlcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var graphql = require("graphql");
var sailsGraphQL = require("sails-graphql");

let schema = null;

module.exports = {
    index(req, res) { // default index action

        if (!schema) {
            schema = sailsGraphQL.generateSchema(sails.models);
        }
        console.log(req);
        graphql.graphql(
            schema,                       // generated schema
            req.body.query,                     // graphql query string
            null,                         // default rootValue
            {                             // context
                request: sails.request,     // default request method - required
                reqData: {                  // object of any data you want to forward to server's internal request
                    headers: {
                        /*your headers to forward */
                    }
                }
            }
        ).then((result) => {
            // errors handling
            console.log("This is the schema");
            console.log(graphql.printSchema(schema));
            console.log("This is the body");

            console.log(req.body);
            console.log(typeof req.body);
            console.log("This is the result");

            console.log(result);

            res.json(result.data);
    });
    }
};


