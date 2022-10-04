import { Fragment, useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./CocktailItems.module.css";
import CocktailItemsForm from "./CocktailItemsForm";

const CocktailItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.flip}>
          <div className={classes.front}>
            <img
              alt="cockatils"
              className={classes.image}
              src={`/static/media/${props.image}.jpg`}
            ></img>
          </div>
          <div className={classes.back}>
            <h3 className={classes.title}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <CocktailItemsForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CocktailItems;
