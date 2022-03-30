import React from "react";
import { Provider } from "react-redux";
import store from "./lib/store";
import InboxScreen from "./components/InboxScreen/InboxScreen";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;
