import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import FormWrapper from '@/app/common/FormWrapper';
import Button from '@/app/common/Button';
import Box from '@/app/common/Box';
import useMutationAuthClient from '@/app/hooks/Apollo/useMutationAuthClient';
import ADD_PROPERTY from '@/app/gql/mutations/properties';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import PropertyDetailsForm from './components/PropertyDetailsForm';
import UnitDetailsForm from './components/UnitDetailsForm';
import AmenitiesForm from './components/AmenitiesForm';
import TitleForm from './components/TitleForm';
import UploadPhotosForm from './components/UploadPhotosForm';
import MapLocationForm from './components/MapLocationForm';
import AddressForm from './components/AddressForm';

const propertyForms = [
  { title: 'Property Title', form: <TitleForm /> },
  {
    title: 'Property Details',
    form: <PropertyDetailsForm />,
  },
  {
    title: 'Unit Details',
    form: <UnitDetailsForm />,
  },
  {
    title: 'Map Location',
    form: <MapLocationForm />,
  },
  {
    title: 'Address',
    form: <AddressForm />,
  },
  {
    title: 'Amenities',
    form: <AmenitiesForm />,
  },
  {
    title: 'Upload Property Photos',
    form: <UploadPhotosForm />,
  },
  {
    title: 'Upload Floor Plan',
    form: <UploadPhotosForm />,
  },
];

const PropertyForm = () => {
  const { handleSubmit, reset } = useFormContext();
  const { showError, showNotification } = useNotificationManager();
  const { data } = useSession();

  const { mutation: addProperty } = useMutationAuthClient(ADD_PROPERTY, {
    onError: () => {
      showError();
    },
  });

  const handleAddProperty: SubmitHandler<FieldValues> = async (property) => {
    const { housingMethod, type, balcony, province, city, barangay, furnishing, ...newProperty } =
      property;
    await addProperty({
      variables: {
        newProperty: {
          housingMethod: housingMethod.value,
          type: type.value,
          balcony: balcony.value === 'yes',
          furnishing: furnishing.value,
          province: province.label,
          city: city.label,
          barangay: barangay.label,
          userId: data?.user.user.id,
          ...newProperty,
        },
      },
    });
    reset();
    showNotification('Property successfully added to your list.', 'success');
  };
  return (
    <Box>
      {propertyForms.map((form) => (
        <FormWrapper title={form.title} key={`${form.title}`}>
          {form.form}
        </FormWrapper>
      ))}
      <Box className="text-right mt-6">
        <Button color="primary" onClick={handleSubmit(handleAddProperty)}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyForm;
