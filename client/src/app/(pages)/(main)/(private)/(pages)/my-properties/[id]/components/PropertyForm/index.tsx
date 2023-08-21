import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import FormWrapper from '@/app/common/FormWrapper';
import Button from '@/app/common/Button';
import PropertyDetailsForm from './components/PropertyDetailsForm';
import UnitDetailsForm from './components/UnitDetailsForm';
import AmenitiesForm from './components/AmenitiesForm';
import TitleForm from './components/TitleForm';

const propertyForms = [
  { title: 'Property Details', form: <TitleForm /> },
  {
    title: 'Category',
    form: <PropertyDetailsForm />,
  },
  {
    title: 'Unit Details',
    form: <UnitDetailsForm />,
  },
  {
    title: 'Address',
    form: <PropertyDetailsForm />,
  },
  {
    title: 'Amenities',
    form: <AmenitiesForm />,
  },
  {
    title: 'Upload Photos',
    form: <PropertyDetailsForm />,
  },
];

const PropertyForm = () => {
  const { handleSubmit } = useFormContext();

  const handleAddProperty: SubmitHandler<FieldValues> = (property) => property;
  return (
    <div>
      {propertyForms.map((form) => (
        <FormWrapper title={form.title} key={`${form.title}`}>
          {form.form}
        </FormWrapper>
      ))}
      <div className="text-right mt-6">
        <Button color="primary" onClick={handleSubmit(handleAddProperty)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PropertyForm;