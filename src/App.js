import classes from "./App.module.css";
import Spaceship_Countainer from "./Components/Spaceship_Countainer";
import TotalPackageProvider from "./Store/TotalPackageProvider";
function App() {
  return (
    <TotalPackageProvider>
      <div className={classes.App}>
        <Spaceship_Countainer />
      </div>
    </TotalPackageProvider>
  );
}

export default App;
