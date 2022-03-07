const initState = {
  tasks: [],
};

export default function reducer(state = initState, action) {
  if (action.type === "setTasks") {
    const { tasks } = action.payload;

    return {
      ...state,
      tasks,
    };
  }

  return state;
}
