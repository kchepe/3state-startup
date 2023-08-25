import React from 'react';
import TextField from '../TextField';
import Button from '../Button';
import Box from '../Box';

const MortageCalculator = () => (
  <Box className="flex flex-col gap-3">
    <Box>
      <TextField outlined placeholder="Purchased Price" />
    </Box>
    <Box>
      <TextField outlined placeholder="Down Payment" />
    </Box>
    <Box>
      <TextField outlined placeholder="Mortage Term" />
    </Box>
    <Box>
      <TextField outlined placeholder="Interest Rate" />
    </Box>
    <Box>
      <TextField outlined placeholder="First Payment Date" />
    </Box>
    <Box>
      <Button color="primary" fullWidth>
        Calculate
      </Button>
    </Box>
  </Box>
);

export default MortageCalculator;
