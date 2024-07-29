import Cart from './components/Cart';
import Desserts from './components/Desserts';

const App = () => {
  return (
    <>
      <div className='w-[90%] max-w-[1440px] mx-auto mt-7 flex flex-col gap-6 lg:w-[85%] lg:flex-row lg:mt-14 mb-12'>
        <Desserts />
        <Cart />
      </div>
    </>
  );
};

export default App;
