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
exports.GET_AUTOR = exports.GET_ALL_AUTOR = void 0;
const graphql_1 = require("graphql");
const Autores_1 = require("../../Entities/Autores");
const Autor_1 = require("../TypeDefs/Autor");
exports.GET_ALL_AUTOR = {
    type: new graphql_1.GraphQLList(Autor_1.AutorType),
    resolve() {
        return Autores_1.Autores.find();
    },
};
exports.GET_AUTOR = {
    type: Autor_1.AutorType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Autores_1.Autores.findOne(args.id);
            return result;
        });
    },
};
