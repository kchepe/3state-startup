import Box from '@/app/common/Box';
import InputForm from '@/app/common/FormBuilder/InputForm';
import TextareaForm from '@/app/common/FormBuilder/TextareaForm';

const TitleForm = () => (
  <Box className="flex flex-col gap-4">
    <InputForm name="title" placeholder="Enter Property Title" label="Title" contained />
    <TextareaForm
      contained
      name="description"
      label="Description"
      placeholder="Enter Description"
    />
  </Box>
);

export default TitleForm;
