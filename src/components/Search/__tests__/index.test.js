import React from "react";
import Search from "./../index";
import { render, fireEvent } from "@testing-library/react";

describe("Search", () => {
  let onChangeHandler = jest.fn();
  it("renders correctly", () => {
    const { container } = render(
      <Search
        value="bhavani"
        placeholder="enter your email"
        onChange={onChangeHandler}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
