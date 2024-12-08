import { useState } from 'react';
import Calculator from './components/Calculator';
import Result from './components/Result';

function App() {
  const [totalMortgage, setTotalMortgage] = useState(0);
  const [overallMortgage, setOverallMortgage] = useState(0);

  return (
    <>
      <div className='flex flex-col drop-shadow-lg bg-White lg:rounded-2xl lg:flex-row'>
        <Calculator
          totalMortgage={totalMortgage}
          setTotalMortgage={setTotalMortgage}
          setOverallMortgage={setOverallMortgage}
        />
        <Result
          totalMortgage={totalMortgage}
          overallMortgage={overallMortgage}
        />
      </div>
    </>
  );
}

export default App;
