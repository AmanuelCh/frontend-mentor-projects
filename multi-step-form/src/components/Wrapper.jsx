import { useReducer } from 'react';

import Main from './Main';
import Sidebar from './Sidebar';
import UserInfo from './ui/UserInfo';
import Plan from './ui/Plan';
import Addons from './ui/Addons';
import Summary from './ui/Summary';
import Confirm from './ui/Confirm';

const initialState = {
  currentIndex: 1,
  planType: 'mo',
  mode: 'arcade',
  fees: {
    arcade: {
      perMo: 9,
      perYr: 90,
    },
    advanced: {
      perMo: 12,
      perYr: 120,
    },
    pro: {
      perMo: 15,
      perYr: 150,
    },
  },
  name: '',
  email: '',
  inputError: false,
  errorType: '',
  selectedAddons: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return { ...state, currentIndex: action.payload, inputError: false };
    case 'previous':
      return { ...state, currentIndex: action.payload };
    case 'typeToggle':
      return { ...state, planType: state.planType === 'mo' ? 'yr' : 'mo' };
    case 'modeChange':
      return { ...state, mode: action.payload };
    case 'inputError':
      return { ...state, inputError: true, errorType: action.payload };
    case 'nameChange':
      return { ...state, name: action.payload };
    case 'emailChange':
      return { ...state, email: action.payload };
    case 'addAddons':
      return {
        ...state,
        selectedAddons: [...state.selectedAddons, action.payload],
      };
    case 'removeAddons':
      return {
        ...state,
        selectedAddons: [
          ...state.selectedAddons.filter(
            (addon) => addon.title !== action.payload.title
          ),
        ],
      };
    case 'resetAddons':
      return {
        ...state,
        selectedAddons: [],
      };

    default:
      break;
  }
};

const Wrapper = () => {
  const [
    {
      currentIndex,
      planType,
      fees,
      mode,
      name,
      email,
      inputError,
      errorType,
      selectedAddons,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleClick = (id) => {
    if (!name) {
      dispatch({ type: 'inputError', payload: 'nameError' });
      return;
    }
    if (!email) {
      dispatch({ type: 'inputError', payload: 'emailError' });
      return;
    }

    dispatch({ type: 'next', payload: id });
  };

  return (
    <div className='bg-white p-4 w-[85%] lg:w-[70%] lg:max-w-[976px] mx-auto lg:h-[80vh] shadow-sm mt-[6em] lg:mt-[5em] rounded-xl lg:flex  lg:justify-between gap-6 lg:gap-16'>
      <Sidebar
        currentIndex={currentIndex}
        onHandleClick={handleClick}
      />
      <Main>
        {currentIndex === 1 && (
          <UserInfo
            currentIndex={currentIndex}
            inputError={inputError}
            dispatch={dispatch}
            name={name}
            email={email}
            errorType={errorType}
          />
        )}
        {currentIndex === 2 && (
          <Plan
            planType={planType}
            currentIndex={currentIndex}
            dispatch={dispatch}
            mode={mode}
          />
        )}
        {currentIndex === 3 && (
          <Addons
            currentIndex={currentIndex}
            planType={planType}
            dispatch={dispatch}
          />
        )}
        {currentIndex === 4 && (
          <Summary
            currentIndex={currentIndex}
            planType={planType}
            mode={mode}
            fees={fees}
            selectedAddons={selectedAddons}
            dispatch={dispatch}
          />
        )}
        {currentIndex === 5 && <Confirm />}
      </Main>
    </div>
  );
};

export default Wrapper;
