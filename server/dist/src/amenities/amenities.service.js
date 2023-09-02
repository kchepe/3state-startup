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
exports.AmenitiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AmenitiesService = class AmenitiesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllAmenities() {
        const amentiesCategories = await this.findAmenityCategories();
        return amentiesCategories.map(async (category) => {
            const amenities = await this.findAmenities(category.id);
            return Object.assign(Object.assign({}, category), { amenities });
        });
    }
    async findAmenityCategories() {
        const response = await this.prisma.amenityCategories.findMany();
        return response;
    }
    async findAmenities(categoryId) {
        const response = this.prisma.amenities.findMany({
            where: {
                categoryId,
            },
        });
        return response;
    }
};
exports.AmenitiesService = AmenitiesService;
exports.AmenitiesService = AmenitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AmenitiesService);
//# sourceMappingURL=amenities.service.js.map