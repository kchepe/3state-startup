import ImageSlider from '@/app/common/ImageSlider';
import AgentsInformationWrapper from '@/app/common/AgentsInformationWrapper';
import Box from '@/app/common/Box';
import { getApolloServer } from '@/app/lib/apolloServer';
import { GET_PROPERTY_BY_ID } from '@/app/gql/queries/properties';
import PropertyDetails from './Components/PropertyDetails';
import TabMenu from './Components/TabMenu';

interface PropertyInformationProps {
  params: {
    id: string;
  };
}

const PropertyInformation = async ({ params }: PropertyInformationProps) => {
  const { id } = params;
  const { data } = await getApolloServer().query({
    query: GET_PROPERTY_BY_ID,
    variables: { propertyId: id },
  });

  if (!data.getPropertyById) {
    return <Box className="text-center p-4">No Available Property.</Box>;
  }

  const { user, ...property } = data.getPropertyById;

  return (
    <AgentsInformationWrapper user={user}>
      <Box className="flex flex-col gap-3">
        <ImageSlider images={property.images} />
        <PropertyDetails property={property} />
        <TabMenu property={property} />
      </Box>
    </AgentsInformationWrapper>
  );
};

export default PropertyInformation;
