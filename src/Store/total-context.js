import react from "react";
const TotalContext = react.createContext({
  items: [],
  addItem: (item) => {},
});
export default TotalContext;
