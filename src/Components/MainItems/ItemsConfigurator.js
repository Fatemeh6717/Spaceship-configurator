import Card from "../../UI/Card";
import classes from "./ItemsConfigurator.module.css";
import { useContext } from "react";
import TotalContext from "../../Store/total-context";
import Arrow from "../../UI/Arrow";
const ItemsConfigurator = (props) => {
  const ItemCtx = useContext(TotalContext);
  const itemAddtoPackageHandler = () => {
    ItemCtx.addItem({
      feildId: props.id,
      objId: props.itemId,
      price: props.price,
    });
  };
  return (
    <Card>
      <div onClick={itemAddtoPackageHandler} className={`${classes.listItem} `}>
        {props.id === "obj1" && (
          <div>
            <div
              className={classes.colors}
              style={{ backgroundColor: props.value }}
            ></div>
          </div>
        )}
        {props.id === "obj1" && (
          <div className={classes.priceColor}>+{props.price}€</div>
        )}
        <h2 className={classes.value}>
          {props.id !== "obj1" ? props.value : props.color}
        </h2>
        {props.id !== "obj1" && (
          <div className={`${props.id !== "obj1" && classes.price}`}>
            +{props.price}€
          </div>
        )}
        {props.id === "obj4" && (
          <ul className={classes.options}>
            {props.features.map((item, index) => {
              return (
                <li key={index}>
                  <Arrow />
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Card>
  );
};
export default ItemsConfigurator;
