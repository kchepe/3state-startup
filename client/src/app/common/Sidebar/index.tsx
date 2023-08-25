'use client';

import { Transition, Dialog } from '@headlessui/react';
import { FC, Fragment, ReactNode, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Menu from './components/Menu';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Box>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Box className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <Box className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Box className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <Button className="-m-2.5" onClick={() => setSidebarOpen(false)}>
                      <Text className="sr-only">Close sidebar</Text>
                      <MdClose className="h-6 w-6 text-white" aria-hidden="true" />
                    </Button>
                  </Box>
                </Transition.Child>
                <Menu />
              </Dialog.Panel>
            </Transition.Child>
          </Box>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <Box
        className="hidden lg:fixed
      top-[3.8rem] lg:z-40 lg:flex lg:w-72 lg:flex-col left-0 h-screen"
      >
        <Menu />
      </Box>
      <Box className="lg:pl-72">
        <main className="py-8">
          <Box className="px-4 sm:px-6 lg:px-8">{children}</Box>
        </main>
      </Box>
    </Box>
  );
};

export default Sidebar;
