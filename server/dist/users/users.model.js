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
exports.UserTypes = exports.AllowedUserType = void 0;
const graphql_1 = require("@nestjs/graphql");
var AllowedUserType;
(function (AllowedUserType) {
    AllowedUserType[AllowedUserType["broker"] = 0] = "broker";
    AllowedUserType[AllowedUserType["owner"] = 1] = "owner";
    AllowedUserType[AllowedUserType["agent"] = 2] = "agent";
    AllowedUserType[AllowedUserType["developer"] = 3] = "developer";
    AllowedUserType[AllowedUserType["brokerage"] = 4] = "brokerage";
})(AllowedUserType || (exports.AllowedUserType = AllowedUserType = {}));
(0, graphql_1.registerEnumType)(AllowedUserType, {
    name: 'AllowedUserType',
});
let UserTypes = exports.UserTypes = class UserTypes {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UserTypes.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserTypes.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => AllowedUserType),
    __metadata("design:type", String)
], UserTypes.prototype, "userType", void 0);
exports.UserTypes = UserTypes = __decorate([
    (0, graphql_1.ObjectType)()
], UserTypes);
//# sourceMappingURL=users.model.js.map