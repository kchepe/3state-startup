'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import sidebarMenu from './sidebarMenu';

const Menu = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <div
      className="flex grow flex-col gap-y-5
        overflow-y-auto bg-gray-900 pt-4"
    >
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {sidebarMenu.map((item) => (
                <li key={item.name}>
                  <div
                    aria-hidden
                    onClick={() => push(item.href)}
                    className={clsx(
                      pathname.includes(item.href)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md items-center',
                      'py-4 px-8 text-sm leading-6 font-semibold cursor-pointer',
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
