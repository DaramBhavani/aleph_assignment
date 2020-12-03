import axios from "axios";
import UserContainer from "./../index";
import { act } from "react-dom/test-utils";
import { render, fireEvent, createEvent } from "@testing-library/react";
jest.mock("axios");

const users = [
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: 98765555,
    company: {
      name: "Romaguera-Crona",
    },
    id: 234,
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: 6926593,
    company: {
      name: "Deckow-Crist",
    },
    id: 900,
  },
];

describe("UserContainer", () => {
  const response = { data: users };
  beforeEach(() => {
    axios.get.mockResolvedValue(response);
  });
  it("renders correctly", async () => {
    const { findByTestId } = render(<UserContainer />);
    expect(await findByTestId("app")).toBeInTheDocument();
    await act(() => Promise.resolve());
  });

  it("test search functionality", async () => {
    const { findByTestId, getByTestId } = render(<UserContainer />);
    expect(await findByTestId("search")).toBeInTheDocument();
    await act(() => Promise.resolve());
    const searchField = await getByTestId("search");

    fireEvent(
      searchField,
      createEvent.change(searchField, {
        target: {
          value: "Ervin",
        },
      })
    );
    expect(await findByTestId("usercard")).toBeInTheDocument();
    await act(() => Promise.resolve());
  });
});
