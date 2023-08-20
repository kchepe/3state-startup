import React, { FC, ReactNode } from 'react';

interface DashboardWrapperProps {
  children: ReactNode;
  title: string;
  subHeader?: string | ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children, title, subHeader }) => (
  <div>
    <div className="py-2 border-b border-primary mb-4 flex items-center justify-between">
      <span className="font-bold text-lg">{title}</span>
      {subHeader}
    </div>
    <div>{children}</div>
  </div>
);

export default DashboardWrapper;
