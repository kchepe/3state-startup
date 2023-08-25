import * as yup from 'yup';
import React from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Form from '@/app/common/FormBuilder/Form';
import Button from '@/app/common/Button';
import InputForm from '@/app/common/FormBuilder/InputForm';
import InputPhone from '@/app/common/FormBuilder/InputPhone';
import Box from '@/app/common/Box';

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
      <Box className="flex flex-col gap-3">
        <Box>
          <InputForm name="firstname" placeholder="Enter your firstname" />
        </Box>
        <Box>
          <InputForm name="lastname" placeholder="Enter your Lastname" />
        </Box>
        <Box>
          <InputPhone name="phoneNumber" placeholder="Enter your Phone number" />
        </Box>
        <Box className="w-full">
          <Button color="primary" fullWidth type="submit" size="large">
            Contact Agent
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default ContactForm;
