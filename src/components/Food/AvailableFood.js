import classes from "./AvailableFood.module.css";
import FoodItems from "./FoodItems/FoodItems";

import { Fragment, useEffect, useState } from "react";

const AvailableFood = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const data = async () => {
      const responseData = await fetch(
        "https://evening-view-default-rtdb.europe-west1.firebasedatabase.app/food.json"
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

      setFood(dataArray);
    };
    data();
  }, []);

  const foodList = food.map((food) => (
    <FoodItems
      key={food.id}
      id={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
      image={food.image}
    />
  ));

  return (
    <Fragment>
      <h1 id="food" className={classes.food}>
        FOOD
      </h1>
      <p className={classes.appetizers}>perfect appetizers</p>
      <div className={classes.container}>{foodList}</div>
    </Fragment>
  );
};

export default AvailableFood;
