import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../api/actions";
import List from "./List";

function ListContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => ({ tasks: state.tasks }));

  const handleClick = (id) => {
    dispatch(deleteTask(id));
  };

  return <List tasks={tasks} onClick={handleClick} />;
}

export default ListContainer;
