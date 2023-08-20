import LogoImage from './components/LogoImage';
import NavMenu from './components/NavMenu';
import CredentialButtons from './components/CredentialButtons';

const Navbar = () => (
  <div
    className="bg-white flex items-center shadow
                    px-2 sm:px-6 lg:px-8 h-[7vh] fixed left-0 w-full top-0 z-50"
  >
    <div className="grid grid-cols-12 w-full items-center">
      <div className="col-span-4">
        <LogoImage />
      </div>
      <div className="col-span-4 flex justify-center">
        <NavMenu />
      </div>
      <div className="col-span-4 flex justify-end gap-2">
        <CredentialButtons />
      </div>
    </div>
  </div>
);
export default Navbar;
