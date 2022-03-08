import reducer from "./reducer";
import { setTasks, deleteTask } from "./actions";

import tasks from "../constants/tasks";

describe("reducer", () => {
  describe("setTasks", () => {
    it("changes task array", () => {
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );

      expect(state.tasks).not.toHaveLength(0);
    });
  });

  describe("deleteTask", () => {
    it("removes the task from tasks", () => {
      const state = reducer(
        {
          tasks: [{ id: 1, title: "테스트 공부 하자~~" }],
        },
        deleteTask(1)
      );

      expect(state.tasks).not.toHaveLength(1);
    });
  });
});
