import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';
import FormWrapper from '@/app/common/FormWrapper';
import Button from '@/app/common/Button';
import Box from '@/app/common/Box';
import useMutationAuthClient from '@/app/hooks/Apollo/useMutationAuthClient';
import ADD_PROPERTY from '@/app/gql/mutations/properties';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import UPLOAD_FILES from '@/app/gql/mutations/uploadFile';
import { uploadClient } from '@/app/lib/apolloClient';
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
];

const PropertyForm = () => {
  const { handleSubmit, reset } = useFormContext();
  const { showError, showNotification } = useNotificationManager();
  const { data } = useSession();

  const { mutation: addProperty } = useMutationAuthClient(ADD_PROPERTY, {
    onError: () => {
      showError();
    },
    onCompleted: () => {
      reset();
      showNotification('Property successfully added to your list.', 'success');
    },
  });

  const [uploadFiles] = useMutation(UPLOAD_FILES, {
    client: uploadClient,
  });

  const handleAddProperty: SubmitHandler<FieldValues> = async (property) => {
    const {
      housingMethod,
      type,
      balcony,
      province,
      city,
      barangay,
      furnishing,
      images,
      ...newProperty
    } = property;
    await uploadFiles({
      variables: {
        files: images,
      },
      onError: () => {
        showError();
      },
      onCompleted: async () => {
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
      },
    });
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
