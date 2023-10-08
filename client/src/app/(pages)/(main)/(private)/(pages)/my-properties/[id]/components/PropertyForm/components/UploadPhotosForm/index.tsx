'use client';

import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Box from '@/app/common/Box';
import Dropzone from '@/app/common/Dropzone';
import NextImage from '@/app/common/NextImage';
import Button from '@/app/common/Button';
import CloseCircleFill from '@/app/icons/CloseCircleFill';

interface ExtendedFile extends File {
  preview: string;
}

const UploadPhotosForm = () => {
  const { setValue } = useFormContext();
  const propertyImages = useWatch({ name: 'images' });

  useEffect(
    () => () => propertyImages.forEach((image: ExtendedFile) => URL.revokeObjectURL(image.preview)),
    [propertyImages],
  );

  const handleUploadPhoto = async (acceptedFiles: File[]) => {
    const newAcceptedFile = acceptedFiles.map((file) => {
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      return newFile;
    });
    setValue('images', [...propertyImages, ...newAcceptedFile]);
  };

  const handleRemovePhoto = (preview: string) => {
    setValue(
      'images',
      propertyImages.filter((image: ExtendedFile) => image.preview !== preview),
    );
  };

  return (
    <Box>
      <Dropzone
        onDrop={handleUploadPhoto}
        maxFiles={10}
        acceptedFiles={{
          'image/*': [],
        }}
      >
        {propertyImages.map((image: ExtendedFile) => (
          <Box key={image.preview} className="relative">
            <Button
              size="normal"
              className="absolute -right-1 -top-2 bg-white rounded-xl"
              onClick={() => handleRemovePhoto(image.preview)}
            >
              <CloseCircleFill className="text-primary" />
            </Button>
            <NextImage
              src={image.preview}
              alt="3state-thumbnail"
              className="w-48 h-28 object-cover"
            />
          </Box>
        ))}
      </Dropzone>
    </Box>
  );
};

export default UploadPhotosForm;
