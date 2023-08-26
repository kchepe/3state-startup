import React, { useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import Box from '@/app/common/Box';
import Dropzone from '@/app/common/Dropzone';
import NextImage from '@/app/common/NextImage';
import Button from '@/app/common/Button';

interface ExtendedFile extends File {
  preview: string;
}

const UploadPhotosForm = () => {
  const [files, setFiles] = useState<ExtendedFile[]>([]);

  useEffect(() => () => files.forEach((file) => URL.revokeObjectURL(file.preview)), [files]);

  const handleUploadPhoto = (acceptedFiles: File[]) => {
    setFiles((prevState) => {
      const newAcceptedFile = acceptedFiles.map((file) => {
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        return newFile;
      });

      return [...prevState, ...newAcceptedFile];
    });
  };

  const handleRemovePhoto = (preview: string) => {
    setFiles((prevState) => prevState.filter((item) => item.preview !== preview));
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
        {files.map((file) => (
          <Box key={file.preview} className="relative">
            <Button
              size="normal"
              className="absolute -right-2 -top-3 bg-white rounded-xl"
              onClick={() => handleRemovePhoto(file.preview)}
            >
              <IoCloseCircle className="text-primary text-xl" />
            </Button>
            <NextImage
              src={file.preview}
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
