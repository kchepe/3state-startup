import { TbCurrencyPeso } from 'react-icons/tb';
import InputPrice from '@/app/common/FormBuilder/InputPrice';
import SelectForm from '@/app/common/FormBuilder/SelectForm';

const PropertyDetailsForm = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-full">
      <SelectForm
        name="housingMethod"
        options={[
          { label: 'Sale', value: 'sale' },
          { label: 'Rent', value: 'rent' },
        ]}
        label="Offer"
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
  </div>
);

export default PropertyDetailsForm;
