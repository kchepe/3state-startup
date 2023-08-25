import { ComponentProps, FC } from 'react';

interface BoxProps extends ComponentProps<'div'> {}

const Box: FC<BoxProps> = ({ children, ...divProps }) => <div {...divProps}>{children}</div>;

export default Box;
