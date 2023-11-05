import Box from '@/app/common/Box';
import SelectForm from '@/app/common/FormBuilder/SelectForm';
import { propertyStatus, propertyTypeOptions } from '@/app/constant';

const PropertyDetailsForm = () => (
  <Box className="grid grid-cols-12 gap-4">
    <Box className="col-span-full lg:col-span-6">
      <SelectForm name="status" options={propertyStatus} label="Status" contained />
    </Box>
    <Box className="col-span-full lg:col-span-6">
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
