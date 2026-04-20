import { test, expect } from "@playwright/test";

test("Signup with validation check", async ({ page }) => {
  await page.context().clearCookies();

  await page.goto("https://deshan.wuaze.com/index.php");

  await page.getByRole("link", { name: "Sign Up" }).click();
  await expect(page).toHaveURL(/register.php/);

  await page.getByTestId("fullname-input").fill("QA Tester");
  await page.getByTestId("nic-input").fill("200045678912");
  await page.getByTestId("phone-input").fill("0712345678");

  const email = `qa${Date.now()}@mail.com`;
  await page.getByTestId("email-input").fill(email);

  await page.getByTestId("password-input").fill("password123");

  await page.getByRole("button", { name: "Register Now" }).click();

  await expect(page.locator(".alert, .success")).toBeVisible();
});