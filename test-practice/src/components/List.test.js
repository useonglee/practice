import React from "react";
import { render, screen } from "@testing-library/react";
import context from "jest-plugin-context";

import List from "./List";
import userEvent from "@testing-library/user-event";
import tasks from "../constants/tasks";

jest.mock("react-redux");

describe("List", () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClickDelete} />);
  }

  context("with tasks", () => {
    it("renders tasks", () => {
      renderList(tasks);

      expect(
        screen.getByText("테스트 공부 하자~~", { exact: false })
      ).toBeInTheDocument();
      expect(
        screen.getByText("아자 아자 화이팅!", { exact: false })
      ).toBeInTheDocument();
    });

    it("renders 'success' buttons to delete a tasks", () => {
      renderList(tasks);

      const buttons = screen.getAllByRole("button", {
        name: "완료",
      });

      userEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context("without tasks", () => {
    it("renders no tasks message", () => {
      const tasks = [];
      renderList(tasks);

      expect(
        screen.getByText("아무것도 안하는 중", { exact: false })
      ).toBeInTheDocument();
    });
  });
});
