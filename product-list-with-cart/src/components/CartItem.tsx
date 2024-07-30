import { useItem } from '../context/ItemContext';
import { ItemType } from '../shared/type';
import { removeItemIcon } from '../shared/constants';

type CartItemProps = {
  item: ItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { handleRemoveItem } = useItem();

  const handleDelete = () => {
    handleRemoveItem(item);
  };

  return (
    <div className='flex justify-between items-center mb-4 pb-4 border-b'>
      <div>
        <p className='font-semiBold text-[14px] text-rose-900 text-ellipsis'>
          {item.name}
        </p>
        <div className='flex gap-4 mt-2 text-[14px]'>
          <p className='text-red-primary font-semiBold'>{item.quantity}x</p>
          <p className='text-rose-400 font-semibold'>
            @ ${item.price.toFixed(2)}
          </p>
          <p className='text-rose-900 '>
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <div
        className='border border-rose-400 p-1 rounded-full cursor-pointer'
        onClick={handleDelete}
      >
        <img
          src={removeItemIcon}
          alt='remove item from cart'
        />
      </div>
    </div>
  );
};

export default CartItem;
