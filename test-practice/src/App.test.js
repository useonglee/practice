import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "./App";
import tasks from "./constants/tasks";

jest.mock("react-redux");

describe("App", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("renders tasks", () => {
    render(<App />);

    const container = screen.getByText("아무 일도 하기 싫다", { exact: false });

    expect(dispatch).toBeCalled();

    expect(container).toBeInTheDocument();
  });
});
