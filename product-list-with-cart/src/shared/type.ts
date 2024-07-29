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
};
export type cartItemType = {
  quantiy: number;
} & ItemType;
