import { FC, ReactElement } from 'react';
import { IUser } from '@/app/types/types';
import AgentsDetails from './Components/AgentsDetails';
import Box from '../Box';

interface AgentsInformationWrapperProps {
  user: Omit<IUser, 'password' | 'userType'>;
  children: ReactElement;
}

const AgentsInformationWrapper: FC<AgentsInformationWrapperProps> = ({ children, user }) => (
  <Box>
    <Box className="p-1 lg:mr-[26rem] w-full lg:w-auto">{children}</Box>
    <Box
      id="default-sidebar"
      className="fixed top-16 right-0 z-40 w-[28rem] h-screen px-8 py-5 lg:block hidden
      transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <Box className="bg-white border rounded-xl p-4 shadow">
        <AgentsDetails user={user} />
      </Box>
    </Box>
  </Box>
);

export default AgentsInformationWrapper;
