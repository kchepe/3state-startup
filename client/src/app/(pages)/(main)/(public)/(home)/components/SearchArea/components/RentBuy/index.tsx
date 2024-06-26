import { FC } from 'react';
import Button from '@/app/common/Button';
import { housingMethods } from '@/app/constant';
import { IOfferType } from '@/app/types/types';
import Box from '@/app/common/Box';

interface RentBuyProps {
  handleChoose: (value: IOfferType) => void;
  rentBuyValue: IOfferType;
}

const RentBuy: FC<RentBuyProps> = ({ handleChoose, rentBuyValue }) => (
  <Box className="flex">
    {housingMethods.map((option) => (
      <Button
        size="small"
        className={`font-semibold ${
          rentBuyValue === option.toLocaleLowerCase() ? 'text-black' : 'text-gray-400'
        }`}
        key={option}
        onClick={() => handleChoose(option.toLocaleLowerCase() as IOfferType)}
      >
        {option}
      </Button>
    ))}
  </Box>
);

export default RentBuy;
