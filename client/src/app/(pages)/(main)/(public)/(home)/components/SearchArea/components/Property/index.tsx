import { FC } from 'react';
import Select, { IOption } from '@/app/common/Select';
import TextField from '@/app/common/TextField';
import { propertyTypeOptions } from '@/app/constant';

interface PropertyProps {
  selectedProperty: IOption;
  handleChangeSelectProperty: (value: IOption) => void;
}

const Property: FC<PropertyProps> = ({ selectedProperty, handleChangeSelectProperty }) => (
  <div className="flex items-center gap-3">
    <div className="w-44">
      <Select
        options={propertyTypeOptions}
        value={selectedProperty}
        onChange={handleChangeSelectProperty}
        className="bg-gray-100"
      />
    </div>
    <div>
      <span className="text-primary">in</span>
    </div>
    <div className="flex-1">
      <TextField placeholder="Search Location..." className="bg-gray-100" />
    </div>
  </div>
);

export default Property;
