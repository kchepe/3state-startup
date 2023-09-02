import { AmenityCategoryEnum, PrismaClient } from '@prisma/client';

const amenities: {
  category: AmenityCategoryEnum;
  amenities: string[];
}[] = [
  {
    category: 'outdoor',
    amenities: [
      'Alfresco Areas',
      'Aqua Deck',
      'Activity Lawn',
      'Basketball Court',
      'Beach',
      'Beach Front',
      'Bike Trails',
      'Breathtaking Views',
      'Camping Site',
      'Canyoneering',
      'Cistern and Overhead Water Tank',
      'Clubhouse',
      'Commercial Strips',
      'Community Assembly Area',
      'Concrete Roads',
      'Creek',
      'Deck by the Sea',
      'Deep Well and Water Tank',
      'Dirty Kitchen',
      'Drainage System',
      'Drop-off Area',
      'Dry Sports Facility',
      'Electrical and Water Distribution System',
      'Entrance with Guard House',
      'Fully Landscaped',
      'Garden',
      'Gazebo',
      'Golf Range',
      'Great Lawn',
      'Grill and Smoker',
      'Helipad',
      'Infinity Pool',
      'Jogging Path',
      'Kids Pool',
      'Lagoon',
      'Landscaped Entrance Gate',
      'Landscaped Gardens',
      'Landscaped Selected Areas',
      'Lap Pool',
      'Open Courtyard',
      'Parking Areas',
      'Parks',
      'Play Area',
      'Roof Deck',
      'Swimming Pool',
      'Tennis Court',
      'Terrace',
    ],
  },
  {
    category: 'indoor',
    amenities: [
      'Back-up power generator',
      'Amenity Lounge',
      '24-hour Emergency Clinic',
      'Administration Office Building',
      'Bar',
      'Billiard Room',
      'Business Center',
      'Cabana',
      'Chapel',
      'Clean and Dirty Kitchen',
      'Commercial Spaces',
      'Commercial/Retail Areas',
      'Conference Room',
      'Daycare Center',
      'Dining Area',
      'Elevators',
      'Entertainment Room',
      'Family Room',
      'Fitness Gym',
      'Function Hall',
      'Game Room',
      'Grand Lobby',
      'Gym',
      'Hallway',
      'Laundry Area',
      'Living Area',
      'Lobby/Reception Area',
      'Lounge Area',
      "Maid's Room",
      'Meditation Area',
      'Multi-Purpose Area',
      'Powder Room',
      'Property Management Services',
      'Provision for Telephone and Cable TV',
      'Sauna/Jacuzzi',
      'Spa',
    ],
  },
  {
    category: 'security',
    amenities: [
      '24/7 Security',
      'Alarm System',
      'CCTV Monitoring',
      'Fenced and Gated',
      'Fire Detection alarm System',
      'Fully Fenced',
      'Gated Community',
      'Guard House',
      'Perimter Fence',
    ],
  },
];

const prisma = new PrismaClient();

async function main() {
  const newAmenitiesData = [];
  for (const amenity of amenities) {
    const response = await prisma.amenityCategories.findFirst({
      where: {
        categoryName: amenity.category,
      },
    });

    for (const val of amenity.amenities) {
      newAmenitiesData.push({
        categoryId: response.id,
        name: val,
      });
    }
  }

  for (const newAmenity of newAmenitiesData) {
    await prisma.amenities.create({
      data: newAmenity,
    });
  }
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
