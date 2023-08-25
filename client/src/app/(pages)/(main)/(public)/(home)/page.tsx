import Box from '@/app/common/Box';
import Title from './components/Title';
import SearchArea from './components/SearchArea';

const Home = () => (
  <Box>
    <Box
      className="h-[87vh] mt-4 rounded-[40px] bg-cover
      bg-center bg-[url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg')]"
    >
      <Box
        className="flex items-center flex-col
        justify-center gap-6 h-full rounded-[40px] bg-black-600/30 backdrop-brightness-50"
      >
        <Title />
        <SearchArea />
      </Box>
    </Box>
    {/* <Box className="py-8">content here</Box> */}
  </Box>
);

export default Home;
