'use client';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { TbCurrencyPeso } from 'react-icons/tb';
import TextField from '@/app/common/TextField';
import Box from '@/app/common/Box';
import Text from '@/app/common/Text';

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
      <Box className="flex gap-14">
        <Box>
          <TextField
            outlined
            defaultValue={priceSliderValue[0].toLocaleString('en-US')}
            label="Min"
            startIcon={<TbCurrencyPeso />}
          />
        </Box>
        <Box>
          <TextField
            outlined
            defaultValue={priceSliderValue[1].toLocaleString('en-US')}
            label="Max"
            startIcon={<TbCurrencyPeso />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PriceSlider;
