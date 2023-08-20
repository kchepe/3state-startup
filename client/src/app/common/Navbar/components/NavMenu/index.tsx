'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { menu } from './menu';

const NavMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <ul className="flex justify-around w-72 items-center">
      {menu.map((list) => (
        <li
          aria-hidden
          key={list.link}
          className={clsx(
            'font-medium cursor-pointer hover:text-gray-500 px-2',
            pathname.includes(list.label.toLowerCase())
              ? 'border-primary border-b-4 hover:border-gray-500'
              : 'bordner-none',
          )}
          onClick={() => handleRoute(list.link)}
        >
          <span>{list.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
