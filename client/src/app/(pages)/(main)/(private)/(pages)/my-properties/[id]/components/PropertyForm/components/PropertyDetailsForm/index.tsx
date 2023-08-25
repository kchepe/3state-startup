import Box from '@/app/common/Box';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import { propertyCategory, propertyTypeOptions } from '@/app/constant';

const PropertyDetailsForm = () => (
  <Box className="grid grid-cols-12 gap-4">
    <Box className="col-span-full">
      <SelectForm name="housingMethod" options={propertyCategory} label="Category" contained />
    </Box>
    <Box className="col-span-full">
      <SelectForm
        name="type"
        options={propertyTypeOptions.filter((option) => option.value !== 'any')}
        label="Property Type"
        contained
      />
    </Box>
  </Box>
);

export default PropertyDetailsForm;
