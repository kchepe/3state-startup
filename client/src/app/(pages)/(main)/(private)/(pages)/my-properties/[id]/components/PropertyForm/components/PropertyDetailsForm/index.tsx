import SelectForm from '@/app/common/FormBuilder/SelectForm';
import { propertyCategory, propertyTypeOptions } from '@/app/constant';

const PropertyDetailsForm = () => (
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-full">
      <SelectForm name="housingMethod" options={propertyCategory} label="Category" />
    </div>
    <div className="col-span-full">
      <SelectForm
        name="type"
        options={propertyTypeOptions.filter((option) => option.value !== 'any')}
        label="Property Type"
      />
    </div>
  </div>
);

export default PropertyDetailsForm;
