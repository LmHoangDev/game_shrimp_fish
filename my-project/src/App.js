import { createStoreHook } from "react-redux";
import React from "react";
import "./App.css";
import BauCua from "./components/Game/BauCua";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
const MyContext = React.createContext(null);
const myStore = createStoreHook(rootReducer);
function App() {
  return (
    <Provider context={MyContext} store={myStore}>
      <BauCua />
    </Provider>
  );
}

export default App;
