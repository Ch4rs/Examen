"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Users_1 = require("./Mutations/Users");
const User_1 = require("./Queries/User");
const Autor_1 = require("./Queries/Autor");
const Autores_1 = require("./Mutations/Autores");
const Ciudad_1 = require("./Queries/Ciudad");
const Ciudades_1 = require("./Mutations/Ciudades");
const Cubierta_1 = require("./Queries/Cubierta");
const Cubiertas_1 = require("./Mutations/Cubiertas");
const Pais_1 = require("./Queries/Pais");
const Paises_1 = require("./Mutations/Paises");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: User_1.GET_ALL_USERS,
        getUser: User_1.GET_USER,
        getAutor: Autor_1.GET_AUTOR,
        getAllAutores: Autor_1.GET_ALL_AUTOR,
        getCiudad: Ciudad_1.GET_CIUDADES,
        getAllCiudades: Ciudad_1.GET_ALL_CIUDADES,
        getCubiertas: Cubierta_1.GET_CUBIERTAS,
        getAllCubierta: Cubierta_1.GET_ALL_CUBIERTAS,
        getPais: Pais_1.GET_PAISES,
        getAllPaises: Pais_1.GET_ALL_PAISES
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: Users_1.CREATE_USER,
        deleteUser: Users_1.DELETE_USER,
        updateUser: Users_1.UPDATE_USER,
        createAutor: Autores_1.CREATE_AUTOR,
        deleteAutor: Autores_1.DELETE_AUTOR,
        updateAutor: Autores_1.UPDATE_AUTOR,
        createCiudad: Ciudades_1.CREATE_CIUDAD,
        deleteCiudad: Ciudades_1.DELETE_CIUDAD,
        updateCiudad: Ciudades_1.UPDATE_CIUDAD,
        updateCubierta: Cubiertas_1.UPDATE_CUBIERTA,
        createCubierta: Cubiertas_1.CREATE_CUBIERTA,
        deleteCubierta: Cubiertas_1.DELETE_CUBIERTA,
        createPais: Paises_1.CREATE_PAIS,
        updatePais: Paises_1.UPDATE_PAIS,
        deletePais: Paises_1.DELETE_PAIS
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
