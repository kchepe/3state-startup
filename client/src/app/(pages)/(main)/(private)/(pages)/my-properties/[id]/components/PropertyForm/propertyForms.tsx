import AddressForm from './components/AddressForm';
import AmenitiesForm from './components/AmenitiesForm';
import MapLocationForm from './components/MapLocationForm';
import PropertyDetailsForm from './components/PropertyDetailsForm';
import TitleForm from './components/TitleForm';
import UnitDetailsForm from './components/UnitDetailsForm';
import UploadPhotosForm from './components/UploadPhotosForm';

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

export default propertyForms;
