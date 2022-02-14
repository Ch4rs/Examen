"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autores = void 0;
const typeorm_1 = require("typeorm");
const Ciudades_1 = require("./Ciudades");
const Paises_1 = require("./Paises");
let Autores = class Autores extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Autores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Autores.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Autores.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Ciudades_1.Ciudades),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Ciudades_1.Ciudades)
], Autores.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Paises_1.Paises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Paises_1.Paises)
], Autores.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Autores.prototype, "fechanacimiento", void 0);
Autores = __decorate([
    (0, typeorm_1.Entity)()
], Autores);
exports.Autores = Autores;
