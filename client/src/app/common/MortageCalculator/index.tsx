import React from 'react';
import TextField from '../TextField';
import Button from '../Button';

const MortageCalculator = () => (
  <div className="flex flex-col gap-3">
    <div>
      <TextField outlined placeholder="Purchased Price" />
    </div>
    <div>
      <TextField outlined placeholder="Down Payment" />
    </div>
    <div>
      <TextField outlined placeholder="Mortage Term" />
    </div>
    <div>
      <TextField outlined placeholder="Interest Rate" />
    </div>
    <div>
      <TextField outlined placeholder="First Payment Date" />
    </div>
    <div>
      <Button color="primary" fullWidth>
        Calculate
      </Button>
    </div>
  </div>
);

export default MortageCalculator;
