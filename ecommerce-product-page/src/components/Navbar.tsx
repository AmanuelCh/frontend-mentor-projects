import { AvatarImg, CartIcon, Logo, MenuIcon } from "../shared/constants";
import { CartItemType } from "../shared/types";

type CartItemTypeProps = {
  cartItems: CartItemType[];
  setCartItems: (cartItems: CartItemType[]) => void;
  isCartOpen: boolean;
  onCartClick: () => void;
};

const Navbar = ({
  cartItems,
  setCartItems,
  isCartOpen,
  onCartClick,
}: CartItemTypeProps) => {
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
            className="cursor-pointer rounded-full border-[1px] p-2 hover:border-gray-400"
            onClick={onCartClick}
          >
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
          <div className="absolute right-0 top-[130%] z-20 h-[200px] w-full bg-white shadow-lg md:w-[350px]">
            <div>
              <h3 className="border-b border-gray-200 p-5 pb-5 pt-3">Cart</h3>

              <div className="relative p-5 pt-3">
                {cartItems.length === 0 ? (
                  <p className="absolute left-[50%] top-[150%] h-full translate-x-[-50%] text-gray-500">
                    Your cart is empty
                  </p>
                ) : (
                  "hey"
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
