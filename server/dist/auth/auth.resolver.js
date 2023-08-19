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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const login_response_1 = require("./dto/login.response");
const login_input_1 = require("./dto/login.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("./guards/gql-auth.guard");
const signup_input_1 = require("./dto/signup-input");
let AuthResolver = exports.AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    login(_, context) {
        return this.authService.login(context.user);
    }
    signup(newUser) {
        return this.authService.signup(newUser);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => login_response_1.LoginResponse),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('loginUserInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginUserInput, Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => signup_input_1.SignupResponse),
    __param(0, (0, graphql_1.Args)('newUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_input_1.SignupInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signup", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map