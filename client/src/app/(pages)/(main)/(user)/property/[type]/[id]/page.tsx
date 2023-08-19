import ImageSlider from '@/app/Common/ImageSlider';
import AgentsInformationWrapper from '@/app/Common/AgentsInformationWrapper';
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
    return <div className="text-center p-4">No Property Available.</div>;
  }

  return (
    <AgentsInformationWrapper>
      <div className="flex flex-col gap-3">
        <ImageSlider images={property.imageUrl} />
        <PropertyDetails property={property} />
        <TabMenu property={property} />
      </div>
    </AgentsInformationWrapper>
  );
};

export default PropertyInformation;
