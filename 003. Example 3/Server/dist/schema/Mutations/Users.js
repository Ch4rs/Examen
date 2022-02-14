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
exports.UPDATE_USER = exports.DELETE_USER = exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const Users_1 = require("../../Entities/Users");
const User_1 = require("../TypeDefs/User");
const bcrypt_1 = require("../../libs/bcrypt");
const Message_1 = require("../TypeDefs/Message");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password } = args;
            const encryptPassword = yield (0, bcrypt_1.hashPassword)(password);
            const result = yield Users_1.Users.insert({
                name,
                username,
                password: encryptPassword,
            });
            return Object.assign(Object.assign({}, args), { id: result.identifiers[0].id, password: encryptPassword });
        });
    },
};
exports.DELETE_USER = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID }
    },
    resolve(_, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Users_1.Users.delete(id);
            if (result.affected === 0)
                return {
                    success: false,
                    message: "Error in Delete User",
                };
            return {
                success: true,
                message: "Deleter User successfully",
            };
        });
    },
};
exports.UPDATE_USER = {
    type: Message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        input: {
            type: new graphql_1.GraphQLInputObjectType({
                name: "UserInput",
                fields: () => ({
                    name: { type: graphql_1.GraphQLString },
                    username: { type: graphql_1.GraphQLString },
                    oldPassword: { type: graphql_1.GraphQLString },
                    newPassword: { type: graphql_1.GraphQLString },
                }),
            }),
        },
    },
    resolve(_, { id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield Users_1.Users.findOne(id);
            const isMatch = yield (0, bcrypt_1.comparePassword)(userFound === null || userFound === void 0 ? void 0 : userFound.password, input.oldPassword);
            if (!isMatch)
                throw new Error("Passwords does not match");
            const newPassword = yield (0, bcrypt_1.hashPassword)(input.newPassword);
            const response = yield Users_1.Users.update({ id }, { username: input.username, name: input.username, password: newPassword });
            if (response.affected === 0)
                return;
            return {
                success: true,
                message: "Update User successfully",
            };
        });
    },
};
