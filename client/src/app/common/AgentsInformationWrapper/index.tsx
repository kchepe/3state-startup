import { FC, ReactElement } from 'react';
import AgentsDetails from './Components/AgentsDetails';

interface AgentsInformationWrapperProps {
  children: ReactElement;
}

const AgentsInformationWrapper: FC<AgentsInformationWrapperProps> = ({ children }) => (
  <div>
    <div className="p-1 lg:mr-[26rem] w-full lg:w-auto">{children}</div>
    <aside
      id="default-sidebar"
      className="fixed top-16 right-0 z-40 w-[28rem] h-screen px-8 py-5 lg:block hidden
      transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="bg-white border rounded-xl p-4 shadow">
        <AgentsDetails />
      </div>
    </aside>
  </div>
);

export default AgentsInformationWrapper;
