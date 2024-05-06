import { useReducer } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

const initialState = {
  currentIndex: 1,
  planType: 'yr',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return { ...state, currentIndex: action.payload };

    default:
      break;
  }
};

const Wrapper = () => {
  const [{ currentIndex, planType }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleClick = (id) => {
    dispatch({ type: 'next', payload: id });
  };

  return (
    <div className='bg-white p-4 w-[85%] lg:w-[70%] lg:max-w-[976px] mx-auto lg:h-[80vh] shadow-sm mt-[6em] lg:mt-[5em] rounded-xl lg:flex  lg:justify-between gap-6 lg:gap-20'>
      <Sidebar
        currentIndex={currentIndex}
        dispatch={dispatch}
        onHandleClick={handleClick}
      />
      <Main
        currentIndex={currentIndex}
        dispatch={dispatch}
        planType={planType}
      />
    </div>
  );
};

export default Wrapper;
