import classes from "./AvailableCocktails.module.css";
import CocktailItems from "./CocktailItems/CocktailItems";

import { Fragment, useEffect, useState } from "react";

const AvailableCocktails = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const data = async () => {
      const responseData = await fetch(
        "https://evening-view-default-rtdb.europe-west1.firebasedatabase.app/drinks.json"
      );
      const jsonData = await responseData.json();
      console.log(jsonData);

      const dataArray = [];

      for (const key in jsonData) {
        dataArray.push({
          id: key,
          name: jsonData[key].name,
          description: jsonData[key].description,
          price: jsonData[key].price,
          image: jsonData[key].image,
        });
      }

      setDrinks(dataArray);
    };
    data();
  }, []);

  const cocktailsList = drinks.map((cocktail) => (
    <CocktailItems
      key={cocktail.id}
      id={cocktail.id}
      name={cocktail.name}
      description={cocktail.description}
      price={cocktail.price}
      image={cocktail.image}
    />
  ));

  return (
    <Fragment>
      <h1 className={classes.drinks}>DRINKS</h1>
      <p className={classes.selections}>best selections</p>
      <div className={classes.container}>{cocktailsList}</div>
    </Fragment>
  );
};

export default AvailableCocktails;
