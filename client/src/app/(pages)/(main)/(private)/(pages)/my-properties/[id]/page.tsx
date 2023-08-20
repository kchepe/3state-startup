'use client';

import React from 'react';
import DashboardWrapper from '@/app/common/DashboardWrapper';
import Form from '@/app/common/FormBuilder/Form';
import PropertyForm from './components/PropertyForm';
import {
  addPropertyInitialValues,
  addPropertySchema,
} from './components/PropertyForm/propertyFormValues';

const AddProperty = () => (
  <DashboardWrapper title="Add Property">
    <Form initialValues={addPropertyInitialValues} schema={addPropertySchema}>
      <PropertyForm />
    </Form>
  </DashboardWrapper>
);

export default AddProperty;
