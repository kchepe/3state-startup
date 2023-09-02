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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const password_utils_1 = require("../utils/password.utils");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(newUser) {
        const user = await this.findUserByEmail(newUser.email);
        if (user) {
            return {
                success: false,
                message: 'Email address already exist',
                data: null,
            };
        }
        else {
            const newUserCopy = Object.assign({}, newUser);
            newUserCopy.password = await (0, password_utils_1.hashPassword)(newUser.password);
            const { id, email, password } = await this.prisma.users.create({
                data: newUserCopy,
            });
            return {
                success: true,
                message: 'User successfully added!',
                data: { id, email, password },
            };
        }
    }
    async removeUser(id) {
        const response = await this.prisma.users.delete({ where: { id } });
        return response;
    }
    async findAll() {
        const response = await this.prisma.users.findMany();
        return response;
    }
    async findUserByEmail(email) {
        const response = await this.prisma.users.findUnique({
            where: { email },
        });
        return response;
    }
    async findUserById(id) {
        const response = await this.prisma.users.findFirst({
            where: { id },
        });
        return response;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map