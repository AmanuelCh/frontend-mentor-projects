import { createContext, useContext, useState } from 'react';
import data from '../data/data.json';
import { ContextProps, ItemProviderProps, ItemType } from '../shared/type';

// @ts-expect-error context default value
const ItemContext = createContext();

function ItemProvider({ children }: ItemProviderProps) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  const handleAddCartItem = (item: ItemType) => {
    setItems((items) =>
      items.map((curItem) =>
        curItem.name === item.name ? { ...curItem, isInCart: true } : curItem
      )
    );

    setCartItems((items) => [...items, item]);
  };

  const handleQuantityUpdate = (item: ItemType, action: string) => {
    if (action === 'decrease' && item.quantity >= 2) {
      setItems((items) =>
        items.map((curItem) =>
          curItem.name === item.name
            ? { ...curItem, quantity: curItem.quantity - 1 }
            : curItem
        )
      );
      setCartItems((items) =>
        items.map((curItem) =>
          curItem.name === item.name
            ? { ...curItem, quantity: curItem.quantity - 1 }
            : curItem
        )
      );
    }

    if (action === 'increase' && item.quantity < 9) {
      setItems((items) =>
        items.map((curItem) =>
          curItem.name === item.name
            ? { ...curItem, quantity: curItem.quantity + 1 }
            : curItem
        )
      );
      setCartItems((items) =>
        items.map((curItem) =>
          curItem.name === item.name
            ? { ...curItem, quantity: curItem.quantity + 1 }
            : curItem
        )
      );
    }
  };

  const handleRemoveItem = (item: ItemType) => {
    setItems((items) =>
      items.map((curItem) =>
        curItem.name === item.name
          ? { ...curItem, isInCart: false, quantity: 1 }
          : curItem
      )
    );

    setCartItems((items) =>
      items.filter((curItem) => curItem.name !== item.name)
    );
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        cartItems,
        handleAddCartItem,
        handleQuantityUpdate,
        handleRemoveItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

function useItem() {
  const context: ContextProps = useContext(ItemContext);
  if (context === undefined)
    throw new Error('ItemContext was used outside of the ItemProvider');
  return context;
}

export { ItemProvider, useItem };
