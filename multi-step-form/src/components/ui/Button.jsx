const Button = ({ currentIndex, dispatch, amount, type, name, email }) => {
  const handleNextClick = () => {
    if (type === 'form' && !name) {
      dispatch({ type: 'inputError', payload: 'nameError' });
      return;
    }
    if (type === 'form' && !email) {
      dispatch({ type: 'inputError', payload: 'emailError' });
      return;
    }

    dispatch({ type: 'next', payload: currentIndex + 1 });
  };
  const handlePrevClick = () => {
    dispatch({ type: 'previous', payload: currentIndex - 1 });
  };

  return (
    <div
      className={`flex -mt-16 relative top-32 lg:-mt-32 ${
        amount === 2 ? 'justify-between' : 'justify-end'
      }`}
    >
      {amount === 1 && (
        <button
          className='bg-marineBlue w-fit text-alabaster py-3 px-6 rounded-lg hover:bg-slate-800'
          onClick={handleNextClick}
          disabled={currentIndex > 4 ? true : false}
        >
          Next Step
        </button>
      )}
      {amount === 2 && (
        <>
          <button
            className='w-fit text-marineBlue py-3 px-6 rounded-lg hover:text-purplishBlue'
            onClick={handlePrevClick}
            disabled={currentIndex < 1 ? true : false}
          >
            Go Back
          </button>

          {type === 'confirm' ? (
            <button
              className='bg-marineBlue w-fit text-alabaster py-3 px-6 rounded-lg hover:bg-slate-800'
              onClick={handleNextClick}
            >
              Confirm
            </button>
          ) : (
            <button
              className='bg-marineBlue w-fit text-alabaster py-3 px-6 rounded-lg hover:bg-slate-800'
              onClick={handleNextClick}
              disabled={currentIndex >= 4 ? true : false}
            >
              Next Step
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Button;
