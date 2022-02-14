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
exports.UPDATE_CIUDAD = exports.DELETE_CIUDAD = exports.CREATE_CIUDAD = void 0;
const graphql_1 = require("graphql");
const Ciudades_1 = require("../../Entities/Ciudades");
const Message_1 = require("../TypeDefs/Message");
const Ciudad_1 = require("../TypeDefs/Ciudad");
exports.CREATE_CIUDAD = {
    type: Ciudad_1.CiudadType,
    args: {
        ciudad: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ciudad } = args;
            const result = yield Ciudades_1.Ciudades.insert({
                ciudad
            });
            return Object.assign(Object.assign({}, args), { id: result.identifiers[0].id });
        });
    },
};
exports.DELETE_CIUDAD = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(_, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Ciudades_1.Ciudades.delete(id);
            if (result.affected === 0)
                return {
                    success: false,
                    message: "Error in Delete Ciudad",
                };
            return {
                success: true,
                message: "Delete Ciudad successfully",
            };
        });
    },
};
exports.UPDATE_CIUDAD = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        input: {
            type: new graphql_1.GraphQLInputObjectType({
                name: "CiudadInput",
                fields: () => ({
                    ciudad: { type: graphql_1.GraphQLString },
                }),
            }),
        },
    },
    resolve(_, { id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield Ciudades_1.Ciudades.update({ id }, { ciudad: input.ciudad,
            });
            if (response.affected === 0)
                return;
            return {
                success: true,
                message: "Update Ciudad successfully",
            };
        });
    },
};
