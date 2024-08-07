import { useRef, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { useItem } from '../context/ItemContext';
import { ItemType } from '../shared/type';
import CartItem from './CartItem';
import OrderItem from './OrderItem';
import {
  emptyCartIllustration,
  carbonNeutralIcon,
  orderConfirmedIcon,
} from '../shared/constants';

const Cart = () => {
  const { cartItems, handleNewOrder } = useItem();

  const totalPrice: number = cartItems.reduce(
    (sum: number, item: ItemType) => sum + item.price * item.quantity,
    0
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleNewOrderClick = () => {
    handleNewOrder();
    setModalOpen(false);
  };

  return (
    <>
      <div ref={modalRef} />

      <div className='w-full h-max basis-[30%] px-6 py-8 bg-white rounded-lg shadow-sm'>
        <p className='text-red-primary text-2xl font-semiBold'>
          Your Cart ({cartItems.length})
        </p>

        <div className='mt-6'>
          {!cartItems.length ? (
            <div className='flex flex-col justify-center items-center'>
              <img
                src={emptyCartIllustration}
                className='my-4'
                alt='empty-cart-illustration'
              />
              <p className='pb-4 text-rose-400 text-[14px] font-semiBold text-center'>
                Your added items will appear here
              </p>
            </div>
          ) : (
            cartItems.map((item: ItemType) => (
              <CartItem
                item={item}
                key={item.name}
              />
            ))
          )}
        </div>

        {cartItems.length ? (
          <>
            <div className='flex justify-between items-center mt-10 mb-8'>
              <p className='text-rose-900 text-[15px]'>Order Total</p>
              <p className='text-2xl font-semiBold'>${totalPrice.toFixed(2)}</p>
            </div>

            <div className='flex justify-center items-center bg-rose-50 py-3 rounded-md'>
              <p className='flex items-center gap-2'>
                <img
                  src={carbonNeutralIcon}
                  alt='carbon-neutral-delivery'
                />{' '}
                <span className='text-rose-900 text-[14px]'>
                  This is a{' '}
                  <span className='font-semiBold'>carbon-neutral</span> delivery
                </span>
              </p>
            </div>

            <button
              className='mt-6 w-full text-center bg-red-primary text-rose-50 font-semibold py-3 rounded-full hover:opacity-75'
              onClick={() => setModalOpen(true)}
            >
              Confirm Order
            </button>

            <Modal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              center
              container={modalRef.current}
              classNames={{
                overlay: 'overlay',
                modal: 'modal',
              }}
              showCloseIcon={false}
            >
              <div className='mt-4'>
                <img
                  src={orderConfirmedIcon}
                  alt='confirm order icon'
                />
              </div>
              <div>
                <p className='text-rose-900 mt-6 text-4xl font-bold leading-tight'>
                  Order Confirmed
                </p>
                <p className='mt-3 text-rose-400'>
                  We hope you enjoy your food!
                </p>
              </div>

              <div className='mt-6 bg-rose-50 px-6 py-4 rounded-md'>
                {cartItems.map((item) => (
                  <OrderItem
                    item={item}
                    key={item.name}
                  />
                ))}

                <div className='flex justify-between items-center mt-8'>
                  <p className='text-rose-900 text-[15px]'>Order Total</p>
                  <p className='text-2xl font-semiBold'>
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                className='mt-10 w-full text-center bg-red-primary text-rose-50 font-semibold py-3 rounded-full hover:opacity-75'
                onClick={handleNewOrderClick}
              >
                Start New Order
              </button>
            </Modal>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
