import { useState } from "react";

import { CartItemType } from "./shared/types";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="pb-20">
      <div className="mx-auto max-w-[90%] md:max-w-[80%] xl:max-w-screen-xl">
        <Navbar
          cartItems={cartItems}
          setCartItems={setCartItems}
          isCartOpen={isCartOpen}
          onCartClick={handleCartClick}
          setIsItemAdded={setIsItemAdded}
        />
      </div>
      <Hero
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
        isItemAdded={isItemAdded}
        setIsItemAdded={setIsItemAdded}
        setCartItems={setCartItems}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
}

export default App;
