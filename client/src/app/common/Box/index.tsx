import React, { FC, forwardRef } from 'react';

interface BoxProps extends React.ComponentPropsWithRef<'div'> {}

const Box: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(({ children, ...divProps }, ref) => (
  <div ref={ref} {...divProps}>
    {children}
  </div>
));

export default Box;
