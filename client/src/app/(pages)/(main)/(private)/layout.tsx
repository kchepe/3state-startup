import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import Sidebar from '@/app/common/Sidebar';
import getSessionUtil from '@/app/utils/getSession.util';
import ApolloAuthWrapper from '@/app/lib/apollo-auth-wrapper';

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSessionUtil();
  if (!session) {
    redirect('/');
  }

  return (
    <ApolloAuthWrapper>
      <Sidebar>{children}</Sidebar>
    </ApolloAuthWrapper>
  );
};
export default AdminLayout;
