import { IOfferType } from '@/app/types/types';
import { PropertyProvider, initialPropertyState } from '@/app/context/PropertyContext';
import MainProperty from './Components/MainProperty';

interface IOfferParams {
  params: {
    type: IOfferType;
  };
}

const Property = ({ params }: IOfferParams) => {
  const { type } = params;

  return (
    <div className="h-[93vh] py-4 -my-4">
      <PropertyProvider initialState={initialPropertyState}>
        <MainProperty offerType={type} />
      </PropertyProvider>
    </div>
  );
};

export default Property;
