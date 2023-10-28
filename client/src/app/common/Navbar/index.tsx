import LogoImage from './components/LogoImage';
import NavMenu from './components/NavMenu';
import CredentialButtons from './components/CredentialButtons';
import Box from '../Box';

const Navbar = () => (
  <Box
    className="bg-white flex items-center shadow
                    px-2 sm:px-6 lg:px-8 h-16 fixed left-0 w-full top-0 z-50"
  >
    <Box className="grid grid-cols-12 w-full items-center">
      <Box className="col-span-4">
        <LogoImage />
      </Box>
      <Box className="col-span-4 flex justify-center">
        <NavMenu />
      </Box>
      <Box className="col-span-4 flex justify-end gap-2">
        <CredentialButtons />
      </Box>
    </Box>
  </Box>
);
export default Navbar;
