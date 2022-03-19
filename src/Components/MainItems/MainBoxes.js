import classes from "./MainBoxes.module.css";
import ItemsConfigurator from "./ItemsConfigurator";
import React from "react";
const MainBoxes = (props) => {
  return (
    <React.Fragment>
      <div>
        <div className={classes.header}>
          <h1>
            {props.id !== "obj3" && "Select"}
            {props.title}:
          </h1>
        </div>
        <div className={classes.boxes}>
          {props.item.map((prop) => {
            return (
              <ItemsConfigurator
                key={prop.id}
                value={prop.value}
                price={prop.price}
                color={prop.name}
                features={prop.features}
                id={props.id}
                itemId={prop.id}
                title={props.title}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainBoxes;
