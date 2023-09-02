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
exports.AmenitiesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const amenities_service_1 = require("./amenities.service");
const amenities_model_1 = require("./amenities.model");
let AmenitiesResolver = class AmenitiesResolver {
    constructor(amenitiesService) {
        this.amenitiesService = amenitiesService;
    }
    async amenities() {
        return this.amenitiesService.findAllAmenities();
    }
};
exports.AmenitiesResolver = AmenitiesResolver;
__decorate([
    (0, graphql_1.Query)(() => [amenities_model_1.AmenitiesResponseTypes]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AmenitiesResolver.prototype, "amenities", null);
exports.AmenitiesResolver = AmenitiesResolver = __decorate([
    (0, graphql_1.Resolver)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [amenities_service_1.AmenitiesService])
], AmenitiesResolver);
//# sourceMappingURL=amenities.resolver.js.map