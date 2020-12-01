import React from "react";
import UserCard from "./../index";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("UserCard", () => {
  let data = {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: 98765555,
    company: {
      name: "Romaguera-Crona",
    },
  };

  it("verify the prop value for name", () => {
    const { getByText, container } = render(<UserCard {...data} />);
    expect(container.querySelector("span").firstChild.textContent).toBe(
      data.name
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(<UserCard {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
