import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListContainer from "./components/ListContainer";

import { loadTasks } from "./api/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <div>
      <h1>test-practice</h1>
      <ListContainer />
    </div>
  );
}

export default App;
