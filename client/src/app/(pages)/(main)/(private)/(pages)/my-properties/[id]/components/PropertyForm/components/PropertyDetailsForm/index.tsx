import { TbCurrencyPeso } from 'react-icons/tb';
import { BiPhone } from 'react-icons/bi';
import InputPrice from '@/app/common/FormBuilder/InputPrice';
import InputPhone from '@/app/common/FormBuilder/InputPhone';

const PropertyDetailsForm = () => (
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
  </div>
);

export default PropertyDetailsForm;
