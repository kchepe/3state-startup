import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

const NextImage: FC<Omit<ImageProps, 'width' | 'height' | 'sizes'>> = ({ ...imageProps }) => {
  const { className, ...rest } = imageProps;
  return (
    <Image width="0" height="0" sizes="100vw" className={clsx('w-full', className)} {...rest} />
  );
};

export default NextImage;
