import { TbCurrencyPeso } from 'react-icons/tb';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { BiPhone } from 'react-icons/bi';
import InputPrice from '@/app/common/FormBuilder/InputPrice';
import Button from '@/app/common/Button';
import InputPhone from '@/app/common/FormBuilder/InputPhone';

const AddPropertyForm = () => {
  const { handleSubmit } = useFormContext();

  const handleAddProperty: SubmitHandler<FieldValues> = (property) => property;

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-full">
        <InputPhone
          name="phone"
          startIcon={<BiPhone className="text-primary text-lg" />}
          label="Phone"
          placeholder="Enter Phone"
        />
      </div>
      <div className="col-span-full">
        <InputPrice
          name="price"
          startIcon={<TbCurrencyPeso className="text-primary text-lg" />}
          label="Price"
          placeholder="Enter Price"
        />
      </div>
      <div className="col-span-full">
        <Button color="primary" onClick={handleSubmit(handleAddProperty)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddPropertyForm;
