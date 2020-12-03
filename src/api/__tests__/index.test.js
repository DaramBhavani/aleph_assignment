import { API_USERS } from "./../constant";

describe("Constants", () => {
  it("verify the value to be present and correct", () => {
    expect(API_USERS).toBeDefined();
    expect(API_USERS).toBe("https://jsonplaceholder.typicode.com/users");
  });
});
