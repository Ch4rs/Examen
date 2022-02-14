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
exports.UPDATE_PAIS = exports.DELETE_PAIS = exports.CREATE_PAIS = void 0;
const graphql_1 = require("graphql");
const Paises_1 = require("../../Entities/Paises");
const Message_1 = require("../TypeDefs/Message");
const Pais_1 = require("../TypeDefs/Pais");
exports.CREATE_PAIS = {
    type: Pais_1.PaisType,
    args: {
        pais: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pais } = args;
            const result = yield Paises_1.Paises.insert({
                pais
            });
            return Object.assign(Object.assign({}, args), { id: result.identifiers[0].id });
        });
    },
};
exports.DELETE_PAIS = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(_, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Paises_1.Paises.delete(id);
            if (result.affected === 0)
                return {
                    success: false,
                    message: "Error in Delete Pais",
                };
            return {
                success: true,
                message: "Delete Pais successfully",
            };
        });
    },
};
exports.UPDATE_PAIS = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        input: {
            type: new graphql_1.GraphQLInputObjectType({
                name: "PaisInput",
                fields: () => ({
                    pais: { type: graphql_1.GraphQLString },
                }),
            }),
        },
    },
    resolve(_, { id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield Paises_1.Paises.update({ id }, { pais: input.pais,
            });
            if (response.affected === 0)
                return;
            return {
                success: true,
                message: "Update Pais successfully",
            };
        });
    },
};
