import { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AvailableCocktails from "./components/Cocktails/AvailableCocktails";
import SocialFollow from "./components/Layout/SocialFollow";

import AvailableFood from "./components/Food/AvailableFood";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [aboutIsShown, setAboutIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showAboutHandler = () => {
    setAboutIsShown(true);
  };

  const hideAboutHandler = () => {
    setAboutIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {aboutIsShown && <AboutUs onClose={hideAboutHandler} />}
      <Header onShownCart={showCartHandler} onShownAbout={showAboutHandler} />
      <main>
        <AvailableCocktails />
        <AvailableFood />
      </main>
      <SocialFollow />
    </CartProvider>
  );
};

export default App;
