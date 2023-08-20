import { FC } from 'react';
import clsx from 'clsx';

interface SkeletonProps {
  placeholderCount: number;
  fullWidth?: boolean;
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ placeholderCount, fullWidth, className }) => (
  <div
    className={clsx('gap-x-7 gap-y-3', {
      'grid-cols-1': fullWidth,
      'grid-cols-card-list': !fullWidth,
    })}
  >
    {Array.from(Array(placeholderCount).keys()).map((num) => (
      <div role="gridcell" className="animate-pulse col-span-1" key={num}>
        <div
          className={`
          ${className}
          w-full 
          bg-gray-300 
          h-36
          rounded-md`}
        />
      </div>
    ))}
  </div>
);

export default Skeleton;
