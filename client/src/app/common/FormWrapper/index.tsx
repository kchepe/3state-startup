import { FC, ReactNode } from 'react';

interface FormWrapperProps {
  children: ReactNode;
  title: string;
}

const FormWrapper: FC<FormWrapperProps> = ({ children, title }) => (
  <div className="grid grid-cols-12 gap-2 py-6 border-b">
    <div className="col-span-6">
      <span className="text-base font-bold">{title}</span>
    </div>
    <div className="col-span-6">{children}</div>
  </div>
);

export default FormWrapper;
