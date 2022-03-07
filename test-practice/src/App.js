import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListContainer from "./components/ListContainer";

import { setTasks } from "./api/actions";
import tasks from "./constants/tasks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>test-practice</h1>
      <ListContainer />
    </div>
  );
}

export default App;
