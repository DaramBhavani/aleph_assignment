import React from "react";
import IconButton from "./../index";
import { render } from "@testing-library/react";

describe("IconButton", () => {
  it("verify prop values for the component", () => {
    const { getByText } = render(
      <IconButton iconValue="777" iconText="Hello!" />
    );
    expect(getByText("Hello!")).toBeInTheDocument();
    expect(getByText("777")).toBeInTheDocument();
  });
});
