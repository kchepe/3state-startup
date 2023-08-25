import ImageSlider from '@/app/common/ImageSlider';
import AgentsInformationWrapper from '@/app/common/AgentsInformationWrapper';
import Box from '@/app/common/Box';
import { properties } from '../(propertyList)/Components/PropertyList/mockData';
import PropertyDetails from './Components/PropertyDetails';
import TabMenu from './Components/TabMenu';

interface PropertyInformationProps {
  params: {
    id: string;
  };
}

const PropertyInformation = ({ params }: PropertyInformationProps) => {
  const { id } = params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    return <Box className="text-center p-4">No Property Available.</Box>;
  }

  return (
    <AgentsInformationWrapper>
      <Box className="flex flex-col gap-3">
        <ImageSlider images={property.imageUrl} />
        <PropertyDetails property={property} />
        <TabMenu property={property} />
      </Box>
    </AgentsInformationWrapper>
  );
};

export default PropertyInformation;
