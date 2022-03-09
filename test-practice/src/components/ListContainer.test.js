import React from "react";
import { useSelector } from "react-redux";

import ListContainer from "./ListContainer";
import tasks from "../constants/tasks";

import { render, screen } from "@testing-library/react";

jest.mock("react-redux");

describe("ListContainer", () => {
  it("renders tasks", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        tasks,
      })
    );

    render(<ListContainer />);

    expect(
      screen.getByText("테스트 공부 하자~~", { exact: false })
    ).toBeInTheDocument();
  });
});
