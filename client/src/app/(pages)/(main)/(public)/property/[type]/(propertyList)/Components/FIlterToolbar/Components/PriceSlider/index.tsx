'use client';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import TextField from '@/app/common/TextField';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';
import NumberField from '@/app/common/NumberField';
import Peso from '@/app/icons/Peso';

const sliderStype = {
  backgroundColor: 'black',
  border: 'none',
  colorScheme: 'dark',
  boxShadow: 'none',
};

const PriceSlider = () => {
  const [priceSliderValue, setPriceSliderValue] = useState([0, 1000000]);

  const handleSliderChange = (newValue: number[] | number) => {
    setPriceSliderValue(newValue as number[]);
  };
  return (
    <Box className="flex flex-col gap-5">
      <Box>
        <Text className="font-semibold">Price Range</Text>
      </Box>
      <Box className="px-2">
        <Slider
          range
          value={priceSliderValue}
          min={0}
          max={1000000}
          onChange={handleSliderChange}
          allowCross={false}
          trackStyle={[{ backgroundColor: '#121212' }]}
          handleStyle={[sliderStype, sliderStype]}
        />
      </Box>
      <Box className="flex gap-10">
        <Box>
          <NumberField
            outlined
            defaultValue={priceSliderValue[0]}
            label="Min"
            startIcon={<Peso className="w-5 h-5" />}
          />
        </Box>
        <Box>
          <NumberField
            outlined
            defaultValue={priceSliderValue[1]}
            label="Max"
            startIcon={<Peso className="w-5 h-5" />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PriceSlider;
