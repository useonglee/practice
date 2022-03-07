import reducer from "./reducer";
import { setTasks } from "./actions";

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
});
