import { fetchTasks } from "./fetchData";

export function setTasks(tasks) {
  return {
    type: "setTasks",
    payload: {
      tasks,
    },
  };
}

export function deleteTask(id) {
  return {
    type: "deleteTask",
    payload: {
      id,
    },
  };
}

export function loadTasks() {
  return async (dispatch) => {
    const tasks = await fetchTasks();
    dispatch(setTasks(tasks.slice(0, 10)));
  };
}
