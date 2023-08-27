import React, { FC, ReactNode, useMemo } from 'react';
import { useDropzone, FileRejection, DropEvent, Accept } from 'react-dropzone';
import CloudArrowUp from '@/app/icons/CloudArrowUp';
import { baseStyle, focusedStyle, acceptStyle, rejectStyle } from './dropzone.style';
import Box from '../Box';
import Text from '../Text';

interface DropZoneProps {
  acceptedFiles?: Accept;
  onDrop:
    | (<T extends File>(
        acceptedFiles: T[],
        fileRejections: FileRejection[],
        event: DropEvent,
      ) => void)
    | undefined;
  maxFiles?: number;
  children?: ReactNode;
}

const Dropzone: FC<DropZoneProps> = ({ acceptedFiles, onDrop, maxFiles = 1, children }) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: acceptedFiles,
    onDrop,
    maxFiles,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <Box className="cursor-pointer">
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Box className="bg-primary rounded w-8 h-8 flex items-center justify-center mb-2">
          <CloudArrowUp className="text-white" />
        </Box>
        <Text className="text-primary text-sm text-center font-medium">
          Click to upload or drag and drop
        </Text>
      </Box>
      <Box className="flex items-center flex-wrap mt-6 gap-2">{children}</Box>
    </Box>
  );
};

export default Dropzone;
