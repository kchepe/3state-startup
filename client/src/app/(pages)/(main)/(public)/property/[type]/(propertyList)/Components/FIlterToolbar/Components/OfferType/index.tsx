'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/common/Button';
import { IOfferType } from '@/app/types/types';
import Box from '@/app/common/Box';

interface OfferTypeProps {
  offerType: IOfferType;
}

const OfferType: FC<OfferTypeProps> = ({ offerType }) => {
  const { push } = useRouter();
  const offerMenu = ['Buy', 'Rent'];

  const handleChangeOffer = (type: IOfferType) => {
    push(`/property/${type}`);
  };

  return (
    <Box className="inline-flex gap-3 border rounded">
      {offerMenu.map((offer) => (
        <Button
          key={offer}
          color={offer.toLowerCase() === offerType ? 'primary' : 'transparent'}
          onClick={() => handleChangeOffer(offer.toLowerCase() as IOfferType)}
        >
          {offer}
        </Button>
      ))}
    </Box>
  );
};

export default OfferType;
