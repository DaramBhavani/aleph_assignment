import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("main-container")).toBeInTheDocument();
  });
});
