import React from "react";
import { render, screen } from "@testing-library/react";
import context from "jest-plugin-context";

import List from "./List";
import tasks from "../constants/tasks";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks", () => {
    it("renders tasks", () => {
      const tasks = [
        { id: 1, title: "테스트 공부 하자~~" },
        { id: 2, title: "아자 아자 화이팅!" },
      ];
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("테스트 공부 하자~~");
      expect(container).toHaveTextContent("아자 아자 화이팅!");
    });

    it("renders 'success' buttons to delete a tasks", () => {
      renderList(tasks);

      const buttons = screen.getAllByText("완료");
      userEvent.click(buttons[0]);

      expect(handleClick).toBeCalled();
    });
  });

  context("without tasks", () => {
    it("renders no tasks message", () => {
      const tasks = [];
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("아무것도 안하는 중");
    });
  });
});
