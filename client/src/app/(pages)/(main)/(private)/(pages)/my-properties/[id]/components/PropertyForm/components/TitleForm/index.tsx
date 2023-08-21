import InputForm from '@/app/common/FormBuilder/InputForm';
import TextareaForm from '@/app/common/FormBuilder/TextareaForm';

const TitleForm = () => (
  <div className="flex flex-col gap-4">
    <InputForm name="title" placeholder="Enter Property Title" label="Title" contained />
    <TextareaForm
      contained
      name="description"
      label="Description"
      placeholder="Enter Description"
    />
  </div>
);

export default TitleForm;
