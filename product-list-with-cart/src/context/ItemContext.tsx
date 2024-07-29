import React, { createContext, useContext, useState } from 'react';
import data from '../data/data.json';
import { cartItemType, ItemType } from '../shared/type';

// @ts-expect-error context default value
const ItemContext = createContext();

type Props = {
  children: React.ReactNode;
};

function ItemProvider({ children }: Props) {
  const [items, setItems] = useState<ItemType[]>(data);
  const [cartItems, setCartItems] = useState<cartItemType[]>([]);

  return (
    <ItemContext.Provider
      value={{
        items,
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
