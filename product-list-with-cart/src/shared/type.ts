import React from 'react';

export type ItemType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  isInCart: boolean;
  quantity: number;
};
export type ContextProps = {
  items: ItemType[];
  cartItems: ItemType[];
  handleAddCartItem: (item: ItemType) => void;
  handleQuantityUpdate: (item: ItemType, action: string) => void;
  handleRemoveItem: (item: ItemType) => void;
  handleNewOrder: () => void;
};
export type ItemProviderProps = {
  children: React.ReactNode;
};
export type ButtonProps = {
  children: React.ReactNode;
  type: string;
  onClick: () => void;
};
