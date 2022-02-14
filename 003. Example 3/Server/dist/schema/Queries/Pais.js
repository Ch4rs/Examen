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
exports.GET_PAISES = exports.GET_ALL_PAISES = void 0;
const graphql_1 = require("graphql");
const Paises_1 = require("../../Entities/Paises");
const Ciudad_1 = require("../TypeDefs/Ciudad");
exports.GET_ALL_PAISES = {
    type: new graphql_1.GraphQLList(Ciudad_1.CiudadType),
    resolve() {
        return Paises_1.Paises.find();
    },
};
exports.GET_PAISES = {
    type: Ciudad_1.CiudadType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Paises_1.Paises.findOne(args.id);
            return result;
        });
    },
};
