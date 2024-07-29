import useMedia from 'use-media';

import { ItemType } from '../shared/type';
import {
  cartIcon,
  increaseQuantityIcon,
  decreaseQuantityIcon,
} from '../shared/constants';

type ItemTypeProps = {
  item: ItemType;
};

const Item = ({ item }: ItemTypeProps) => {
  const isDesktop = useMedia({ minWidth: '976px' });
  const isTablet = useMedia({ minWidth: '768px' });

  return (
    <>
      <div className='mb-2'>
        <div>
          <img
            src={
              isDesktop
                ? item.image.desktop
                : isTablet
                ? item.image.tablet
                : item.image.mobile
            }
            className='rounded-lg shadow-sm'
            alt={item.name}
          />
        </div>
        <div className='flex justify-center translate-y-[-50%]'>
          <button className='flex items-center gap-3 bg-white px-5 py-[10px] rounded-full border border-rose-400 text-rose-900 text-[14px] font-semibold shadow-sm transition hover:border-red-primary hover:text-red-primary'>
            {' '}
            <img
              src={cartIcon}
              alt='add-to-cart-icon'
            ></img>{' '}
            Add to Cart
          </button>
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
