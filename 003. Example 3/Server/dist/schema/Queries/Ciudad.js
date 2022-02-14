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
exports.GET_CIUDADES = exports.GET_ALL_CIUDADES = void 0;
const graphql_1 = require("graphql");
const Ciudades_1 = require("../../Entities/Ciudades");
const Ciudad_1 = require("../TypeDefs/Ciudad");
exports.GET_ALL_CIUDADES = {
    type: new graphql_1.GraphQLList(Ciudad_1.CiudadType),
    resolve() {
        return Ciudades_1.Ciudades.find();
    },
};
exports.GET_CIUDADES = {
    type: Ciudad_1.CiudadType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Ciudades_1.Ciudades.findOne(args.id);
            return result;
        });
    },
};
