"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_AUTOR = exports.DELETE_AUTOR = exports.CREATE_AUTOR = void 0;
const graphql_1 = require("graphql");
const Autores_1 = require("../../Entities/Autores");
const Message_1 = require("../TypeDefs/Message");
const Autor_1 = require("../TypeDefs/Autor");
exports.CREATE_AUTOR = {
    type: Autor_1.AutorType,
    args: {
        nombre: { type: graphql_1.GraphQLString },
        apellido: { type: graphql_1.GraphQLString },
        ciudad: { type: graphql_1.GraphQLID },
        pais: { type: graphql_1.GraphQLID },
        fechanacimiento: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, ciudad, pais, fechanacimiento, apellido } = args;
            const result = yield Autores_1.Autores.insert({
                nombre,
                ciudad,
                pais,
                fechanacimiento,
                apellido
            });
            return Object.assign(Object.assign({}, args), { id: result.identifiers[0].id });
        });
    },
};
exports.DELETE_AUTOR = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(_, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Autores_1.Autores.delete(id);
            if (result.affected === 0)
                return {
                    success: false,
                    message: "Error in Delete Autor",
                };
            return {
                success: true,
                message: "Deleter Autor successfully",
            };
        });
    },
};
exports.UPDATE_AUTOR = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        input: {
            type: new graphql_1.GraphQLInputObjectType({
                name: "AutorInput",
                fields: () => ({
                    nombre: { type: graphql_1.GraphQLString },
                    apellido: { type: graphql_1.GraphQLString },
                    ciudad: { type: graphql_1.GraphQLID },
                    pais: { type: graphql_1.GraphQLID },
                    fechanacimiento: { type: graphql_1.GraphQLString }
                }),
            }),
        },
    },
    resolve(_, { id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield Autores_1.Autores.update({ id }, { nombre: input.nombre,
                apellido: input.apellido,
                ciudad: input.ciudad,
                pais: input.pais,
                fechanacimiento: input.fechanacimiento
            });
            if (response.affected === 0)
                return;
            return {
                success: true,
                message: "Update Autor successfully",
            };
        });
    },
};
