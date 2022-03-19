import classes from "./Total.module.css";
import React from "react";
import { useContext } from "react";
import TotalContext from "../Store/total-context";
import SelectedItems from "./MainItems/SelectedItems";
import { DATA_STORE } from "../Store/Data_Store";
const Total = () => {
  const ctx = useContext(TotalContext);
  const TotalAmount = ctx.items
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <div className={classes.box}>
      <ul className={classes.totalList}>
        <li>
          <h2>Base price:</h2>
          <div className={classes.price}>+1000€</div>
        </li>
        {ctx.items.map((element) => {
          return (
            <SelectedItems
              title={
                DATA_STORE[
                  DATA_STORE.findIndex((item) => item.id === element.packageID)
                ].title
              }
              price={element.price}
              key={element.packageID}
            ></SelectedItems>
          );
        })}
      </ul>
      <div className={classes.totalStyle}>
        <h2>Total:</h2>
        <div className={classes.price}>{TotalAmount + 1000}€</div>
      </div>
    </div>
  );
};
export default Total;
