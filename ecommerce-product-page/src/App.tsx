import { useState } from "react";

import { CartItemType } from "./shared/types";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="pb-20">
      <div className="mx-auto max-w-[90%] md:max-w-[80%] xl:max-w-3xl">
        <Navbar
          cartItems={cartItems}
          setCartItems={setCartItems}
          isCartOpen={isCartOpen}
          onCartClick={handleCartClick}
        />
      </div>
      <Hero />
    </div>
  );
}

export default App;
