'use client';

import React from 'react';
import DashboardWrapper from '@/app/common/DashboardWrapper';
import Form from '@/app/common/FormBuilder/Form';
import AddPropertyForm from './components/AddPropertyForm';
import {
  addPropertyInitialValues,
  addPropertySchema,
} from './components/AddPropertyForm/addPropertyFormValues';

const AddProperty = () => (
  <DashboardWrapper title="Add Property">
    <Form initialValues={addPropertyInitialValues} schema={addPropertySchema}>
      <AddPropertyForm />
    </Form>
  </DashboardWrapper>
);

export default AddProperty;
