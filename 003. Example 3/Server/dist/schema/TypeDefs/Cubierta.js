"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubiertaType = void 0;
const graphql_1 = require("graphql");
exports.CubiertaType = new graphql_1.GraphQLObjectType({
    name: 'Cubierta',
    fields: {
        id: { type: graphql_1.GraphQLID },
        cubierta: { type: graphql_1.GraphQLString }
    }
});
