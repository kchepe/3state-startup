import Title from './components/Title';
import SearchArea from './components/SearchArea';

const Home = () => (
  <div>
    <div
      className="h-[87vh] mt-4 rounded-[40px] bg-cover
      bg-center bg-[url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg')]"
    >
      <div
        className="flex items-center flex-col
        justify-center gap-6 h-full rounded-[40px] bg-black-600/30 backdrop-brightness-50"
      >
        <Title />
        <SearchArea />
      </div>
    </div>
    {/* <div className="py-8">content here</div> */}
  </div>
);

export default Home;
