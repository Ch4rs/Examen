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
exports.UPDATE_CUBIERTA = exports.DELETE_CUBIERTA = exports.CREATE_CUBIERTA = void 0;
const graphql_1 = require("graphql");
const Message_1 = require("../TypeDefs/Message");
const Cubierta_1 = require("../TypeDefs/Cubierta");
const Cubiertas_1 = require("../../Entities/Cubiertas");
exports.CREATE_CUBIERTA = {
    type: Cubierta_1.CubiertaType,
    args: {
        cubierta: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cubierta } = args;
            const result = yield Cubiertas_1.Cubiertas.insert({
                cubierta
            });
            return Object.assign(Object.assign({}, args), { id: result.identifiers[0].id });
        });
    },
};
exports.DELETE_CUBIERTA = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(_, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cubiertas_1.Cubiertas.delete(id);
            if (result.affected === 0)
                return {
                    success: false,
                    message: "Error in Delete Cubierta",
                };
            return {
                success: true,
                message: "Delete Cubierta successfully",
            };
        });
    },
};
exports.UPDATE_CUBIERTA = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        input: {
            type: new graphql_1.GraphQLInputObjectType({
                name: "CubiertaInput",
                fields: () => ({
                    cubierta: { type: graphql_1.GraphQLString },
                }),
            }),
        },
    },
    resolve(_, { id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield Cubiertas_1.Cubiertas.update({ id }, { cubierta: input.cubierta,
            });
            if (response.affected === 0)
                return;
            return {
                success: true,
                message: "Update Cubierta successfully",
            };
        });
    },
};
