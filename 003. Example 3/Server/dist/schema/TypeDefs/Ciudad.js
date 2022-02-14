"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadType = void 0;
const graphql_1 = require("graphql");
exports.CiudadType = new graphql_1.GraphQLObjectType({
    name: 'Ciudad',
    fields: {
        id: { type: graphql_1.GraphQLID },
        ciudad: { type: graphql_1.GraphQLString }
    }
});
