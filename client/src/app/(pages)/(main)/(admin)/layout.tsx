import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import Sidebar from '@/app/Common/Sidebar';
import ApolloAuthWrapper from '@/lib/apollo-auth-wrapper';
import getSessionUtil from '@/app/utils/getSession.util';

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
