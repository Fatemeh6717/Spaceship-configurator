import classes from "./SelectedItem.module.css";
const SelectedItems = (props) => {
  return (
    <div className={classes.totalBox}>
      <li>
        <h2>{props.title}:</h2>
        <div className={classes.price}>${props.price}</div>
      </li>
    </div>
  );
};
export default SelectedItems;
