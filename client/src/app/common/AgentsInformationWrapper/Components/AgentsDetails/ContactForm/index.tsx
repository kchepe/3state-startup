import * as yup from 'yup';
import React from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Form from '@/app/common/FormBuilder/Form';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';

const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  phoneNumber: yup.string().required('Phone number is required'),
});

const initialValues = {
  firstname: '',
  lastname: '',
  phoneNumber: '',
};

const ContactForm = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => data;
  return (
    <Form initialValues={initialValues} schema={schema} onSubmit={handleSubmit} resetFields>
      <div className="flex flex-col gap-3">
        <div>
          <InputForm name="firstname" placeholder="Enter your firstname" />
        </div>
        <div>
          <InputForm name="lastname" placeholder="Enter your Lastname" />
        </div>
        <div>
          <InputForm name="phoneNumber" placeholder="Enter your Phone number" />
        </div>
        <div className="w-full">
          <Button color="primary" fullWidth type="submit" size="large">
            Contact Agent
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
