import React, { createContext, useContext, useState } from 'react';
import data from '../data/data.json';

// @ts-expect-error context default value
const ItemContext = createContext();

type Props = {
  children: React.ReactNode;
};
type ItemType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};
type cartItemType = {
  quantiy: number;
} & ItemType;

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
