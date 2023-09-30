import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import Sidebar from '@/app/common/Sidebar';
import getSessionUtil from '@/app/utils/getSession.util';
import Snackbar from '@/app/common/Notifications/Snackbar';

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSessionUtil();
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <Snackbar />
      <Sidebar>{children}</Sidebar>
    </>
  );
};
export default AdminLayout;
