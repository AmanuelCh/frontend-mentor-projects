import Calculator from './components/Calculator';
import Result from './components/Result';

function App() {
  return (
    <>
      <div className='flex flex-col drop-shadow-lg bg-White lg:rounded-2xl lg:flex-row'>
        <Calculator />
        <Result />
      </div>
    </>
  );
}

export default App;
