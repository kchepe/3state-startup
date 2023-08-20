'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import clsx from 'clsx';
import ImageSlides from './Components/ImageSlides';

interface ImageSliderProps {
  images: string[];
  size?: 'small' | 'large';
}

const ImageSlider: FC<ImageSliderProps> = ({ images, size = 'large' }) => {
  const [showImageSlider, setShowImageSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image,
  }));

  const handleShowImageSlider = (index: number) => {
    setShowImageSlider(true);
    setCurrentIndex(index);
  };

  const imageHeight = {
    small: 'lg:first:h-[300px] first:h-[100px]',
    large: 'lg:first:h-[700px] first:h-[300px]',
  };

  return (
    <div className="grid grid-cols-10 gap-3">
      {images.map((image, index) => (
        <div
          aria-hidden
          onClick={() => handleShowImageSlider(index)}
          className={clsx(
            imageHeight[size],
            'first:col-span-full lg:col-span-1 col-span-2 relative',
            index > 5 ? 'hidden' : 'block',
          )}
          key={`${image}${index.toString()}`}
        >
          {index === 5 && (
            <div
              className="w-full h-full flex justify-center cursor-pointer
                  items-center backdrop-brightness-50 absolute rounded-xl text-white"
            >
              <span className="text-lg font-bold">+{images.length - 5}</span>
            </div>
          )}
          {index <= 5 && (
            <Image
              alt="3state_property"
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              className={clsx('w-full h-full rounded-xl cursor-pointer hover:shadow-glow', {
                'object-scale-down': size === 'small',
                'object-cover': size === 'large',
              })}
            />
          )}
        </div>
      ))}
      <Lightbox
        index={currentIndex}
        open={showImageSlider}
        close={() => setShowImageSlider(false)}
        slides={slides}
        render={{ slide: ImageSlides }}
      />
    </div>
  );
};

export default ImageSlider;
