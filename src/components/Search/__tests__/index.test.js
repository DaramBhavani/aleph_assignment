import React from "react";
import Search from "./../index";
import { render } from "@testing-library/react";

describe("Search", () => {
  let onChangeHandler = jest.fn();
  it("renders correctly", () => {
    const { container } = render(
      <Search
        value="bhavani"
        placeholder="enter your name/email"
        onChange={onChangeHandler}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
