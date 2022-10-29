import "./global.css";
import { NewProduct } from "./components/NewProduct/NewProduct";
import Home from "./pages/Estoque";
import Routers from "./settings/Router";

function App() {
  return (
    <div>
      <Routers />
      {/* <Home></Home> */}
      {/* <NewProduct></NewProduct> */}
    </div>
  );
}

export default App;
