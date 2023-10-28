import React from 'react';
import { GET_PROPERTIES_BY_USER_ID } from '@/app/gql/queries/properties';
import { getApolloServer } from '@/app/lib/apolloServer';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import { IProperty } from '@/app/types/types';
import NextImage from '@/app/common/NextImage';
import getSessionUtil from '@/app/utils/getSession.util';

const MyPropertyCards = async () => {
  const session = await getSessionUtil();
  const { data } = await getApolloServer().query({
    query: GET_PROPERTIES_BY_USER_ID,
    variables: { userId: session?.user.id },
  });

  if (!data.getPropertiesByUserId.length) {
    return (
      <Box className="text-center">
        <Text>No properties available.</Text>
      </Box>
    );
  }

  return (
    <Box className="grid grid-cols-card-list gap-4">
      {data.getPropertiesByUserId.map((property: IProperty) => (
        <Box
          className="max-w-xl rounded-2xl col-span-1
            flex flex-col gap-2 border hover:shadow-glow"
        >
          <NextImage
            src={property.images[0]}
            alt="fuck"
            className="rounded-t-2xl h-60 object-cover"
          />
          <Box className="flex flex-col gap-2 px-3 pb-3">
            <Box className="w-full max-h-[3.5rem] line-clamp-2 mt-1">
              <Text className="font-semibold text-lg">{property.title}</Text>
            </Box>
            <Text>
              {property.address}, {property.barangay}, {property.city}, {property.province}
            </Text>
            <Text className="font-bold">{property.price}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MyPropertyCards;
