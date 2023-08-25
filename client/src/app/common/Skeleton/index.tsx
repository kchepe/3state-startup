import { FC } from 'react';
import clsx from 'clsx';
import Box from '../Box';

interface SkeletonProps {
  placeholderCount: number;
  fullWidth?: boolean;
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ placeholderCount, fullWidth, className }) => (
  <Box
    className={clsx('gap-x-7 gap-y-3', {
      'grid-cols-1': fullWidth,
      'grid-cols-card-list': !fullWidth,
    })}
  >
    {Array.from(Array(placeholderCount).keys()).map((num) => (
      <Box role="gridcell" className="animate-pulse col-span-1" key={num}>
        <Box
          className={`
          ${className}
          w-full 
          bg-gray-300 
          h-36
          rounded-md`}
        />
      </Box>
    ))}
  </Box>
);

export default Skeleton;
