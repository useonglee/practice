import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "./App";
import tasks from "./constants/tasks";

jest.mock("react-redux");

describe("App", () => {
  it("renders tasks", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) =>
      selector({
        tasks,
      })
    );

    render(<App />);

    expect(dispatch).toBeCalled();

    expect(
      screen.getByText("테스트 공부 하자~~", { exact: false })
    ).toBeInTheDocument();
  });
});
