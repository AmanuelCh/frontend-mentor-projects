import {
  emptyCartIllustration,
  removeItemIcon,
  carbonNeutralIcon,
  orderConfirmedIcon,
} from '../shared/constants';

const Cart = () => {
  return (
    <>
      <div className='w-full h-max basis-[30%] px-6 py-8 bg-white rounded-lg shadow-sm'>
        <p className='text-red-primary text-2xl font-semiBold'>Your Cart (0)</p>

        <div className='mt-6'>cart items</div>
      </div>
    </>
  );
};

export default Cart;
