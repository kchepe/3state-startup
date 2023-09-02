import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import Sidebar from '@/app/common/Sidebar';
import getSessionUtil from '@/app/utils/getSession.util';

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSessionUtil();
  if (!session) {
    redirect('/');
  }

  return (
    <Sidebar>{children}</Sidebar>
  );
};
export default AdminLayout;
