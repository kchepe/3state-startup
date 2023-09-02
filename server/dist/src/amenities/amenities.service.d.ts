import { PrismaService } from 'src/prisma/prisma.service';
export declare class AmenitiesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllAmenities(): Promise<Promise<{
        amenities: import(".prisma/client").Amenities[];
        id: string;
        categoryName: import(".prisma/client").AmenityCategoryEnum;
    }>[]>;
    private findAmenityCategories;
    private findAmenities;
}
