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
exports.GET_CUBIERTAS = exports.GET_ALL_CUBIERTAS = void 0;
const graphql_1 = require("graphql");
const Cubiertas_1 = require("../../Entities/Cubiertas");
const Cubierta_1 = require("../TypeDefs/Cubierta");
exports.GET_ALL_CUBIERTAS = {
    type: new graphql_1.GraphQLList(Cubierta_1.CubiertaType),
    resolve() {
        return Cubiertas_1.Cubiertas.find();
    },
};
exports.GET_CUBIERTAS = {
    type: Cubierta_1.CubiertaType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Cubiertas_1.Cubiertas.findOne(args.id);
            return result;
        });
    },
};
