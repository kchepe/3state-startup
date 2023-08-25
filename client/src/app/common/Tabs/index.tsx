import { FC, ReactElement } from 'react';
import clsx from 'clsx';
import Box from '../Box';
import Text from '../Text';

export interface ITabMenu {
  label: string;
  child: ReactElement;
}

interface TabsProps {
  currentIndex: number;
  menu: ITabMenu[];
  handleSelectTab: (_: number) => void;
  className?: string;
}

const Tabs: FC<TabsProps> = ({ currentIndex, menu, handleSelectTab, className }) => {
  const selectedTab = menu.find((_, index) => index === currentIndex);
  return (
    <Box>
      <Box
        className={`${className} text-sm font-medium text-center text-gray-500 border-b
        border-gray-300`}
      >
        <ul className="flex flex-wrap -mb-px">
          {menu.map((item, index) => (
            <li
              className="mr-2 cursor-pointer"
              key={item.label}
              aria-hidden
              onClick={() => handleSelectTab(index)}
            >
              <Text
                className={clsx('inline-block p-4 border-b-2 rounded-t-lg', {
                  'text-primary border-primary': currentIndex === index,
                  'hover:text-gray-500 hover:border-gray-400 border-transparent text-gray-400':
                    currentIndex !== index,
                })}
              >
                {item.label}
              </Text>
            </li>
          ))}
        </ul>
      </Box>
      <Box className="p-3 py-5">{selectedTab?.child}</Box>
    </Box>
  );
};

export default Tabs;
