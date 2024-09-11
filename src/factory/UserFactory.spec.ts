import { expect, test } from "vitest";
import { UserFactory } from "./UserFactory";

test("Retornando usuário por factory", () => {
  const userFactory = new UserFactory();
  const user = userFactory.execute();
  expect(user).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
    })
  );
});
