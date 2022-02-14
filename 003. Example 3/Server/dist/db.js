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
exports.connectDB = void 0;
const typeorm_1 = require("typeorm");
const Autores_1 = require("./Entities/Autores");
const Ciudades_1 = require("./Entities/Ciudades");
const Cubiertas_1 = require("./Entities/Cubiertas");
const Editoriales_1 = require("./Entities/Editoriales");
const Paises_1 = require("./Entities/Paises");
const Temas_1 = require("./Entities/Temas");
const Users_1 = require("./Entities/Users");
const Libros_1 = require("./Entities/Libros");
const config_1 = require("./config");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: 'mysql',
        username: config_1.DB_USERNAME,
        password: config_1.DB_PASSWORD,
        port: Number(config_1.DB_PORT),
        host: config_1.DB_HOST,
        database: config_1.DB_NAME,
        entities: [Users_1.Users, Autores_1.Autores, Ciudades_1.Ciudades, Cubiertas_1.Cubiertas, Editoriales_1.Editoriales, Paises_1.Paises, Temas_1.Temas, Libros_1.Libros],
        //true si existen los modelos.
        synchronize: true,
        //si tenemos https debe ir true
        ssl: false
    });
});
exports.connectDB = connectDB;
