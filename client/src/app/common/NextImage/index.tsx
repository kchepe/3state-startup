import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';

const NextImage: FC<Omit<ImageProps, 'width' | 'height' | 'sizes'>> = ({ ...imageProps }) => (
  <Image width="0" height="0" sizes="100vw" {...imageProps} />
);

export default NextImage;
