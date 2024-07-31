import { ItemType } from '../shared/type';

type CartItemProps = {
  item: ItemType;
};

const OrderItem = ({ item }: CartItemProps) => {
  return (
    <div className='flex items-center justify-between mb-4 pb-4 border-b'>
      <div className='flex gap-5'>
        <div className='w-[50px]'>
          <img
            src={item.image.thumbnail}
            className='w-full rounded-md'
            alt={item.name}
          />
        </div>
        <div>
          <p className='font-semiBold text-[14px] text-rose-900 '>
            {item.name}
          </p>
          <div className='flex gap-4 mt-2 text-[14px]'>
            <p className='text-red-primary font-semiBold'>{item.quantity}x</p>
            <p>@ ${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <p className='font-semibold'>
        ${(item.quantity * item.price).toFixed(2)}
      </p>
    </div>
  );
};

export default OrderItem;
