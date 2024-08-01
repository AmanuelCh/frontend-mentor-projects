import useMedia from 'use-media';

import { useItem } from '../context/ItemContext';
import { ItemType } from '../shared/type';
import {
  cartIcon,
  increaseQuantityIcon,
  decreaseQuantityIcon,
} from '../shared/constants';
import Button from './Button';

type ItemTypeProps = {
  item: ItemType;
};

const Item = ({ item }: ItemTypeProps) => {
  const isDesktop = useMedia({ minWidth: '976px' });
  const isTablet = useMedia({ minWidth: '768px' });

  const { handleAddCartItem, handleQuantityUpdate } = useItem();

  // add selected item to cart
  const handleAddClick = () => {
    handleAddCartItem(item);
  };
  // update selected item quantity
  const handleUpdateClick = (action: string) => {
    handleQuantityUpdate(item, action);
  };

  return (
    <>
      <div className='mb-2'>
        <div>
          <img
            // render images based on screen width
            src={
              isDesktop
                ? item.image.desktop
                : isTablet
                ? item.image.tablet
                : item.image.mobile
            }
            className={`rounded-lg shadow-sm ${
              item.isInCart ? 'border-2 border-red-primary' : ''
            }`}
            alt={item.name}
          />
        </div>
        <div className='flex justify-center translate-y-[-50%]'>
          <Button
            type={item.isInCart ? 'update' : 'add'}
            onclick={!item.isInCart ? handleAddClick : undefined}
          >
            <div
              className={`flex items-center justify-center cursor-pointer ${
                item.isInCart && 'border w-4 h-4 rounded-full'
              }`}
              onClick={() => handleUpdateClick('decrease')}
            >
              <img
                src={item.isInCart ? decreaseQuantityIcon : cartIcon}
                alt={item.name}
              />
            </div>
            {item.isInCart ? item.quantity : 'Add to Cart'}
            {item.isInCart && (
              <div
                className={`flex items-center justify-center cursor-pointer ${
                  item.isInCart && 'border w-4 h-4 rounded-full'
                }`}
                onClick={() => handleUpdateClick('increase')}
              >
                <img
                  src={increaseQuantityIcon}
                  alt={item.name}
                />
              </div>
            )}
          </Button>
        </div>
        <div>
          <p className='text-rose-400 text-[14px]'>{item.category}</p>
          <p className='text-rose-900 font-semiBold'>{item.name}</p>
          <p className='text-red-primary font-semiBold'>
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Item;
