import classes from "./Spaceship_Countainer.module.css";
import Card from "../UI/Card";
import Total from "./Total";
import SpaceshipItems from "./SpaceshipItems";
const Spaceship_Countainer = () => {
  return (
    <Card className={classes.container}>
      <div className={classes.header}>
        <h1>Spaceship configurator</h1>
      </div>
      <div className={classes.main}>
        <SpaceshipItems />
      </div>
      <div className={classes.total}>
        <Total />
      </div>
    </Card>
  );
};
export default Spaceship_Countainer;
