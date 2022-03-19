import TotalContext from "./total-context";
import { useReducer } from "react";
const packageReducer = (state, action) => {
  if (action.type === "Add") {
    const findPackageIndex = state.item.findIndex(
      (item) => item.packageID === action.packegeItems.feildId
    );
    const selectedItem = state.item[findPackageIndex];
    const updatedExistItem = {
      ...selectedItem,
      priceId: action.packegeItems.objId,
      price: action.packegeItems.price,
    };
    let updatedItems;
    updatedItems = [...state.item];
    updatedItems[findPackageIndex] = updatedExistItem;
    return { item: updatedItems };
  }
};
const defaultPackageState = {
  item: [
    { packageID: "obj1", priceId: "", price: 0 },
    { packageID: "obj2", priceId: "", price: 0 },
    { packageID: "obj3", priceId: "", price: 0 },
    { packageID: "obj4", priceId: "", price: 0 },
  ],
};
const TotalPackageProvider = (props) => {
  const [packageState, dispatchPackageAction] = useReducer(
    packageReducer,
    defaultPackageState
  );
  const addItemToPackageHandler = (prop) => {
    dispatchPackageAction({
      type: "Add",
      packegeItems: prop,
    });
  };
  const packageContext = {
    items: packageState.item,
    addItem: addItemToPackageHandler,
  };
  return (
    <TotalContext.Provider value={packageContext}>
      {props.children}
    </TotalContext.Provider>
  );
};
export default TotalPackageProvider;
