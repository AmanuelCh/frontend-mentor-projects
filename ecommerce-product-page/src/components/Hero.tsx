import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { CartItemType } from "../shared/types";
import {
  ButtonCart,
  minusIcon,
  plusIcon,
  Product1,
  Product2,
  Product3,
  Product4,
} from "../shared/constants";

type HeroProps = {
  itemQuantity: number;
  setItemQuantity: (value: number) => void;
  isItemAdded: boolean;
  setIsItemAdded: (value: boolean) => void;
  setCartItems: (value: CartItemType[]) => void;
  setIsCartOpen: (value: boolean) => void;
};

const images: Array<string> = [Product1, Product2, Product3, Product4];

const Hero = ({
  itemQuantity,
  setItemQuantity,
  isItemAdded,
  setIsItemAdded,
  setCartItems,
  setIsCartOpen,
}: HeroProps) => {
  const [curIndex, setCurIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const title = "Fall Limited Edition Sneakers";
  const price = 125;

  const handleDecreaseQuantity = () => {
    if (itemQuantity < 1) return;
    setItemQuantity(itemQuantity - 1);
  };
  const handleIncreaseQuantity = () => {
    if (itemQuantity > 8) return;
    setItemQuantity(itemQuantity + 1);
  };
  const handleAddItem = () => {
    if (!itemQuantity) return;

    const item = {
      image: Product1,
      title,
      price,
      amount: itemQuantity,
    };

    if (!isItemAdded)
      setCartItems((cartItems: CartItemType[]) => [...cartItems, item]);

    if (!isItemAdded) setIsItemAdded(true);
  };

  return (
    <div
      className="mx-auto md:max-w-[80%] lg:mt-16 xl:max-w-screen-xl"
      onClick={() => setIsCartOpen(false)}
    >
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
        {/* LEFT */}
        <div className="basis-[100%]">
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-[470px] md:rounded-2xl lg:w-[470px]"
              src={images[curIndex]}
              onClick={() => setOpen(true)}
              alt="product-image"
            />
          </div>
          <div className="mx-auto mt-7 flex w-[90%] flex-wrap items-center justify-start gap-6 md:justify-center lg:mt-12 lg:w-full lg:justify-start">
            {images.map((image, index) => (
              <img
                className={`w-[50px] cursor-pointer rounded-xl transition-all hover:scale-125 lg:w-[100px] ${index === curIndex && "border-[5px] border-gray-300"}`}
                src={image}
                alt={`product-image ${index + 1}`}
                onClick={() => {
                  setCurIndex(index);
                }}
                key={index}
              />
            ))}
          </div>

          <Lightbox
            plugins={[Thumbnails]}
            open={open}
            close={() => setOpen(false)}
            index={curIndex}
            slides={[
              { src: Product1 },
              { src: Product2 },
              { src: Product3 },
              { src: Product4 },
            ]}
            controller={{ closeOnBackdropClick: true }}
          />
        </div>

        {/* RIGHT */}
        <div className="mx-auto w-[90%] lg:mt-12 lg:w-full">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-dark-grayish-blue">
            sneaker company
          </p>
          <h2 className="mt-3 text-4xl font-semibold lg:mt-4">
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="mt-6 text-[15px] text-dark-grayish-blue lg:mt-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="mt-5 flex items-center justify-between lg:flex-col lg:items-start lg:justify-start">
            <div className="flex items-center gap-6">
              <h3 className="text-3xl font-bold">$125.00</h3>
              <p className="rounded-md bg-black px-2 text-[15px] font-semibold tracking-wider text-white">
                50%
              </p>
            </div>
            <p className="decoration-line-through font-bold text-dark-grayish-blue line-through lg:mt-3">
              $250.00
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-7 lg:flex-row">
            <div className="flex items-center justify-center gap-24 lg:justify-start lg:gap-8">
              <img
                className="cursor-pointer p-2"
                src={minusIcon}
                onClick={handleDecreaseQuantity}
                alt="decrease-quantity"
              />
              <p>{itemQuantity}</p>
              <img
                className="cursor-pointer p-2"
                src={plusIcon}
                onClick={handleIncreaseQuantity}
                alt="increase-quantity"
              />
            </div>
            <button
              className="flex items-center justify-center gap-4 rounded-lg bg-orange-primary px-12 py-3 font-semibold hover:opacity-80 lg:justify-start"
              onClick={handleAddItem}
            >
              <img src={ButtonCart} alt="add-to-cart" />
              {isItemAdded ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
