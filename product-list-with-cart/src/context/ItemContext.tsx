import React, { createContext, useContext, useState } from 'react';
import data from '../data/data.json';
import { ItemType } from '../shared/type';

// @ts-expect-error context default value
const ItemContext = createContext();

type Props = {
  children: React.ReactNode;
};

function ItemProvider({ children }: Props) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  const handleAddCartItem = (item: ItemType) => {
    setCartItems((items) => [...items, item]);

    setItems((items) =>
      items.map((curItem) =>
        curItem.name === item.name ? { ...curItem, isInCart: true } : curItem
      )
    );
  };

  const handleQuantityUpdate = (item: ItemType, action: string) => {
    if (action === 'decrease' && item.quantity >= 2)
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

    if (action === 'increase' && item.quantity < 9)
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
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        cartItems,
        handleAddCartItem,
        handleQuantityUpdate,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

function useItem() {
  const context = useContext(ItemContext);
  if (context === undefined)
    throw new Error('ItemContext was used outside of the ItemProvider');
  return context;
}

export { ItemProvider, useItem };
