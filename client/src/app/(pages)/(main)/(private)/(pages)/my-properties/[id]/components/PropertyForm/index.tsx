import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import FormWrapper from '@/app/common/FormWrapper';
import Button from '@/app/common/Button';
import Box from '@/app/common/Box';
import useMutationAuthClient from '@/app/hooks/Apollo/useMutationAuthClient';
import ADD_PROPERTY from '@/app/gql/mutations/properties';
import useNotificationManager from '@/app/hooks/useNotificationManager';
import UPLOAD_FILES from '@/app/gql/mutations/uploadFile';
import { uploadClient } from '@/app/lib/apolloClient';
import scrollToTop from '@/app/utils/scrollToTop.util';
import propertyForms from './propertyForms';

const PropertyForm = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext();
  const { showError, showNotification } = useNotificationManager();
  const { data } = useSession();

  const { mutation: addProperty, loading: addPropertyLoading } = useMutationAuthClient(
    ADD_PROPERTY,
    {
      onError: () => {
        showError();
      },
      onCompleted: () => {
        reset();
        showNotification('Property successfully added to your list.', 'success');
      },
    },
  );

  useEffect(() => {
    if (Object.keys(errors).length) {
      scrollToTop();
      showNotification('Please fill up the required fields', 'error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const [uploadFiles, { loading: uploadFileLoading }] = useMutation(UPLOAD_FILES, {
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
        scrollToTop();
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
        <Button
          color="primary"
          onClick={handleSubmit(handleAddProperty)}
          loading={addPropertyLoading || uploadFileLoading}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyForm;
