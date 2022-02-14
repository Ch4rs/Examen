"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisType = void 0;
const graphql_1 = require("graphql");
exports.PaisType = new graphql_1.GraphQLObjectType({
    name: 'Pais',
    fields: {
        id: { type: graphql_1.GraphQLID },
        pais: { type: graphql_1.GraphQLString }
    }
});
