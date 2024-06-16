import {
  AvatarImg,
  CartIcon,
  DeleteButton,
  Logo,
  MenuIcon,
} from "../shared/constants";
import { CartItemType } from "../shared/types";

type CartItemTypeProps = {
  cartItems: CartItemType[];
  setCartItems: (cartItems: CartItemType[]) => void;
  isCartOpen: boolean;
  onCartClick: () => void;
  setIsItemAdded: (value: boolean) => void;
};

const Navbar = ({
  cartItems,
  setCartItems,
  isCartOpen,
  onCartClick,
  setIsItemAdded,
}: CartItemTypeProps) => {
  const handleDelete = () => {
    setCartItems([]);
    setIsItemAdded(false);
  };

  return (
    <div className="mt-2 border-gray-200 p-3 pb-6 lg:mt-4 lg:border-b">
      <div className="relative flex items-center justify-between">
        {/* LOGO AND MENU */}
        <div className="flex items-center gap-4 lg:gap-16">
          <div className="lg:hidden">
            <img src={MenuIcon} className="cursor-pointer" alt="menu-icon" />
          </div>
          <img
            src={Logo}
            className="w-[70%] cursor-pointer md:w-[100%]"
            alt="sneakers-logo"
          />
          <ul className="hidden space-x-6 text-dark-grayish-blue lg:flex">
            <li className="cursor-pointer hover:text-gray-800">Collections</li>
            <li className="cursor-pointer hover:text-gray-800">Men</li>
            <li className="cursor-pointer hover:text-gray-800">Women</li>
            <li className="cursor-pointer hover:text-gray-800">About</li>
            <li className="cursor-pointer hover:text-gray-800">Contact</li>
          </ul>
        </div>

        {/* CART AND AVATAR */}
        <div className="flex items-center gap-4 md:gap-10">
          <div
            className="relative cursor-pointer rounded-full border-[1px] p-2 hover:border-gray-400"
            onClick={onCartClick}
          >
            <p className="absolute right-[-8%] top-[-20%] z-30 rounded-full bg-orange-primary px-[5px] text-[12px] font-bold text-white">
              {cartItems.map((item) => item.amount)}
            </p>
            <img
              src={CartIcon}
              className="w-[90%] md:w-[100%]"
              alt="cart-icon"
            />
          </div>
          <div className="cursor-pointer rounded-full border-[2px] hover:border-orange-primary">
            <img
              src={AvatarImg}
              className="w-[25px] cursor-pointer md:w-[50px]"
              alt="avatar-icon"
            />
          </div>
        </div>

        {/* CART ITEMS */}
        {isCartOpen && (
          <div className="absolute right-0 top-[165%] z-20 h-[200px] w-full bg-white shadow-2xl md:w-[350px] lg:top-[130%]">
            <div>
              <h3 className="border-b border-gray-200 p-5 pb-5 pt-3">Cart</h3>

              <div className="relative p-5 pt-3">
                {cartItems.length === 0 ? (
                  <p className="absolute left-[50%] top-[150%] h-full translate-x-[-50%] text-gray-500">
                    Your cart is empty
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div>
                      <div className="flex items-center justify-between">
                        <img
                          className="w-[40px] rounded lg:w-[50px]"
                          src={item.image}
                          alt="cart item image"
                        />
                        <div>
                          <p className="text-[14px] text-dark-grayish-blue lg:text-[15px]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[14px] tracking-wide text-dark-grayish-blue lg:text-base">
                            ${item.price}.00 x {item.amount}{" "}
                            <span className="pl-2 font-semibold text-black">
                              ${item.price * item.amount}.00
                            </span>
                          </p>
                        </div>
                        <img
                          className="cursor-pointer"
                          src={DeleteButton}
                          onClick={handleDelete}
                          alt="delete item"
                        />
                      </div>
                      <button className="mt-5 w-full rounded-lg bg-orange-primary py-3 font-semibold hover:opacity-80">
                        Checkout
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
