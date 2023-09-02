import { AmenitiesService } from './amenities.service';
export declare class AmenitiesResolver {
    private readonly amenitiesService;
    constructor(amenitiesService: AmenitiesService);
    amenities(): Promise<Promise<{
        amenities: import(".prisma/client").Amenities[];
        id: string;
        categoryName: import(".prisma/client").AmenityCategoryEnum;
    }>[]>;
}
