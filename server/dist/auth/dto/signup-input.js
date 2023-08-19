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
exports.SignupResponse = exports.SignupInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let SignupInput = exports.SignupInput = class SignupInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupInput.prototype, "userType", void 0);
exports.SignupInput = SignupInput = __decorate([
    (0, graphql_1.InputType)()
], SignupInput);
let UserData = class UserData {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserData.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserData.prototype, "password", void 0);
UserData = __decorate([
    (0, graphql_1.ObjectType)()
], UserData);
let SignupResponse = exports.SignupResponse = class SignupResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], SignupResponse.prototype, "success", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SignupResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", UserData)
], SignupResponse.prototype, "data", void 0);
exports.SignupResponse = SignupResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SignupResponse);
//# sourceMappingURL=signup-input.js.map