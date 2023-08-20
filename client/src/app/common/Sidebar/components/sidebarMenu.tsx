import { BiUser } from 'react-icons/bi';
import { BsHouseAdd } from 'react-icons/bs';

const sidebarMenu = [
  { name: 'My Properties', href: '/my-properties', icon: <BsHouseAdd /> },
  { name: 'Account Settings', href: '/account-settings', icon: <BiUser /> },
];

export default sidebarMenu;
