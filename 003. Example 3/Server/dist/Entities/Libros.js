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
exports.Libros = void 0;
const typeorm_1 = require("typeorm");
const Autores_1 = require("./Autores");
const Cubiertas_1 = require("./Cubiertas");
const Editoriales_1 = require("./Editoriales");
const Temas_1 = require("./Temas");
let Libros = class Libros extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Libros.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libros.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libros.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Autores_1.Autores),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Autores_1.Autores)
], Libros.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Editoriales_1.Editoriales),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Editoriales_1.Editoriales)
], Libros.prototype, "editorial", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Libros.prototype, "fechaedicion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Temas_1.Temas),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Temas_1.Temas)
], Libros.prototype, "tema", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libros.prototype, "edicion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Cubiertas_1.Cubiertas),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Cubiertas_1.Cubiertas)
], Libros.prototype, "cubierta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libros.prototype, "paginas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libros.prototype, "ejemplares", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libros.prototype, "estanteria", void 0);
Libros = __decorate([
    (0, typeorm_1.Entity)()
], Libros);
exports.Libros = Libros;
