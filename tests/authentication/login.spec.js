import { test, expect } from "@playwright/test";

test('Valid User Login', async ({ page }) => {
  await page.context().clearCookies();

  await page.goto('https://deshan.wuaze.com/index.php');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL(/login.php/);

  await page.fill('#email', 'deshan@gmail.com');
  await page.fill('#password', 'deshan@1234');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard.php/);
});


test('Valid Admin Login', async ({ page }) => {
  await page.context().clearCookies();

  await page.goto('https://deshan.wuaze.com/index.php');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL(/login.php/);

  await page.fill('#email', 'admindeshan@gmail.com');
  await page.fill('#password', 'admindeshan');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/admin\/admin.php/);
});


test('Invalid Login', async ({ page }) => {
  await page.context().clearCookies();

  await page.goto('https://deshan.wuaze.com/index.php');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL(/login.php/);

  await page.fill('#email', 'deshan@gmail.com');
  await page.fill('#password', '1234');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.alert')).toContainText('Invalid');
});