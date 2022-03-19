import { DATA_STORE } from "../Store/Data_Store";
import MainBoxes from "./MainItems/MainBoxes";
import React from "react";
const SpaceshipItems = () => {
  return (
    <React.Fragment>
      {DATA_STORE.map((prop) => {
        return <MainBoxes key={prop.id} title={prop.title} item={prop.items} id={prop.id} />;
      })}
    </React.Fragment>
  );
};
export default SpaceshipItems;
