import UserInfo from './ui/UserInfo';
import Plan from './ui/Plan';
import Addons from './ui/Addons';
import Summary from './ui/Summary';

const Main = ({ currentIndex, dispatch, planType }) => {
  return (
    <div className='main p-6'>
      {currentIndex === 1 && (
        <UserInfo
          currentIndex={currentIndex}
          dispatch={dispatch}
        />
      )}
      {currentIndex === 2 && <Plan planType={planType} />}
      {currentIndex === 3 && <Addons />}
      {currentIndex === 4 && <Summary />}
    </div>
  );
};

export default Main;
