import React from 'react';
import { GET_PROPERTIES_BY_USER_ID } from '@/app/gql/queries/properties';
import { getApolloServer } from '@/app/lib/apolloServer';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import { IProperty } from '@/app/types/types';
import getSessionUtil from '@/app/utils/getSession.util';
import PropertyCard from '@/app/common/PropertyCard';

const MyPropertyCards = async () => {
  const session = await getSessionUtil();
  const { data } = await getApolloServer().query({
    query: GET_PROPERTIES_BY_USER_ID,
    variables: { userId: session?.user.id },
  });

  if (!data.getPropertiesByUserId.properties.length) {
    return (
      <Box className="text-center">
        <Text>No properties available.</Text>
      </Box>
    );
  }

  return (
    <Box className="grid grid-cols-card-list gap-4">
      {data.getPropertiesByUserId.properties.map((property: IProperty) => (
        <PropertyCard property={property} />
      ))}
    </Box>
  );
};

export default MyPropertyCards;
