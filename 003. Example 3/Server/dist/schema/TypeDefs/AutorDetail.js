"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorDetailType = exports.AutorType = void 0;
const graphql_1 = require("graphql");
const Ciudad_1 = require("./Ciudad");
const Pais_1 = require("./Pais");
exports.AutorType = new graphql_1.GraphQLObjectType({
    name: 'Autor',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString },
        apellido: { type: graphql_1.GraphQLString },
        ciudad: { type: graphql_1.GraphQLID },
        pais: { type: graphql_1.GraphQLID },
        year: { type: graphql_1.GraphQLInt }
    }
});
exports.AutorDetailType = new graphql_1.GraphQLObjectType({
    name: 'AutorDetail',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString },
        apellido: { type: graphql_1.GraphQLString },
        ciudad: { type: Ciudad_1.CiudadType },
        pais: { type: Pais_1.PaisType },
        year: { type: graphql_1.GraphQLInt }
    }
});
