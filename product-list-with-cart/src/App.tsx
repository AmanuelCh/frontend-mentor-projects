import Cart from './components/Cart';
import Desserts from './components/Desserts';

const App = () => {
  return (
    <>
      <div className='w-[85%] max-w-[1344px] mx-auto mt-14 flex flex-col gap-8 lg:flex-row'>
        <Desserts />
        <Cart />
      </div>
    </>
  );
};

export default App;
