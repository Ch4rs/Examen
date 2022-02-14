"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaType = void 0;
const graphql_1 = require("graphql");
exports.TemaType = new graphql_1.GraphQLObjectType({
    name: 'Tema',
    fields: {
        id: { type: graphql_1.GraphQLID },
        tema: { type: graphql_1.GraphQLString }
    }
});
