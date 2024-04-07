import { test, expect } from "@playwright/test";

test("Get user by user name", async ({ request }) => {
  const response = await request.get(
    `https://petstore.swagger.io/v2/user/string`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(response.ok()).toBeTruthy();
});

test("Create/Add user", async ({ request }) => {
  const response = await request.post("https://petstore.swagger.io/v2/user", {
    data: {
      id: 5,
      username: "Test",
      firstName: "Test",
      email: "Test@notexistingdomaintest.com",
      password: "testpassword123T",
      userStatus: 6,
    },
  });
});

test("Check user updated", async ({ request }) => {
  const response = await request.put(
    `https://petstore.swagger.io/v2/user/Test`,
    {
      data: {
        id: 5,
        username: "Test",
        firstName: "Test",
        email: "Test@notexistingdomaintest.com",
        password: "testpassword123T",
        userStatus: 6,
      },
    }
  );
  expect(response.status()).toBe(200);
  console.log("User data changed");
});

test("Delete user", async ({ request }) => {
  const response = await request.delete(
    `https://petstore.swagger.io/v2/user/Test`,
    {
      data: {
        username: "Test",
      },
    }
  );
  expect(response.status()).toBe(200);
  console.log("User is deleted");
});
