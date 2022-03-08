import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListContainer from "./ListContainer";
import tasks from "../constants/tasks";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

jest.mock("react-redux");

describe("ListContainer", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("renders tasks", () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent("테스트 공부 하자~~");

    const buttons = screen.getAllByText("완료");
    userEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 },
    });
  });
});
